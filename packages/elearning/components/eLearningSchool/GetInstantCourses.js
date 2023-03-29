import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

const GetInstantCourses = ({ user }) => {
    const { t } = useTranslation();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <>
            {isMounted && (
                <div className='get-instant-courses-area ptb-100'>
                    <div className='container'>
                        <div className='get-instant-courses-inner-area'>
                            <div className='row align-items-center'>
                                <div className='col-lg-8 col-md-12'>
                                    <div className='get-instant-courses-content'>
                                        <span className='sub-title'>
                                            {t('instant-span', {
                                                defaultValue:
                                                    'Free Registration',
                                            })}
                                        </span>
                                        <h2>
                                            {t('instant-h2', {
                                                defaultValue:
                                                    'Experimental Class',
                                            })}
                                        </h2>
                                        <p>
                                            {t('instant-text', {
                                                defaultValue:
                                                    'Watch a totally free experimental class to understand our methodology. Subscribe to a plan to keep learning more.',
                                            })}
                                        </p>

                                        <Link href='/learning/sub-form/'>
                                            <a className='default-btn'>
                                                <i className='flaticon-user'></i>{' '}
                                                {t('instant-btn1', {
                                                    defaultValue:
                                                        'Subscribe To Our Monthly Plan',
                                                })}
                                                <span></span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>

                                <div className='col-lg-4 col-md-12'>
                                    <div className='get-instant-courses-image'>
                                        <img
                                            src='/images/sorvete-3.webp'
                                            alt='image'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default GetInstantCourses;
