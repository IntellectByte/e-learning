import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faYoutube,
    faInstagram,
    faTiktok,
    faPinterest,
    faLinkedin,
    faFacebook,
} from '@fortawesome/free-brands-svg-icons';

const ViewAllCourses = () => {
    const { t } = useTranslation();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <>
            {isMounted && (
                <div className='view-all-courses-area ptb-100 bg-F6F1ED'>
                    <div className='container'>
                        <div className='row align-items-center'>
                            <div className='col-lg-6 col-md-12'>
                                <div className='view-all-courses-content'>
                                    <span className='sub-title'>
                                        {t('viewall-span', {
                                            defaultValue: 'In the Media',
                                        })}
                                    </span>
                                    <h2>
                                        {t('viewall-h2', {
                                            defaultValue:
                                                'Follow our participation on TV and other channels',
                                        })}
                                    </h2>
                                    <p>
                                        {t('viewall-text', {
                                            defaultValue:
                                                'We are on communication channels sharing content and analyzing scenarios that impact the ice cream market. Follow our official channels and TV news',
                                        })}
                                    </p>

                                    <hr
                                        className='payment-field-border'
                                        style={{
                                            marginTop: '50px',
                                            marginBottom: '50px',
                                        }}
                                    />

                                    {/* FALTAN LOS LINKS A LAS DIFERENTES REDES SOCIALES */}
                                    <div className='social-icons'>
                                        <a
                                            href='https://www.youtube.com/channel/your_channel_id'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            style={{
                                                marginRight: '32px',
                                                color: '#ce417d',
                                            }}
                                        >
                                            <FontAwesomeIcon
                                                icon={faYoutube}
                                                style={{ fontSize: '29px' }}
                                            />
                                        </a>
                                        <a
                                            href='https://www.instagram.com/your_instagram_username'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            style={{
                                                marginRight: '32px',
                                                color: '#ce417d',
                                            }}
                                        >
                                            <FontAwesomeIcon
                                                icon={faInstagram}
                                                style={{ fontSize: '29px' }}
                                            />
                                        </a>
                                        <a
                                            href='https://www.tiktok.com/@your_tiktok_username'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            style={{
                                                marginRight: '32px',
                                                color: '#ce417d',
                                            }}
                                        >
                                            <FontAwesomeIcon
                                                icon={faTiktok}
                                                style={{ fontSize: '29px' }}
                                            />
                                        </a>
                                        <a
                                            href='https://www.pinterest.com/your_pinterest_username'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            style={{
                                                marginRight: '32px',
                                                color: '#ce417d',
                                            }}
                                        >
                                            <FontAwesomeIcon
                                                icon={faPinterest}
                                                style={{ fontSize: '29px' }}
                                            />
                                        </a>
                                        <a
                                            href='https://www.linkedin.com/in/your_linkedin_username'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            style={{
                                                marginRight: '32px',
                                                color: '#ce417d',
                                            }}
                                        >
                                            <FontAwesomeIcon
                                                icon={faLinkedin}
                                                style={{ fontSize: '29px' }}
                                            />
                                        </a>
                                        <a
                                            href='https://www.facebook.com/your_facebook_username'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            style={{
                                                marginRight: '32px',
                                                color: '#ce417d',
                                            }}
                                        >
                                            <FontAwesomeIcon
                                                icon={faFacebook}
                                                style={{ fontSize: '29px' }}
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-6 col-md-12'>
                                <div className='view-all-courses-image'>
                                    <img
                                        src='/images/unnamed.webp'
                                        alt='image'
                                        style={{ borderRadius: '10px' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='shape1'>
                        <img src='/images/shape1.png' alt='image' />
                    </div>
                    <div className='shape9'>
                        <img src='/images/shape8.svg' alt='image' />
                    </div>
                </div>
            )}
        </>
    );
};

export default ViewAllCourses;
