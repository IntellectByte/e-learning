import React, { useState, useEffect } from 'react';
import { FiBell } from 'react-icons/fi';
import NotificationModal from './NotificationModal';
import axios from 'axios';
import baseUrl from '@/utils/baseUrl';
import { parseCookies } from 'nookies';

const NotificationIcon = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [notifications, setNotification] = useState([]);
    const { elarniv_users_token } = parseCookies();


    const fetchNotification = () => {
        // Agarra el JWT de la sesion, que tiene toda tu info actual
        const url = `${baseUrl}/api/users/notification`;

        const payload = {
            headers: { Authorization: elarniv_users_token },
        };

        axios.get(url, payload).then((res) => {
            setNotification(res.data.payload);
        });
    };

    useEffect(() => {
        fetchNotification();
    }, []);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    // TODAVIA NO SE IMPLEMENTO ESTA FUNCIONALIDAD
    // const clearAllNotifications = () => {
    //     const { elarniv_users_token } = parseCookies();
    //     const url = `${baseUrl}/api/users/notification/clear`;

    //     const payload = {
    //         headers: { Authorization: elarniv_users_token },
    //     };

    //     axios.post(url, null, payload).then((res) => {
    //         if (res.status === 200) {
    //             setNotifications([]);
    //         }
    //     });
    // };

    const onViewAll = () => {
        // console.log('View All clicked!');
    };

    return (
        <>
            <div className='notification-container'>
                <button
                    onClick={toggleDropdown}
                    className='notification-button'
                >
                    <FiBell size={24} />
                </button>
                {showDropdown && (
                    <div className='notification-dropdown'>
                        <NotificationModal
                            notifications={notifications}
                            onClose={toggleDropdown}
                            userToken={elarniv_users_token}
                        />
                    </div>
                )}
            </div>
        </>
    );
};

export default NotificationIcon;
