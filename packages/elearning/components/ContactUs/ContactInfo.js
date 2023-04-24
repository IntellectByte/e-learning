import React, { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
// internals

const ContactInfo = () => {
    const { t } = useTranslation();
    const [isMounted, setIsMounted] = React.useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <>
            {isMounted && (
                <div className='contact-info'>
                    <span className='sub-title'>
                        {t('contact-us-page-span', {
                            defaultValue: 'Contact Details',
                        })}
                    </span>
                    <h2>
                        {t('contact-us-page-h2', {
                            defaultValue: 'Get in Touch',
                        })}
                    </h2>
                    {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra.
                </p> */}

                    <ul>
                        <li>
                            <div className='icon'>
                                <i className='bx bx-map'></i>
                            </div>
                            <h3>
                                {t('contact-us-page-h3', {
                                    defaultValue: 'Our Address',
                                })}
                            </h3>
                            <p>
                                {t('contact-us-page-diretext', {
                                    defaultValue:
                                        'Rua Barra Funda, 209 - Barra Funda, São Paulo - SP. 01152-000',
                                })}
                            </p>
                        </li>
                        <li>
                            <div className='icon'>
                                <i className='bx bx-phone-call'></i>
                            </div>
                            <h3>
                                {t('contact-us-page-contact', {
                                    defaultValue: 'Contact',
                                })}
                            </h3>
                            <p>
                                Mobile:{' '}
                                <a href='tel:+551138621698'>
                                    {t('contact-us-page-phone', {
                                        defaultValue: '+55 (11) 3862-1698',
                                    })}
                                </a>
                            </p>
                            <p>
                                {t('contact-us-page-mailtext', {
                                    defaultValue: 'Mail:',
                                })}{' '}
                                <a href='mailto:contato@escolasorvete.com.br'>
                                    {t('contact-us-page-emailaddress', {
                                        defaultValue:
                                            'contato@escolasorvete.com.br',
                                    })}
                                </a>
                            </p>
                        </li>
                        {/* <li>
                        <div className='icon'>
                            <i className='bx bx-time-five'></i>
                        </div>
                        <h3>Hours of Operation</h3>
                        <p>Monday - Friday: 09:00 - 20:00</p>
                        <p>Sunday & Saturday: 10:30 - 22:00</p>
                    </li> */}
                    </ul>
                </div>
            )}
        </>
    );
};

export default ContactInfo;
