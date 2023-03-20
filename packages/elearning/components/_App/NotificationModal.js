import React from 'react';

const NotificationModal = ({ onClose }) => {
    // Fetch notifications from the backend or use a useState to store them.
    const notifications = [
        { id: 1, text: 'Notification 1' },
        { id: 2, text: 'Notification 2' },
        { id: 3, text: 'Notification 3' },
    ];

    return (
        <div className='notification-modal'>
            <h3>Notifications</h3>
            <ul>
                {notifications.map((notification) => (
                    <li key={notification.id}>{notification.text}</li>
                ))}
            </ul>
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default NotificationModal;
