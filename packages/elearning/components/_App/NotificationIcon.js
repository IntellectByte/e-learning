import React, {useState, useEffect} from "react";
import {FiBell} from "react-icons/fi";
import NotificationModal from "./NotificationModal";
import axios from "axios";
import baseUrl from "@/utils/baseUrl";
import {parseCookies} from "nookies";
import {useRouter} from "next/router";
import io from 'socket.io-client';

const NotificationIcon = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [notifications, setNotifications] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const {elarniv_users_token} = parseCookies();
    const router = useRouter();
    // const socket = io('http://localhost:4000'); // Cambia la URL y el puerto según corresponda
    //
    // socket.on('connect', () => {
    //   console.log('Conectado al servidor Socket.IO');
    // });
    //
    // socket.on('client', (data) => {
    //   console.log('notification', data)
    //   fetchNotification()
    // });


    const fetchNotification = () => {

        setIsLoading(true)

        const url = `${baseUrl}/api/users/notification`;

        const payload = {
            headers: {Authorization: elarniv_users_token},
        };

        axios.get(url, payload).then((res) => {
            const newNotifications = res.data.payload;

            // Verificar si hay nuevas notificaciones
            const hasNewNotifications =
                newNotifications.length > notifications.length;

            setNotifications(newNotifications);

            // Cambiar el color de la campana si hay nuevas notificaciones
            if (hasNewNotifications) {
                // Actualizar el color de la campana aquí
            }
        });

        setIsLoading(false)

    };

    useEffect(() => {
        fetchNotification();
    }, []);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
        fetchNotification()
    };

    const onViewAll = () => {
        router.push("/notification");
    };

    // function emitNotification() {
    //   socket.emit('notification', notifications)
    // }

    return (
        <>
            <div className="notification-container">
                <a className="cart-link ptb-15">
                    <i className="flaticon"></i>{" "}
                    <span>{notifications.filter(e => !e.read).length > 0 && notifications.filter(e => !e.read).length}</span>
                </a>
                <button onClick={() => {
                    toggleDropdown()
                    // emitNotification()
                }} className="notification-button">
                    <FiBell
                        size={24}
                        style={{color: notifications.length > 0 ? "#CE417D" : "black"}}
                    />
                </button>
                {showDropdown && (
                    <div className="notification-dropdown">
                        <NotificationModal
                            isLoading={isLoading}
                            notifications={notifications}
                            onClose={toggleDropdown}
                            userToken={elarniv_users_token}
                            onViewAll={onViewAll}
                        />
                    </div>
                )}
            </div>
        </>
    );
};

export default NotificationIcon;
