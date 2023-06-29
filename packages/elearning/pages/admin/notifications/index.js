import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/_App/Navbar';
import Footer from '@/components/_App/Footer';
import AdminSideNav from '@/components/_App/AdminSideNav';
import toast from 'react-hot-toast';
import axios from 'axios';
import baseUrl from '@/utils/baseUrl';
import CouponRow from '@/components/Admin/CouponRow';
import { parseCookies } from 'nookies';
import GeneralLoader from '@/utils/GeneralLoader';
import { confirmAlert } from 'react-confirm-alert';
import TopBanner from '@/components/TopBanner/TopBanner';

const index = ({ user }) => {
    const { elarniv_users_token } = parseCookies();
    const [loading, setLoading] = useState(true);
    const [notifications, setNotification] = useState([]);

    const fetchNotification = () => {
        // Agarra el JWT de la sesion, que tiene toda tu info actual
        const { elarniv_users_token } = parseCookies();
        const url = `${baseUrl}/api/users/notification`;

        const payload = {
            headers: { Authorization: elarniv_users_token },
        };

        axios.get(url, payload).then((res) => {
            console.log(res.data.payload)
            setNotification(res.data.payload);
            setLoading(false);
        });
    };

    useEffect(() => {
        fetchNotification();
    }, []);

    const confirmDelete = (couponId) => {
        confirmAlert({
            title: 'Confirm to delete',
            message: 'Are you sure to delete this?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => handleDelete(couponId),
                },
                {
                    label: 'No',
                },
            ],
        });
    };

    const handleDelete = async (couponId) => {
        try {
            const payload = {
                headers: { Authorization: elarniv_users_token },
                params: { couponId },
            };
            const response = await axios.delete(
                `${baseUrl}/api/coupons`,
                payload
            );
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
            fetchNotification();
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
            fetchNotification();
        }
    };

    const setFull = async (couponId) => {
        const payload = {
            headers: { Authorization: elarniv_users_token },
        };

        const payloadData = { couponId: couponId };

        const response = await axios.put(
            `${baseUrl}/api/coupons/new`,
            payloadData,
            payload
        );
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
        fetchNotification();
    };

    return (
        <>
            <TopBanner />

            <Navbar user={user} />

            <div className='main-content'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-3 col-md-4'>
                            <AdminSideNav user={user} />
                        </div>

                        <div className='col-lg-9 col-md-8'>
                            <div className='main-content-box'>
                                {/* Nav */}
                                <ul className='nav-style1'>
                                    <li>
                                        <Link href='/admin/notifications/'>
                                            <a className='active'>Notificaciones</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/admin/notifications/create/'>
                                            <a>Create</a>
                                        </Link>
                                    </li>
                                </ul>

                                {loading ? (
                                    <GeneralLoader />
                                ) : (
                                    <div className='table-responsive'>
                                        <table className='table table-hover align-middle fs-14'>
                                            <tbody>
                                                {notifications.length > 0 ? (
                                                    notifications.map((notification) => (
                                                        <li key={notification.id}><a href={notification.link}>{notification.message}</a></li>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td
                                                            colSpan='3'
                                                            className='text-center py-3'
                                                        >
                                                            Empty!
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default index;
