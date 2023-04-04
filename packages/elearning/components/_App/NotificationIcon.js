import React, {useState, useContext, useEffect} from 'react';
import { FiBell } from 'react-icons/fi';
import NotificationModal from './NotificationModal';
import { NotificationContext } from "@/utils/NotificationContext";
import baseUrl from "@/utils/baseUrl";
import io from "socket.io-client";

const NotificationIcon = () => {
    const [showModal, setShowModal] = useState(false);
    const { notifications } = useContext(NotificationContext);

    const toggleModal = () => {
        setShowModal(!showModal);
    };


    useEffect(() => {
        const socket = io(baseUrl);

        socket.on('connect', () => {
            console.log('Connected to Socket.IO server');
        });

        socket.on('notification', (data) => {
            console.log('Received notification:', data);
        });

        return () => {
            socket.disconnect();
            console.log('Disconnected from Socket.IO server');
        };
    }, []);


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
                            <span>{notifications.length}</span>
                        </button>
                        {showModal && (
                            <NotificationModal
                                notifications={notifications}
                                onClose={toggleModal}
                            />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotificationIcon;