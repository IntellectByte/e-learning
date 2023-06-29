import React from 'react';
import baseUrl from "@/utils/baseUrl";
import axios from "axios";

const NotificationModal = ({onClose, notifications, userToken}) => {

    async function onClickNotification(notificationId){
        // console.log(notification)
        console.log(userToken)

        const url = `${baseUrl}/api/users/notification?notificationId=${notificationId}`
        const payload = {
            headers: {Authorization: userToken}
        }
        try {

            await axios.put(url, {}, payload)

        }catch (err){
            console.log(err)
        }
    }

    return (
        <div className='notification-modal'>
            <button
                onClick={onClose}
                style={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    background: 'none',
                    border: 'none',
                    padding: '0',
                    cursor: 'pointer',
                    color: '#888888',
                    fontSize: '20px',
                }}
            >
                X
            </button>
            <h3
                style={{
                    textAlign: 'center',
                    textDecoration: 'underline',
                    color: '#CD4B85',
                    fontWeight: 'bold',
                }}
            >
                Notifications
            </h3>
            <ul className='notification-list'>
                {notifications.map((notification) => (
                    !notification.read ? <li key={notification.id} className='notification-item'>
                            <a
                                onClick={() => onClickNotification(notification.id)}
                                href={notification.link}
                                style={{
                                    color: '#333333',
                                    textDecoration: 'none',
                                    fontWeight: 'bold',
                                    marginLeft: '10px',
                                }}
                            >
                                {notification.message}
                            </a>
                            <div>no leida</div>
                        </li>
                        :
                        <li key={notification.id} className='notification-item'>
                            <a
                                onClick={() => onClickNotification(notification.id)}
                                href={notification.link}
                                style={{
                                    color: '#333333',
                                    textDecoration: 'none',
                                    fontWeight: 'bold',
                                    marginLeft: '10px',
                                }}
                            >
                                {notification.message}
                            </a>
                            <div>leida</div>
                        </li>
                ))}
            </ul>
        </div>
    );
};

export default NotificationModal;
