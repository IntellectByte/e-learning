import React from 'react';
import Link from 'next/link';

const ViewAllCourses = () => {
    return (
        <>
            <div className='view-all-courses-area ptb-100 bg-F6F1ED'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-lg-6 col-md-12'>
                            <div className='view-all-courses-content'>
                                <span className='sub-title'>Na Mídia</span>
                                <h2>
                                    Acompanhe nossa participação na TV e em
                                    outros canais
                                </h2>
                                <p>
                                    Estamos em canais de comunicação
                                    compartilhando conteúdo e analisando
                                    cenários que impactam o mercado de sorvete.
                                    Acompanhe nossos canais oficiais e matérias
                                    na TV
                                </p>

                                <Link href='https://www.instagram.com/escolasorvete/'>
                                    <a className='default-btn' target='_blank'>
                                        <i className='flaticon-agenda'></i>{' '}
                                        Acessar Canais <span></span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className='col-lg-6 col-md-12'>
                            <div className='view-all-courses-image'>
                                <img
                                    src='/images/francisco-forbes.png'
                                    alt='image'
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
        </>
    );
};

export default ViewAllCourses;
