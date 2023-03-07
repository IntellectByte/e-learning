import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import BannerCourses from './BannerCourses';
import { useTranslation } from 'next-i18next';

const MainBanner = ({ user, courses }) => {
    const { t } = useTranslation();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <>
            {isMounted && (
                <div className='main-banner'>
                    <div className='container-fluid'>
                        <div className='row align-items-center'>
                            <div className='col-lg-6 col-md-12'>
                                <div className='main-banner-content'>
                                    <h1>
                                        O jeito mais fácil de fazer sorvete de
                                        verdade
                                    </h1>
                                    <p>
                                        Formação empreendedora prática e técnica
                                        para te ensinar a produzir sorvetes
                                        naturais e artesanais do zero,
                                        valorizando as regionalidades
                                        brasileiras e te ensinando a ter
                                        autonomia no seu negócio
                                    </p>

                                    <motion.div whileTap={{ scale: 0.9 }}>
                                        {user ? (
                                            <Link href='/courses'>
                                                <a className='default-btn'>
                                                    <i className='flaticon-user'></i>{' '}
                                                    Browse Courses <span></span>
                                                </a>
                                            </Link>
                                        ) : (
                                            <Link href='/authentication'>
                                                <a className='default-btn'>
                                                    <i className='flaticon-user'></i>{' '}
                                                    Join For Free <span></span>
                                                </a>
                                            </Link>
                                        )}
                                    </motion.div>
                                </div>
                            </div>

                            <div className='col-lg-6 col-md-12'>
                                <div className='main-banner-courses-list'>
                                    <div className='row'>
                                        {courses &&
                                            courses.map((course) => (
                                                <BannerCourses
                                                    key={course.id}
                                                    {...course}
                                                />
                                            ))}
                                    </div>

                                    <div className='banner-shape1'>
                                        <img
                                            src='/sorvete-logo.png'
                                            alt='image'
                                            className='navbar-logo shape-moving'
                                        />
                                    </div>
                                    <div className='banner-shape2'>
                                        <img
                                            src='/sorvete-logo.png'
                                            alt='image'
                                            className='navbar-logo shape-moving'
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

export default MainBanner;
