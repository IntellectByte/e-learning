import React, { useState } from 'react';
import baseUrl from '@/utils/baseUrl';
import axios from 'axios';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

const SubscribeForm = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = { email: email };
            const url = `${baseUrl}/api/subscriptions/new`;
            const response = await axios.post(url, payload);
            setEmail('');
            if (response.data.code == 'exist') {
                toast.error(response.data.message, {
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
            } else {
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
            }
        } catch (err) {
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

    return (
        <>
            <div className='subscribe-area bg-f9f9f9 ptb-100'>
                <div className='container'>
                    <div className='subscribe-content'>
                        <span className='sub-title'>
                            Se você gosta de novidade…
                        </span>
                        <h2>Se inscreva em nossa Newsletter</h2>
                        <p>
                            Aqui compartilhamos novidades, dicas, promoções e
                            notícias do mundo do sorvete em primeira mão.
                            Inscreva-se.
                        </p>

                        <form
                            className='newsletter-form'
                            onSubmit={handleSubmit}
                        >
                            <input
                                type='email'
                                className='input-newsletter'
                                placeholder='Seu Email'
                                name='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />

                            <motion.button
                                type='submit'
                                className='default-btn'
                                whileTap={{ scale: 0.5 }}
                            >
                                <i className='flaticon-user'></i> Me Inscrever{' '}
                                <span></span>
                            </motion.button>
                        </form>
                    </div>
                </div>

                {/* <div
                    className='shape13 newsletter-img'
                    data-speed='0.06'
                    data-revert='true'
                >
                    <img src='/sorvete-logo.png' alt='image' />
                </div> */}
            </div>
        </>
    );
};

export default SubscribeForm;
