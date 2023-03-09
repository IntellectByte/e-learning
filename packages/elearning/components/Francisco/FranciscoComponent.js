import React from 'react';

const FranciscoComponent = () => {
    return (
        <>
            <div className='about-area francisco-area ptb-100'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-lg-6 col-md-12'>
                            <div className='about-image'>
                                <div className='image'>
                                    <img
                                        src='/images/Francisco-Santana.jpg'
                                        alt='image'
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-6 col-md-12'>
                            <div className='about-content'>
                                <span className='sub-title'>
                                    Francisco Santana
                                </span>
                                <h2>Inicios</h2>
                                <p>
                                    Nascido em São Paulo e criado em Cajamar, na
                                    região metropolitana de São Paulo, o Chef
                                    Glacier Francisco Sant’Ana é referência no
                                    Brasil quando falamos em sorvete. Formado
                                    pela Escola Nacional Superior de
                                    Confeitaria, na França, foi o primeiro
                                    brasileiro a receber o título CAP –
                                    Certificat d’Aptitude Professionnelle en
                                    Pâtisserie e o primeiro assistente
                                    estrangeiro da instituição, onde também
                                    ministrou aulas. Na Espanha, cursou a Escola
                                    Universitária de Hotelaria e Turismo de Sant
                                    Pol de Mar.
                                </p>

                                <p>
                                    Geógrafo de formação, a escolha pela mudança
                                    de profissão foi feita pelo prazer de fazer
                                    algo que realmente gostava, tornando-se
                                    então o respeitável Mestre Sorveteiro e de
                                    reputação internacional. É professor não só
                                    em seu país como também na França, Espanha,
                                    Argentina e Itália.
                                </p>

                                <p>
                                    Sant’Ana faz questão de incentivar os
                                    sabores de frutas tropicais brasileiras,
                                    assim como estimular a democratização de um
                                    produto de qualidade, sem conservantes ou
                                    produtos químicos. Seu lema? “Sem pó, sem
                                    pasta, sorvete de verdade”.
                                </p>

                                <p>
                                    Atualmente, viaja pelo Brasil e pelo mundo
                                    prestando consultoria na área de sorveteria
                                    profissional, ministra cursos para
                                    empreendedores na Escola Sorvete, e é um dos
                                    embaixadores Callebaut no Brasil.
                                </p>

                                <p>
                                    Já ministrou cursos e implantou gelaterias e
                                    sorveterias em mais de 13 países e em mais
                                    de 12 estados brasileiros.
                                </p>

                                <div className='francisco-links'>
                                    <ul className='francisco-ullinks'>
                                        <li>
                                            <a
                                                href='https://www.instagram.com/franciscosantanasorvete/'
                                                className='d-block'
                                                target='_blank'
                                                rel='noreferrer'
                                            >
                                                <i className='bx bxl-instagram'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href='https://www.linkedin.com/in/francisco-santana-aa80a8138/'
                                                className='d-block'
                                                target='_blank'
                                                rel='noreferrer'
                                            >
                                                <i className='bx bxl-linkedin'></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                {/* <ul className='features-list'>
                                    <li>
                                        <span>
                                            <i className='flaticon-experience'></i>{' '}
                                            Expert Trainers
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='flaticon-time-left'></i>{' '}
                                            Lifetime Acces
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='flaticon-tutorials'></i>{' '}
                                            Remote Learning
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='flaticon-self-growth'></i>{' '}
                                            Self Development
                                        </span>
                                    </li>
                                </ul> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FranciscoComponent;
