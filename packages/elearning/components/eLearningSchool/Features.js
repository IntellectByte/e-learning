import React from 'react';
import Link from 'next/link';

const Features = () => {
    return (
        <>
            <div className='features-area pt-100 pb-70'>
                <div className='container'>
                    {/* MACAROONS ANIMADOS */}
                    {/* <div className='banner-shape3'>
                        <img
                            src='/macaroon.png'
                            alt='image'
                            className='navbar-logo shape-moving'
                        />
                    </div> */}

                    <div className='section-title'>
                        <span className='sub-title'>
                            Muito mais que sorvete
                        </span>
                        <h2>Aprendizado dinâmica de onde você estiver</h2>
                        <p>
                            Domine as ferramentas necessárias para se tornar um
                            empreendedor se sucesso
                        </p>
                    </div>

                    <div className='row justify-content-center'>
                        <div className='col-lg-4 col-sm-6 col-md-6'>
                            <div className='single-features-box'>
                                <div className='icon'>
                                    <i className='flaticon-brain-process'></i>
                                </div>
                                <h3>Mudança de mentalidade</h3>
                                <p>
                                    Nem sempre o caminho mais curto é o mais
                                    fácil, vamos te ensinar essa e outras regras
                                    de ouro da sorveteria
                                </p>
                            </div>
                        </div>

                        <div className='col-lg-4 col-sm-6 col-md-6'>
                            <div className='single-features-box'>
                                <div className='icon'>
                                    <i className='flaticon-computer'></i>
                                </div>
                                <h3>Aprenda no seu tempo</h3>
                                <p>
                                    Estude do seu jeito em qualquer dispositivo
                                </p>
                            </div>
                        </div>

                        <div className='col-lg-4 col-sm-6 col-md-6'>
                            <div className='single-features-box'>
                                <div className='icon'>
                                    <i className='flaticon-shield-1'></i>
                                </div>
                                <h3>Aprenda com quem está no mercado</h3>
                                <p>
                                    Sua jornada será guiada por quem está há
                                    mais de 20 anos no mercado de sorveteria e
                                    educação
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Features;
