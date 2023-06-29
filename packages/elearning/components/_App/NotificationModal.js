import React from 'react';

const NotificationModal = ({ onClose, notifications }) => {
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
                    <li key={notification.id} className='notification-item'>
                        <a
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
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NotificationModal;
