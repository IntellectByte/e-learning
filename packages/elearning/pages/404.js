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
                <p class='title'>Oh no, algo deu errado!</p>
                <p class='subtitle'>
                    Você está digitando o URL incorretamente ou seu pagamento
                    foi recusado. <br />
                    Por favor, verifique o e-mail com o qual você se registrou.
                </p>
                <div align='center'>
                    <Link href='/'>
                        <a class='btn-back' href='#'>
                            Voltar ao Escola Sorvete
                        </a>
                    </Link>
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
