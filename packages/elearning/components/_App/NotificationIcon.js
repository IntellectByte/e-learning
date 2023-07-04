import React, { useState, useEffect } from "react";
import { FiBell } from "react-icons/fi";
import NotificationModal from "./NotificationModal";
import axios from "axios";
import baseUrl from "@/utils/baseUrl";
import { parseCookies } from "nookies";
import { useRouter } from "next/router";

const NotificationIcon = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const { elarniv_users_token } = parseCookies();
  const router = useRouter();

  const fetchNotification = () => {
    const url = `${baseUrl}/api/users/notification`;

    const payload = {
      headers: { Authorization: elarniv_users_token },
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
  };

  useEffect(() => {
    fetchNotification();
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const onViewAll = () => {
    router.push("/notification");
  };

  return (
    <>
      <div className="notification-container">
        <button onClick={toggleDropdown} className="notification-button">
          <FiBell
            size={24}
            style={{ color: notifications.length > 0 ? "#CE417D" : "black" }}
          />
        </button>
        {showDropdown && (
          <div className="notification-dropdown">
            <NotificationModal
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
