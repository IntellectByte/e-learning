import React from 'react';

const NotificationModal = ({
    onClose,
    notifications,
    onClearAll,
    onViewAll,
}) => {
    return (
        <div className='notification-modal'>
            <button
                onClick={onClose}
                style={{
                    position: 'absolute',
                    top: '6px',
                    right: '14px',
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

                    color: '#CD4B85',
                    fontWeight: 'bold',
                }}
            >
                Notifications
            </h3>
            <hr
                className='payment-field-border'
                style={{ width: '80%', margin: '0 auto' }}
            />
            <ul className='notification-list'>
                {notifications.map((notification) => (
                    <li key={notification.id} className='notification-item'>
                        <a
                            href={notification.link}
                            className='notification-message-show'
                            style={{
                                color: '#333333',
                                textDecoration: 'none',
                                fontWeight: 'bold',
                            }}
                        >
                            {notification.message}
                        </a>
                    </li>
                ))}
            </ul>

            <div className='button-container-notis'>
                {/* <button
                    onClick={onClearAll}
                    className='clear-button'
                    style={{ color: '#CD4F88' }}
                >
                    Clear All
                </button> */}
                <button
                    onClick={onViewAll}
                    className='view-all-button'
                    style={{ color: '#CD4F88' }}
                >
                    All Notifications
                </button>
            </div>
        </div>
    );
};

export default NotificationModal;
