import React, {useState, useEffect} from "react";
import axios from "axios";
import baseUrl from "@/utils/baseUrl";
import {parseCookies} from "nookies";

const NotificationList = ({user}) => {
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);
    const {elarniv_users_token} = parseCookies()

    const fetchNotification = async () => {
        setLoading(true);

        const payload = {
            headers: {
                authorization: elarniv_users_token
            },
        };
        const response = await axios.get(`${baseUrl}/api/users/notification/find-all-by-user`, payload);
        setNotifications(response.data.payload);
        // console.log(response.data);
        setLoading(false);
    };
    useEffect(() => {
        fetchNotification()
    }, []);

    return (
        <>
            <div className="courses-area courses-section pt-50 pb-100">
                <div className="container">
                    <div className="row">
                        {loading ? (
                            "CARGANDO"
                        ) : (
                            <>
                                {notifications &&
                                    notifications.map((notification) => (
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

                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotificationList;
