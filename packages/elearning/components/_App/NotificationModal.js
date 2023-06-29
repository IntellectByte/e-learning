import React from 'react';

const NotificationModal = ({ onClose, notifications }) => {
    return (
        <div className='notification-modal'>
            <h3>Notifications</h3>
            <ul>
                {notifications.map((notification) => (
                    <li key={notification.id}>
                        <a href={notification.link}>{notification.message}</a>
                    </li>
                ))}
            </ul>
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default NotificationModal;
