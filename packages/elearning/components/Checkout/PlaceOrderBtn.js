import React, { useEffect, useState } from 'react';
import LoadingSpinner from '@/utils/LoadingSpinner';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { calculateCartTotal } from '@/utils/calculateCartTotal';
import { NavLink } from '@mantine/core';
import Link from 'next/link';
import baseUrl from 'utils/baseUrl.js';

const PlaceOrderBtn = ({ user, cartItems }) => {
    const [stripeAmount, setStripeAmount] = React.useState(0);
    const [loading, setLoading] = useState(false);
    const [paymentStatus, setPaymentStatus] = useState({
        status: '',
    });
    const [paymentId, setPaymentId] = useState('');
    const [paymentTime, setPaymentTime] = useState({
        date: '',
    });
    const dispatch = useDispatch();
    const router = useRouter();



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
                    border: '1px solid #4BB543',
                    padding: '16px',
                    color: '#4BB543',
                },
                iconTheme: {
                    primary: '#4BB543',
                    secondary: '#FFFAEE',
                },
            });
            dispatch({
                type: 'RESET_CART',
            });
            setLoading(false);

            router.push('/learning/my-courses');
        } catch (err) {
            // console.log(err.response);
            let {
                response: {
                    data: { message },
                },
            } = err;
            toast.error(message, {
                style: {
                    border: '1px solid #ff0033',
                    padding: '16px',
                    color: '#ff0033',
                },
                iconTheme: {
                    primary: '#ff0033',
                    secondary: '#FFFAEE',
                },
            });
        }
    };


    useEffect(() => {

        const script = document.createElement('script');
        script.src = 'https://checkout.hotmart.com/lib/hotmart-checkout-elements.js';
        script.async = true;
        script.onload = () => {
            const checkoutElements = window.checkoutElements.init('overlayCheckout', {
                offer: cartItems[0].hotmartId
            });
            checkoutElements.attach('#payment_button');
        };
        document.body.appendChild(script);

    }, [])

    return (
        <div>
            <button onClick={() => router.push("/payment-status") } id="payment_button" className={'default-btn-style-3 d-block w-100 mt-3'} >Proceed to checkout</button>
        </div>
    );
};

export default PlaceOrderBtn;
