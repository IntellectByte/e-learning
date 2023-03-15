import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import LoadingSpinner from '@/utils/LoadingSpinner';
import baseUrl from '@/utils/baseUrl';

const INITIAL_STATE = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
};

const ContactForm = () => {
    const [contact, setContact] = useState(INITIAL_STATE);
    const [disabled, setDisabled] = React.useState(true);
    const [loading, setLoading] = React.useState(false);
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');

    React.useEffect(() => {
        const isContact = Object.values(contact).every((el) => Boolean(el));
        isContact ? setDisabled(false) : setDisabled(true);
    }, [contact]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact((prevState) => ({ ...prevState, [name]: value }));

        if (name === 'email') {
            validateEmail(value);
        } else if (name === 'phone') {
            validatePhone(value);
        }
    };

    const validateEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(email)) {
            setEmailError('Please enter a valid email address');
        } else {
            setEmailError('');
        }
    };

    const validatePhone = (phone) => {
        const phonePattern = /^\+?[\d\s()-]{7,}$/; // Adjust the pattern to match the desired phone number format
        if (!phonePattern.test(phone)) {
            setPhoneError('Please enter a valid phone number');
        } else {
            setPhoneError('');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (emailError) return;

        // ... rest of the handleSubmit function
        try {
            setLoading(true);
            const url = `${baseUrl}/api/contact`;
            const payload = { ...contact };
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
            setContact(INITIAL_STATE);
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
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className='contact-form'>
                <h2>Ready to Get Started?</h2>
                <p>
                    Your email address will not be published. Required fields
                    are marked *
                </p>

                <form id='contactForm' onSubmit={handleSubmit}>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6'>
                            <div className='form-group'>
                                <input
                                    type='text'
                                    placeholder='Your Name'
                                    name='name'
                                    value={contact.name}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className='col-lg-6 col-md-6'>
                            <div className='form-group'>
                                <input
                                    type='text'
                                    placeholder='Your email address'
                                    name='email'
                                    value={contact.email}
                                    onChange={handleChange}
                                />
                                {emailError && (
                                    <div className='error'>{emailError}</div>
                                )}
                            </div>
                        </div>

                        <div className='col-lg-12 col-md-6'>
                            <div className='form-group'>
                                <input
                                    type='text'
                                    placeholder='Your phone number'
                                    name='phone'
                                    value={contact.phone}
                                    onChange={handleChange}
                                />
                                {phoneError && (
                                    <div className='error'>{phoneError}</div>
                                )}
                            </div>
                        </div>

                        <div className='col-lg-12 col-md-12'>
                            <div className='form-group'>
                                <input
                                    type='text'
                                    name='subject'
                                    value={contact.subject}
                                    onChange={handleChange}
                                    placeholder='Your Subject'
                                />
                            </div>
                        </div>

                        <div className='col-lg-12 col-md-12'>
                            <div className='form-group'>
                                <textarea
                                    cols='30'
                                    rows='5'
                                    placeholder='Write your message...'
                                    name='message'
                                    value={contact.message}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className='col-lg-12 col-sm-12 text-center'>
                            <button
                                type='submit'
                                className='default-btn'
                                disabled={disabled}
                            >
                                Send Message {loading ? <LoadingSpinner /> : ''}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ContactForm;
