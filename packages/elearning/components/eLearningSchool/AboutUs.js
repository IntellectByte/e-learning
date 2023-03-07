import React from 'react';
import Link from 'next/link';
import CarouselImages from '../CarouselImages/CarouselImages';

const AboutUs = () => {
    return (
        <>
            <div className='about-area bg-fef8ef ptb-100'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-lg-6 col-md-12'>
                            <div className='about-image'>
                                {/* <img
                                    src='/images/maestro-sorvete.png'
                                    alt='About'
                                    className='maestro-sorvete'
                                /> */}
                                <CarouselImages />
                            </div>
                        </div>

                        <div className='col-lg-6 col-md-12'>
                            <div className='about-content'>
                                <span className='sub-title'>
                                    Aprendizado online
                                </span>
                                <h2>
                                    Aprender de onde estiver sobre todos os
                                    tipos de sorvete e se quiser mais, você
                                    ganha uma aula prática presencial!
                                    {/* HACER CALL TO ACTION, SPAN, A, DARLE ESTILO & MANDARLOS A SUB PAGE */}
                                    Confira nossos planos
                                </h2>
                                <p>
                                    Acreditamos que a aprendizagem online pode
                                    democratizar o conhecimento e colaborar para
                                    a transformação que o mercado de sorvetes
                                    tanto precisa. Vem com a gente fazer parte
                                    dessa revolução?
                                </p>

                                <ul className='features-list'>
                                    <li>
                                        <span>
                                            <i className='flaticon-experience'></i>{' '}
                                            Professores especializados
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='flaticon-time-left'></i>{' '}
                                            Certificado de Conclusão
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='flaticon-tutorials'></i>{' '}
                                            Aprendizado Remoto
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='flaticon-self-growth'></i>{' '}
                                            Self Development
                                        </span>
                                    </li>
                                </ul>

                                <Link href='/courses'>
                                    <a className='default-btn'>
                                        <i className='flaticon-user'></i>{' '}
                                        Visualizar todos os cursos <span></span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='shape4'>
                    <img
                        src='/sorvete-logo.png'
                        alt='image'
                        className='navbar-logo'
                    />
                </div>
            </div>
        </>
    );
};

export default AboutUs;
