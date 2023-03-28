import React, { useState, useEffect } from 'react';
import styles from './TopBanner.module.css';

const TopBanner = ({ message }) => {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        if (message) {
            setShowBanner(true);
        }
    }, [message]);

    return (
        <div
            className={`${styles.topBanner} ${
                showBanner ? styles.visible : ''
            }`}
        >
            <p>{message}</p>
        </div>
    );
};

export default TopBanner;
