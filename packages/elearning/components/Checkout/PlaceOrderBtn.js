import React, {useEffect, useState} from "react";
import LoadingSpinner from "@/utils/LoadingSpinner";
import axios from "axios";
import toast from "react-hot-toast";
import {useRouter} from "next/router";
import {useDispatch} from "react-redux";
import {calculateCartTotal} from "@/utils/calculateCartTotal";
import {NavLink} from "@mantine/core";
import Link from "next/link";

const PlaceOrderBtn = ({user, cartItems}) => {
    const [stripeAmount, setStripeAmount] = React.useState(0);
    const [loading, setLoading] = useState(false);
    const [paymentStatus, setPaymentStatus] = useState({
        status: ''
    })
    const [paymentId, setPaymentId] = useState('')
    const [paymentTime, setPaymentTime] = useState({
        date: ''
    })
    const dispatch = useDispatch();
    const router = useRouter();


    const handleCancelOrder = async () => {
        try {

            const url = `${baseUrl}/api/rede-gateway/cancel-order?pay_order=${paymentId}`;
            const response = await axios.delete(url);

            toast.success(response.data.message, {
                style: {
                    border: "1px solid #4BB543",
                    padding: "16px",
                    color: "#4BB543",
                },
                iconTheme: {
                    primary: "#4BB543",
                    secondary: "#FFFAEE",
                },
            });

        } catch (err) {
            // console.log(err.response);
            let {
                response: {
                    data: {message},
                },
            } = err;
            toast.error(message, {
                style: {
                    border: "1px solid #ff0033",
                    padding: "16px",
                    color: "#ff0033",
                },
                iconTheme: {
                    primary: "#ff0033",
                    secondary: "#FFFAEE",
                },
            });
        }
    }


    const checkPaymentStatus = async () => {
        const thirtyMinAfter = new Date(paymentTime.date.getTime() + 30 * 60 * 1000)

        if (thirtyMinAfter.getTime() <= new Date().getTime()) {

            return handleCancelOrder()
            .then(e => console.log(e))
            .catch(error => console.log(error))

        }

        const statusUrl = `${baseUrl}/api/rede-gateway/status?pay_order=${paymentId}`;
        // const statusUrl = `${baseUrl}/api/rede-gateway/status?pay_order=pb2btpq`;
        const statusResponse = await axios.get(statusUrl)
        setPaymentStatus({
                status: paymentStatus.status = statusResponse.data.status === 'CREATED' ?
                    paymentStatus.status === 'CREATED' ? 'pending' : 'CREATED' :
                    statusResponse.data.status
            }
        )
        console.log(statusResponse.data.status)
        console.log(paymentStatus)
    }


    const handlePersistCourse = async () => {
        try {
            const payload = {
                cartItems,
                userId: user.id,
                buyer_name: user.first_name,
                buyer_email: user.email,
                buyer_avatar: user.profile_photo,
            };
            const url = `${baseUrl}/api/checkout`;
            const response = await axios.post(url, payload);
            toast.success(response.data.message, {
                style: {
                    border: "1px solid #4BB543",
                    padding: "16px",
                    color: "#4BB543",
                },
                iconTheme: {
                    primary: "#4BB543",
                    secondary: "#FFFAEE",
                },
            });
            dispatch({
                type: "RESET_CART",
            });
            setLoading(false);

            router.push("/learning/my-courses");
        } catch (err) {
            // console.log(err.response);
            let {
                response: {
                    data: {message},
                },
            } = err;
            toast.error(message, {
                style: {
                    border: "1px solid #ff0033",
                    padding: "16px",
                    color: "#ff0033",
                },
                iconTheme: {
                    primary: "#ff0033",
                    secondary: "#FFFAEE",
                },
            });
        }
    };

    const handleBeforeUnload = event => {

        event.preventDefault();
        event.returnValue = 'asdfasdf'

        if (paymentId) handleCancelOrder().then(e => console.log(e))
    };

    useEffect(() => {

        window.addEventListener('beforeunload', handleBeforeUnload);

            return () => {
                console.log(paymentId, "canceled");
                if (paymentId) handleCancelOrder().then(e => console.log(e));
                window.removeEventListener('beforeunload', handleBeforeUnload);
            };

        }, [paymentId]);

    useEffect(() => {
        const {stripeTotal} = calculateCartTotal(cartItems);
        setStripeAmount(stripeTotal);
    }, [cartItems]);

    useEffect(() => {
        // Poll the API route every 5 seconds until payment status changes
        if (!paymentStatus.status) return;
        if (paymentStatus.status === "pending" || paymentStatus.status === 'CREATED') {
            const intervalId = setTimeout(checkPaymentStatus, 4000);
            return () => clearInterval(intervalId);
        } else if (paymentStatus.status === "PAID") {
            // Payment has been approved, redirect to success page


            handlePersistCourse().then(r => {
                // console.log(r)
            })

        } else {
            // Payment has been canceled or disapproved, redirect to failure page
            router.push("/failure");
        }
    }, [paymentStatus, setPaymentStatus]);

    const handleCheckout = async () => {
        setLoading(true);
        try {
            const payload = {
                cartItems,
                userId: user.id,
                buyer_name: user.first_name,
                buyer_email: user.email,
                buyer_avatar: user.profile_photo,
            };


            const url = `${baseUrl}/api/rede-gateway/create`;
            const response = await axios.post(url, payload);
            
            console.log(response.data);

            toast.success(response.data.message, {
                style: {
                    border: "1px solid #4BB543",
                    padding: "16px",
                    color: "#4BB543",
                },
                iconTheme: {
                    primary: "#4BB543",
                    secondary: "#FFFAEE",
                },
            });
            const newTab = window.open()
            newTab.location.href = response.data.link

            setPaymentId(response.data.payOrder);
            setPaymentStatus({
                status: "pending"
            })
            setPaymentTime({
                date: new Date()
            })


        } catch (err) {
             console.log(err.response);
            let {
                response: {
                    data: {message},
                },
            } = err;
            toast.error(message, {
                style: {
                    border: "1px solid #ff0033",
                    padding: "16px",
                    color: "#ff0033",
                },
                iconTheme: {
                    primary: "#ff0033",
                    secondary: "#FFFAEE",
                },
            });
        }
    };


    return (
        <div>
            <button
                onClick={handleCheckout}
                type="submit"
                className="default-btn-style-3 d-block w-100 mt-3"
                disabled={cartItems.length == 0 || loading}
            >
                Place Order <span></span> {loading && <LoadingSpinner/>}
            </button>
            {paymentId && <button onClick={handleCancelOrder}>Cancel Order</button>}
        </div>


    );
};

export default PlaceOrderBtn;
