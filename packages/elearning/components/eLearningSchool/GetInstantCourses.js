import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';

const GetInstantCourses = ({ user }) => {
    const [email, setEmail] = useState('');

    const { t } = useTranslation();
    const [isMounted, setIsMounted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            setEmail('');

            if (!response.ok) {
                toast.error(data.error, {
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
                toast.success('Email submitted successfully!', {
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
        } catch (error) {
            toast.error('An error occurred. Please try again.', {
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
        setIsMounted(true);
    }, []);

    return (
        <>
            {isMounted && (
                <div className='get-instant-courses-area ptb-100'>
                    <div className='container'>
                        <div className='get-instant-courses-inner-area'>
                            <div className='row align-items-center'>
                                <div className='col-lg-8 col-md-12'>
                                    <div className='get-instant-courses-content'>
                                        <span className='sub-title'>
                                            {t('instant-span', {
                                                defaultValue:
                                                    'Free Registration',
                                            })}
                                        </span>
                                        <h2>
                                            {t('instant-h2', {
                                                defaultValue:
                                                    'Experimental Class',
                                            })}
                                        </h2>
                                        <p>
                                            {t('instant-text', {
                                                defaultValue:
                                                    'Watch a totally free experimental class to understand our methodology. Subscribe to a plan to keep learning more.',
                                            })}
                                        </p>

                                        <form
                                            className='newsletter-form-instant-courses'
                                            onSubmit={handleSubmit}
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                width: '100%',
                                                maxWidth: '500px',
                                                margin: '0 auto',
                                                padding: '20px',

                                                borderRadius: '5px',
                                            }}
                                        >
                                            <input
                                                type='email'
                                                className='input-newsletter'
                                                style={{
                                                    width: '100%',
                                                    padding: '10px',
                                                    marginBottom: '15px',
                                                    fontSize: '16px',
                                                    lineHeight: '24px',
                                                    border: '1px solid #ccc',
                                                    borderRadius: '5px',
                                                    backgroundColor: '#fff',
                                                }}
                                                placeholder='Email'
                                                name='email'
                                                value={email}
                                                onChange={(e) =>
                                                    setEmail(e.target.value)
                                                }
                                                required
                                            />

                                            <motion.button
                                                type='submit'
                                                className='default-btn'
                                                whileTap={{ scale: 0.5 }}
                                            >
                                                <i className='flaticon-user'></i>
                                                {t('subscribe-btn', {
                                                    defaultValue: 'Subscribe',
                                                })}
                                                <span></span>
                                            </motion.button>
                                        </form>
                                    </div>
                                </div>

                                <div className='col-lg-4 col-md-12'>
                                    <div className='get-instant-courses-image'>
                                        <img
                                            src='/images/sorvete-3.webp'
                                            alt='image'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default GetInstantCourses;
