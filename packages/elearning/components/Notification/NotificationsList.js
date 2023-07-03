import React, { useState, useEffect } from 'react';
import axios from 'axios';
import baseUrl from '@/utils/baseUrl';
import { parseCookies } from 'nookies';

const NotificationList = ({ user }) => {
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);
    const { elarniv_users_token } = parseCookies();

    const fetchNotification = async () => {
        setLoading(true);

        const payload = {
            headers: {
                authorization: elarniv_users_token,
            },
        };
        const response = await axios.get(
            `${baseUrl}/api/users/notification/find-all-by-user`,
            payload
        );
        setNotifications(response.data.payload);
        setLoading(false);
    };

    useEffect(() => {
        fetchNotification();
    }, []);

    return (
        <>
            <div className='notification-container'>
                <h2 className='notification-title'>Notifications</h2>
                <div className='notification-list'>
                    {loading ? (
                        <div className='loading'>Loading...</div>
                    ) : (
                        <>
                            {notifications &&
                                notifications.map((notification) => (
                                    <a
                                        key={notification.id}
                                        href={notification.link}
                                        className='notification-item'
                                    >
                                        <div className='notification-content'>
                                            <div className='notification-icon'>
                                                <img
                                                    src={notification.icon}
                                                    alt='Notification Icon'
                                                    className='icon'
                                                />
                                            </div>
                                            <div className='notification-details'>
                                                <div className='notification-message'>
                                                    {notification.message}
                                                </div>
                                                <div className='notification-time'>
                                                    {notification.time}
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                        </>
                    )}
                </div>
            </div>

            <style jsx>{`
                .notification-container {
                    width: 80%;
                    margin: 20px auto;
                }

                .notification-title {
                    font-size: 32px;
                    font-weight: bold;
                    margin-bottom: 30px;
                    margin-top: 60px;
                    text-align: center;
                    color: #ce4580;
                    text-decoration: underline;
                }

                .notification-list {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    margin-top: 20px;
                }

                .loading {
                    text-align: center;
                    font-weight: bold;
                }

                .notification-item {
                    display: block;
                    padding: 20px;
                    background-color: #ffffff;
                    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
                    border-radius: 5px;
                    text-decoration: none;
                    transition: box-shadow 0.3s ease;
                }

                .notification-item:hover {
                    box-shadow: 0 3px 6px #ee8ab8;
                }

                .notification-content {
                    display: flex;
                    align-items: center;
                }

                .notification-icon {
                    flex: 0 0 40px;
                }

                .icon {
                    width: 30px;
                    height: 30px;
                    object-fit: contain;
                }

                .notification-details {
                    flex-grow: 1;
                    margin-left: 10px;
                }

                .notification-message {
                    font-weight: bold;
                    color: #333333;
                    margin-bottom: 5px;
                    margin-left: 45px;
                }

                .notification-time {
                    color: #888888;
                    font-size: 12px;
                }
            `}</style>
        </>
    );
};

export default NotificationList;
