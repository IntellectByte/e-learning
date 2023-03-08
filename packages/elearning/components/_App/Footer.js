import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <footer className='footer-area'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-6 col-sm-6'>
                            <div className='single-footer-widget'>
                                <Link href='/'>
                                    <a className='logo'>
                                        <img
                                            src='/logo07.png'
                                            alt='logo'
                                            className='newsletter-img'
                                        />
                                    </a>
                                </Link>

                                <p>
                                    Trabalhamos para formar empreendedores com
                                    autonomia, que montam negócios sustentáveis,
                                    que se preocupam com o meio ambiente e em
                                    ressaltaram a diversidade brasileira.
                                </p>

                                <ul className='social-link'>
                                    <li>
                                        <a
                                            href='https://www.facebook.com/'
                                            className='d-block'
                                            target='_blank'
                                            rel='noreferrer'
                                        >
                                            <i className='bx bxl-facebook'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href='https://www.twitter.com/'
                                            className='d-block'
                                            target='_blank'
                                            rel='noreferrer'
                                        >
                                            <i className='bx bxl-twitter'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href='https://www.instagram.com/'
                                            className='d-block'
                                            target='_blank'
                                            rel='noreferrer'
                                        >
                                            <i className='bx bxl-instagram'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href='https://www.linkedin.com/'
                                            className='d-block'
                                            target='_blank'
                                            rel='noreferrer'
                                        >
                                            <i className='bx bxl-linkedin'></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='col-lg-2 col-md-6 col-sm-6 offset-lg-1'>
                            <div className='single-footer-widget'>
                                <h3>Saiba Mais</h3>
                                <ul className='footer-links-list'>
                                    <li>
                                        <Link href='/'>
                                            <a>Home</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/about-us'>
                                            <a>Historia</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/courses'>
                                            <a>Cursos</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/contact-us'>
                                            <a>Contacto</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/faq'>
                                            <a>FAQ</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='col-lg-4 col-md-6 col-sm-6'>
                            <div className='single-footer-widget'>
                                <h3>Endereço</h3>
                                <ul className='footer-contact-info'>
                                    <li>
                                        <i className='bx bx-map'></i>
                                        Rua Barra Funda, 209 - Barra Funda, São
                                        Paulo - SP. 01152-000
                                    </li>
                                    <li>
                                        <i className='bx bx-phone-call'></i>
                                        <a href='+55 (11) 3862-1698'>
                                            +55 (11) 3862-1698
                                        </a>
                                    </li>
                                    <li>
                                        <i className='bx bx-envelope'></i>
                                        <a href='mailto:contato@escolasorvete.com.br'>
                                            contato@escolasorvete.com.br
                                        </a>
                                    </li>
                                    <li>
                                        <i className='bx bxs-inbox'></i>
                                        <a href='tel:+557854578964'>
                                            @escolasorvete
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='footer-bottom-area'>
                        <div className='row align-items-center'>
                            <div className='col-lg-6 col-md-6'>
                                <p>
                                    Copyright{' '}
                                    <i className='bx bx-copyright'></i>{' '}
                                    {currentYear}-2024 Escola Sorvete. All
                                    rights reserved.
                                </p>
                            </div>

                            <div className='col-lg-6 col-md-6'>
                                <ul>
                                    <li>
                                        <Link href='/privacy-policy'>
                                            <a>Política de Privacidade</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/terms-conditions'>
                                            <a>Termos e Condições</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='lines'>
                    <div className='line'></div>
                    <div className='line'></div>
                    <div className='line'></div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
