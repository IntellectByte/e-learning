import React, { useState, useEffect } from 'react';
import { FiBell } from 'react-icons/fi';
import NotificationModal from './NotificationModal';
import axios from 'axios';
import baseUrl from '@/utils/baseUrl';
import { parseCookies } from 'nookies';

const NotificationIcon = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [notifications, setNotification] = useState([]);

    const fetchNotification = () => {
        // Agarra el JWT de la sesion, que tiene toda tu info actual
        const { elarniv_users_token } = parseCookies();
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
                        />
                    </div>
                )}
            </div>
        </>
    );
};

export default NotificationIcon;
