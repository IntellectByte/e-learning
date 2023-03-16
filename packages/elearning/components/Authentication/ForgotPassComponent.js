// import React from 'react';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import Router from 'next/router';
// import LoadingSpinner from '@/utils/LoadingSpinner';
// import baseUrl from '@/utils/baseUrl';
// import { motion, AnimatePresence } from 'framer-motion';

// const INITIAL_USER = {
//     email: '',
// };

// const ForgotPassComponent = () => {
//     const [user, setUser] = React.useState(INITIAL_USER);
//     const [disabled, setDisabled] = React.useState(true);
//     const [loading, setLoading] = React.useState(false);

//     React.useEffect(() => {
//         const isUser = Object.values(user).every((el) => Boolean(el));
//         isUser ? setDisabled(false) : setDisabled(true);
//     }, [user]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setUser((prevState) => ({ ...prevState, [name]: value }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             setLoading(true);
//             // Aca tendria que ir la url para el forgot password porque el mail que llega es el de confirmation
//             const url = `${baseUrl}/api/users/send-confirmation-email`;
//             const payload = { ...user };
//             const response = await axios.post(url, payload);
//             toast.success(response.data.message, {
//                 style: {
//                     border: '1px solid #4BB543',
//                     padding: '16px',
//                     color: '#4BB543',
//                 },
//                 iconTheme: {
//                     primary: '#4BB543',
//                     secondary: '#FFFAEE',
//                 },
//             });
//             Router.push('/authentication');
//         } catch (err) {
//             let {
//                 response: {
//                     data: { message },
//                 },
//             } = err;
//             toast.error(message, {
//                 style: {
//                     border: '1px solid #ff0033',
//                     padding: '16px',
//                     color: '#ff0033',
//                 },
//                 iconTheme: {
//                     primary: '#ff0033',
//                     secondary: '#FFFAEE',
//                 },
//             });
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <>
//             <div className='ptb-100'>
//                 <div className='container'>
//                     <div className='row justify-content-center'>
//                         <div className='col-lg-6'>
//                             <div className='login-form'>
//                                 <p>
//                                     Please the Token that you received in your
//                                     email address.
//                                 </p>

//                                 <form onSubmit={handleSubmit}>
//                                     <div className='form-group'>
//                                         <label>Email</label>
//                                         <div className='input-group'>
//                                             <input
//                                                 type='email'
//                                                 className='form-control'
//                                                 placeholder='Email'
//                                                 name='email'
//                                                 value={user.email}
//                                                 onChange={handleChange}
//                                                 required
//                                             />
//                                             <button
//                                                 type='button'
//                                                 className='btn btn-secondary'
//                                                 style={{
//                                                     width: '20%',
//                                                     marginLeft: '5px',
//                                                 }}
//                                                 onClick={handleSubmit}
//                                             >
//                                                 Send Token
//                                             </button>
//                                         </div>
//                                     </div>

//                                     <div className='form-group'>
//                                         <label>Token</label>
//                                         <input
//                                             type='text'
//                                             className='form-control'
//                                             placeholder='Token'
//                                             name='email'
//                                             value={user.email}
//                                             onChange={handleChange}
//                                         />
//                                     </div>

//                                     <motion.button
//                                         type='submit'
//                                         disabled={disabled}
//                                         whileTap={{ scale: 0.9 }}
//                                         style={{ cursor: 'pointer' }}
//                                     >
//                                         Forgot Password
//                                         {loading ? <LoadingSpinner /> : ''}
//                                     </motion.button>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default ForgotPassComponent;

import React from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import Router from 'next/router';
import LoadingSpinner from '@/utils/LoadingSpinner';
import baseUrl from '@/utils/baseUrl';
import { motion, AnimatePresence } from 'framer-motion';

const INITIAL_USER = {
    email: '',
    token: '',
};

const ForgotPassComponent = () => {
    const [user, setUser] = React.useState(INITIAL_USER);
    const [disabled, setDisabled] = React.useState(true);
    const [loading, setLoading] = React.useState(false);
    const [tokenLoading, setTokenLoading] = React.useState(false);
    const [tokenSent, setTokenSent] = React.useState(false);

    React.useEffect(() => {
        const isUser = Object.values(user).every((el) => Boolean(el));
        isUser ? setDisabled(false) : setDisabled(true);
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSendToken = async (e) => {
        e.preventDefault();
        setTokenLoading(true);
        // BACKEND
        // BACKEND
        setTokenSent(true);
        setTokenLoading(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const url = `${baseUrl}/api/users/send-confirmation-email`;
            const payload = { ...user };
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
            Router.push('/authentication');
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
            <div className='ptb-100'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-6'>
                            <div className='login-form'>
                                <p>
                                    Please enter your email and the token that
                                    you received in your email address.
                                </p>

                                <form onSubmit={handleSubmit}>
                                    <div className='form-group input-group align-items-center'>
                                        <input
                                            type='email'
                                            className='form-control flex-grow-1'
                                            placeholder='Email'
                                            name='email'
                                            value={user.email}
                                            onChange={handleChange}
                                            required
                                        />
                                        <div className='input-group-append'>
                                            <button
                                                type='button'
                                                className='btn btn-secondary'
                                                onClick={handleSendToken}
                                                disabled={tokenLoading}
                                                style={{
                                                    position: 'relative',
                                                    bottom: '11px',
                                                    marginLeft: '10px',
                                                }}
                                            >
                                                {tokenLoading ? (
                                                    <LoadingSpinner />
                                                ) : tokenSent ? (
                                                    'Sent'
                                                ) : (
                                                    'Send Token'
                                                )}
                                            </button>
                                        </div>
                                    </div>

                                    <div className='form-group'>
                                        <label>Token</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            placeholder='Token'
                                            name='token'
                                            value={user.token}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <motion.button
                                        type='submit'
                                        disabled={disabled}
                                        whileTap={{ scale: 0.9 }}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Reset Password
                                        {loading ? <LoadingSpinner /> : ''}
                                    </motion.button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ForgotPassComponent;
