import React from 'react';
import Link from 'next/link';

const Custom404 = () => {
    return (
        <>
            {/* <div className='error-area'>
                <div className='d-table'>
                    <div className='d-table-cell'>
                        <div className='container'>
                            <div className='error-content'>
                                <img src='/images/error.png' alt='image' />
                                <h3>Error 404 : Page Not Found</h3>
                                <p>
                                    The page you are looking for might have been
                                    removed had its name changed or is
                                    temporarily unavailable.
                                </p>

                                <div className='btn-box'>
                                    <Link href='/'>
                                        <a className='default-btn'>
                                            <i className='flaticon-history'></i>{' '}
                                            Go Back <span></span>
                                        </a>
                                    </Link>
                                    <Link href='/'>
                                        <a className='default-btn'>
                                            <i className='flaticon-home'></i>{' '}
                                            Homepage <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className='bluemoon'>
                <div class='mars' />
                <img
                    src='https://assets.codepen.io/1538474/404.svg'
                    class='logo-404'
                />
                <img
                    src='https://assets.codepen.io/1538474/meteor.svg'
                    class='meteor'
                />
                <p class='title'>Oh no!!</p>
                <p class='subtitle'>
                    You’re either misspelling the URL <br /> or requesting a
                    page that's no longer here.
                </p>
                <div align='center'>
                    <a class='btn-back' href='#'>
                        Back to previous page
                    </a>
                </div>
                <img
                    src='https://media.discordapp.net/attachments/1076613189795586122/1083484472491655319/sorvete-logo.png'
                    class='astronaut'
                />
                <img
                    src='https://media.discordapp.net/attachments/1076613189795586122/1083484472491655319/sorvete-logo.png'
                    class='spaceship'
                />
            </div>
        </>
    );
};

export default Custom404;
