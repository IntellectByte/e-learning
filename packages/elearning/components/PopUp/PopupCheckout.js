import React, { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import styles from './PopupCheckout.module.css'; // Import the CSS file

const PopupCheckout = ({ onClose }) => {
    const { t } = useTranslation();
    const [isMounted, setIsMounted] = React.useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleSubmit = () => {
        onClose();
    };

    return (
        <>
            {isMounted && (
                <>
                    <div className={styles.overlay} onClick={onClose}></div>
                    <div className={styles.popup}>
                        <div className={styles.popupContent}>
                            <p className={styles.textoGrande}>
                                Antes de proceder con la compra, es importante
                                que tengas en cuenta que el correo electrónico
                                que utilices durante el proceso será el que se
                                asigne al curso adquirido. Así mismo, es
                                fundamental que revises tu correo electrónico
                                una vez finalizada la compra, ya que allí
                                recibirás toda la información necesaria para
                                acceder al curso. No olvides revisar tu bandeja
                                de spam o correo no deseado en caso de que no
                                recibas el correo en tu bandeja de entrada.
                            </p>
                        </div>
                        <div className={styles.popupButtons}>
                            <button
                                className={styles.button}
                                onClick={handleSubmit}
                            >
                                Continuar Compra
                            </button>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default PopupCheckout;
