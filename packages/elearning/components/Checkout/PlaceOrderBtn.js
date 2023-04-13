import React, {useEffect, useState} from 'react';
import LoadingSpinner from '@/utils/LoadingSpinner';
import axios from 'axios';
import toast from 'react-hot-toast';
import {useRouter} from 'next/router';
import {useDispatch} from 'react-redux';
import {calculateCartTotal} from '@/utils/calculateCartTotal';
import {NavLink} from '@mantine/core';
import Link from 'next/link';
import baseUrl from 'utils/baseUrl.js';

import {v4 as uuidv4} from "uuid";


const PlaceOrderBtn = ({user, cartItems, disabled, inner, btnColor}) => {
    const [loading, setLoading] = useState(false);
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
                    data: {message},
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


    const fetchAccessToken = async () => {

        const formData = new URLSearchParams();
        formData.append('scope', 'oob')
        formData.append('grant_type', 'client_credentials')

        const data = (await axios.post(`${process.env.GETNET_CHECKOUT_ENDPOINT}`,
            formData.toString()
            , {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': process.env.BASIC_AUTH_GETNET
                }
            }
        )).data

        try {

            const {cartTotal} = calculateCartTotal(cartItems)

            const getnetItems = cartItems.map(e => {
                return {
                    "name": e.title,
                    "description": e.slug,
                    "value": e.price,
                    "quantity": 1,
                    "id": e.id,
                    "sku": ""
                }
            })

            // console.log(user)

            const token = uuidv4();

            const script = document.createElement('script');
            script.src = 'https://checkout.getnet.com.br/loader.js';
            script.async = true;
            script.id = "script-getnet"
            script.dataset.getnetSellerid = '39ee6be0-a7fb-43b7-b799-5f45d8d87bdd';
            script.dataset.getnetToken = `${data.token_type} ${data.access_token}`
            script.dataset.getnetAmount = cartTotal;
            script.dataset.getnetCustomerid = user.id;
            script.dataset.getnetOrderid = token;
            // script.dataset.getnetPaymentMethodsDisabled = ["pix", "credito", "qr-code"];
            script.dataset.getnetButtonClass = 'pay-button-getnet';
            script.dataset.getnetInstallments = '6';
            script.dataset.getnetCustomerFirstName = user.first_name;
            script.dataset.getnetCustomerLastName = user.last_name;
            script.dataset.getnetCustomerEmail = user.email;
            script.dataset.getnetItems = JSON.stringify(getnetItems);
            script.dataset.getnetUrlCallback = `${baseUrl}/payment-successful?orderId=${token}`;
            script.dataset.getnetPreAuthorizationCredit = '';

            // script.onload = () => {
            //     const checkoutElements = window.checkoutElements.init('overlayCheckout');
            //     checkoutElements.attach('.pay-button-getnet');
            // }

            document.body.appendChild(script);
        } catch (err) {
            // console.log(err)
        }


    }

    useEffect(() => {
        fetchAccessToken()
            .then(e => {
                // console.log(e)
            })
            .catch(err => {
                // console.log(err)
            })
    }, [])

    useEffect(() => {

        setLoading(true)

        setTimeout(() => {

            setLoading(false)

        }, 6000)

    }, [])


    return (
        <div>
            <button disabled={loading ? true : disabled} className={`default-btn-style-${btnColor} d-block w-100 mt-3 pay-button-getnet`}>
                {inner} <span></span> {loading && <LoadingSpinner />}
            </button>
        </div>
    );
};

export default PlaceOrderBtn;
