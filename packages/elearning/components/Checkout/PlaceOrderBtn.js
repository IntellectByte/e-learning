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

const PlaceOrderBtn = ({user, cartItems}) => {
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
    // const [authorization, setAuthorization] = useState({
    //     type: '',
    //     token: ''
    // })

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

        try{
            const script = document.createElement('script');
            script.src = 'https://checkout.getnet.com.br/loader.js';
            script.async = true;
            script.dataset.getnetSellerid = '39ee6be0-a7fb-43b7-b799-5f45d8d87bdd';
            script.dataset.getnetToken = `${data.token_type} ${data.access_token}`
            script.dataset.getnetAmount = '1.00';
            script.dataset.getnetCustomerid = '12345';
            script.dataset.getnetOrderid = '12345';
            script.dataset.getnetButtonClass = 'pay-button-getnet';
            script.dataset.getnetInstallments = '4';
            script.dataset.getnetCustomerFirstName = 'João';
            script.dataset.getnetCustomerLastName = 'da Silva';
            script.dataset.getnetCustomerDocumentType = 'CPF';
            script.dataset.getnetCustomerDocumentNumber = '22233366638';
            script.dataset.getnetCustomerEmail = 'teste@getnet.com.br';
            script.dataset.getnetCustomerPhoneNumber = '1134562356';
            script.dataset.getnetCustomerAddressStreet = 'Rua Alexandre Dumas';
            script.dataset.getnetCustomerAddressStreetNumber = '1711';
            script.dataset.getnetCustomerAddressComplementary = '';
            script.dataset.getnetCustomerAddressNeighborhood = 'Chacara Santo Antonio';
            script.dataset.getnetCustomerAddressCity = 'São Paulo';
            script.dataset.getnetCustomerAddressState = 'SP';
            script.dataset.getnetCustomerAddressZipcode = '04717004';
            script.dataset.getnetCustomerCountry = 'Brasil';
            script.dataset.getnetShippingAddress = '[{ "first_name": "João", "name": "João Borgas", "email": "joaoborgas@gmail.com", "phone_number": "", "shipping_amount": 10, "address": { "street": "Rua dos Pagamentos", "complement": "", "number": "171", "district": "Centro", "city": "São Paulo", "state": "SP", "country": "Brasil", "postal_code": "12345678"}}]';
            script.dataset.getnetItems = '[{"name": "","description": "", "value": 0, "quantity": 0,"sku": ""}]';
            script.dataset.getnetUrlCallback = `${baseUrl}/success`;
            script.dataset.getnetPreAuthorizationCredit = '';

            script.onload = () => {
                const checkoutElements = window.checkoutElements.init('overlayCheckout');
                checkoutElements.attach('.pay-button-getnet');
            }
            document.body.appendChild(script);
        }catch (err){
            console.log(err)
        }


    }

    useEffect(() => {
        fetchAccessToken()
            .then(e => console.log(e))
            .catch(err => console.log(err))
    }, [])



    return (
        <div>
            <button className={'default-btn-style-3 d-block w-100 mt-3 pay-button-getnet'}>Proceed to checkout</button>
        </div>
    );
};

export default PlaceOrderBtn;
