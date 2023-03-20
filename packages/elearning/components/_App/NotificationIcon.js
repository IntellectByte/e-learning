import React, { useState } from 'react';
import { FiBell } from 'react-icons/fi';
import NotificationModal from './NotificationModal';
import Link from '@/utils/ActiveLink';

const NotificationIcon = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <>
            <div className='option-item'>
                <div className='notification-icon'>
                    <div className='dropdown'>
                        <button
                            onClick={toggleModal}
                            className='notification-link ptb-15'
                        >
                            <FiBell size={24} />
                            <span>3</span>
                        </button>
                        {showModal && (
                            <NotificationModal onClose={toggleModal} />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotificationIcon;
