import React from 'react';
import Link from 'next/link';

const SubscribePlanComponent = () => {
    return (
        <>
            <div className='about-area francisco-area ptb-100'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-lg-6 col-md-12'>
                            <div className='about-image'>
                                <div className='image'>
                                    <img
                                        src='/escola-sorvete-horizontal.png'
                                        alt='image'
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-6 col-md-12'>
                            <div className='about-content'>
                                <span className='sub-title'>Subscription</span>
                                <h2>Subscribe to our monthly plan</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </p>

                                <p>
                                    Sed ut perspiciatis unde omnis iste natus
                                    error sit voluptatem accusantium doloremque
                                    laudantium, totam rem aperiam, eaque ipsa
                                    quae ab illo inventore veritatis et quasi
                                    architecto beatae vitae dicta sunt
                                    explicabo.
                                </p>

                                <Link href='/learning/payment/'>
                                    <a className='default-btn'>
                                        <i className='flaticon-user'></i>{' '}
                                        Subscribe Today <span></span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SubscribePlanComponent;
