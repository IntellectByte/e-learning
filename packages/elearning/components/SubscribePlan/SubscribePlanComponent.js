import React from 'react';
import Link from 'next/link';
import { BiBadgeCheck } from 'react-icons/bi';

const SubscribePlanComponent = () => {
    return (
        <>
            <div className='about-area francisco-area ptb-100'>
                {/* <div className='card-container'>
                    <div className='card'>
                        <div className='img__card'>
                            <img src='' alt='left' className='left' />
                        </div>
                        <h4 className='card__title'>Monthly</h4>
                        <h4 className='card__title'>
                            <strong>R$ 55</strong>/Month
                        </h4>
                        <div className='desc'>
                            <p>
                                Acesso a mais de 160 cursos e Escolas
                                <br />
                                especializadas
                            </p>
                        </div>
                        <ul>
                            <li>
                                <BiBadgeCheck /> Receba certificados digitais ao
                                ser <br />
                                aprovado nos nossos cursos.
                            </li>
                            <li>
                                <BiBadgeCheck /> Baixe os cursos em seu
                                smartphone <br />e estude sem conexão de
                                internet.
                            </li>
                        </ul>
                        <p>
                            <a href='#' className='btn__choose'>
                                Subscribe
                            </a>
                        </p>
                    </div>
                    <div className='card card__middle'>
                        <div className='img__card'>
                            <img src='' alt='left' className='left' />
                        </div>
                        <h4 className='card__title'>Anually</h4>
                        <h4 className='card__title'>
                            <strong>R$ 40</strong>/Month - R$ 480 Anually
                        </h4>
                        <div className='desc'>
                            <p>
                                Acesso a mais de 160 cursos e Escolas
                                <br />
                                especializadas
                            </p>
                        </div>
                        <ul>
                            <li>
                                <BiBadgeCheck /> Receba certificados digitais ao
                                ser <br />
                                aprovado nos nossos cursos.
                            </li>
                            <li>
                                <BiBadgeCheck /> Baixe os cursos em seu
                                smartphone <br />e estude sem conexão de
                                internet.
                            </li>
                        </ul>
                        <p>
                            <a href='#' className='btn__choose'>
                                Subscribe
                            </a>
                        </p>
                    </div>
                </div> */}
                <div class='wrapper'>
                    <h2>
                        Subscribe to our monthly plan. <br />
                    </h2>
                    <br />
                    <div class='pricing-table'>
                        <div class='pricing-box'>
                            <h2>Monthly Membership</h2>
                            <span class='price'>R$ 50/month</span>
                            <p class='description'>
                                Best For Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry...
                            </p>
                            <span class='pricing-table-divider'></span>
                            <a class='btn' href='#'>
                                <b>Subscribe</b>
                            </a>
                            <span class='pricing-table-divider'></span>
                            <ul>
                                <li>
                                    <BiBadgeCheck className='badge-color' />{' '}
                                    Lorem Ipsum is simply dummy text
                                </li>
                                <li>
                                    <BiBadgeCheck className='badge-color' />{' '}
                                    Lorem Ipsum is simply dummy text
                                </li>
                                <li>
                                    <BiBadgeCheck className='badge-color' />{' '}
                                    Lorem Ipsum is simply dummy text
                                </li>
                                <li>
                                    <BiBadgeCheck className='badge-color' />{' '}
                                    Lorem Ipsum is simply dummy text
                                </li>
                            </ul>
                        </div>
                        <div class='pricing-box pricing-table-best'>
                            <h2>Yearly Membership</h2>
                            <span class='price'>R$ 40/month (R$ 480/year)</span>
                            <p class='description'>
                                Best For Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry...
                            </p>
                            <span class='pricing-table-divider'></span>
                            <a class='btn' href='#'>
                                <b>Subscribe</b>
                            </a>
                            <span class='pricing-table-divider'></span>
                            <ul>
                                <li>
                                    <BiBadgeCheck className='badge-color' />{' '}
                                    Lorem Ipsum is simply dummy text
                                </li>
                                <li>
                                    <BiBadgeCheck className='badge-color' />{' '}
                                    Lorem Ipsum is simply dummy text
                                </li>
                                <li>
                                    <BiBadgeCheck className='badge-color' />{' '}
                                    Lorem Ipsum is simply dummy text
                                </li>
                                <li>
                                    <BiBadgeCheck className='badge-color' />{' '}
                                    Lorem Ipsum is simply dummy text
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SubscribePlanComponent;
