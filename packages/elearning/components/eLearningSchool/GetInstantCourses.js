import React from 'react';
import Link from 'next/link';

const GetInstantCourses = ({ user }) => {
    return (
        <>
            <div className='get-instant-courses-area ptb-100'>
                <div className='container'>
                    <div className='get-instant-courses-inner-area'>
                        <div className='row align-items-center'>
                            <div className='col-lg-8 col-md-12'>
                                <div className='get-instant-courses-content'>
                                    <span className='sub-title'>
                                        Cadastro Gratuito
                                    </span>
                                    <h2>Aula Experimental</h2>
                                    <p>
                                        Assista uma aula experimental totalmente
                                        gratuita para entender sobre a nossa
                                        metodologia. Assine um plano para
                                        continuar aprendendo mais
                                    </p>

                                    {user ? (
                                        <Link href='/learning/sub-form/'>
                                            <a className='default-btn'>
                                                <i className='flaticon-user'></i>{' '}
                                                Subscribe To Our Monthly Plan{' '}
                                                <span></span>
                                            </a>
                                        </Link>
                                    ) : (
                                        <Link href='/authentication'>
                                            <a className='default-btn'>
                                                <i className='flaticon-user'></i>{' '}
                                                Register to see our monthly
                                                plans <span></span>
                                            </a>
                                        </Link>
                                    )}
                                </div>
                            </div>

                            <div className='col-lg-4 col-md-12'>
                                <div className='get-instant-courses-image'>
                                    <img
                                        src='/images/sorvete-3.jpg'
                                        alt='image'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GetInstantCourses;
