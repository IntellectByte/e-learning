import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Pricing } from 'react-pricing';
import styles from './SubscribePlanComponent.module.css';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const SubscribePlanComponent = () => {
    const { t } = useTranslation();
    const [isMounted, setIsMounted] = React.useState(false);
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems);
    const router = useRouter();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const subscribePlan1 = () => {
        const planObj = {
            id: '1',
            title: 'Plano de Assinatura BÁSICO',
            slug: 'picol-para-todos-como-inovar-no-mercado-de-picols',
            price: 1589,
            image: 'https://media.discordapp.net/attachments/1090618368584859729/1098289672486141952/Assine_Ahora_Baunilla.jpg?width=676&height=676',
            duration: 'Assinatura de 1 año',
            quantity: 1,
            hotmartId: 'bwwp449q',
            instructor: "Francisco Sant'Ana",
            discount: 0,
            type: 'sub',
        };

        dispatch({
            type: 'RESET_CART',
        });

        dispatch({
            type: 'ADD_TO_CART',
            data: planObj,
        });

        router.push('/checkout');
    };

    const subscribePlan2 = () => {
        const planObj = {
            id: '2',
            title: 'Plano de Assinatura INTERMEDIÁRIO',
            slug: 'picol-para-todos-como-inovar-no-mercado-de-picols',
            price: 2331,
            image: 'https://media.discordapp.net/attachments/1090618368584859729/1098289672200921130/Assine_Ahora_Chocolate.jpg?width=676&height=676',
            duration: 'Assinatura de 1 año',
            quantity: 1,
            hotmartId: 'bwwp449q',
            instructor: "Francisco Sant'Ana",
            discount: 0,
            type: 'sub',
        };

        dispatch({
            type: 'RESET_CART',
        });

        dispatch({
            type: 'ADD_TO_CART',
            data: planObj,
        });

        router.push('/checkout');
    };

    const subscribePlan3 = () => {
        const planObj = {
            id: '3',
            title: 'Plano de Assinatura PREMIUM',
            slug: 'picol-para-todos-como-inovar-no-mercado-de-picols',
            price: 3482,
            image: 'https://media.discordapp.net/attachments/1090618368584859729/1098289671915712613/Assine_Ahora_Pistache.jpg?width=676&height=676',
            duration: 'Assinatura de 1 año',
            quantity: 1,
            hotmartId: 'bwwp449q',
            instructor: "Francisco Sant'Ana",
            discount: 0,
            type: 'sub',
        };

        dispatch({
            type: 'RESET_CART',
        });

        dispatch({
            type: 'ADD_TO_CART',
            data: planObj,
        });

        router.push('/checkout');
    };

    const alreadySubscribe = cartItems.some((item) => {
        return item.slug === 'subscription-plan';
    });

    return (
        <>
            {isMounted && (
                <a
                    onClick={() => router.push('/checkout')}
                    style={{ cursor: 'pointer' }}
                >
                    <div className={styles['main-component-background']}>
                        <div className={styles.wrapper}>
                            <h2>
                                {t('subcomponent-h2', {
                                    defaultValue: 'Subscribe to our plans',
                                })}
                                <br />
                            </h2>
                            <br />
                            <div className={styles['pricing-table']}>
                                <Pricing
                                    data={[
                                        {
                                            text: 'Aulas gravadas',
                                            value: true,
                                        },
                                        { text: 'Receita do mês', value: true },
                                        {
                                            text: 'acesso à comunidade (WA)',
                                            value: true,
                                        },
                                        {
                                            text: 'material de apoio',
                                            value: true,
                                        },
                                        {
                                            text: 'Certificado digital',
                                            value: true,
                                        },
                                        {
                                            text: 'Aulas práticas gravadas',
                                            value: false,
                                        },
                                        {
                                            text: 'Desconto na loja online',
                                            value: false,
                                        },
                                        {
                                            text: 'Eventos com descontos exclusivos',
                                            value: false,
                                        },
                                        {
                                            text: 'Cursos Transmitidos',
                                            value: false,
                                        },
                                        {
                                            text: 'Aulas práticas ao vivo',
                                            value: false,
                                        },
                                        {
                                            text: '1 consultoria com SF',
                                            value: false,
                                        },
                                        {
                                            text: 'Uma aula prática na escola (opcional)*',
                                            value: false,
                                        },
                                        {
                                            text: 'Grupo de ex-alunos do LinkedIn',
                                            value: false,
                                        },
                                        {
                                            text: 'Cerimônia de formatura com diploma físico',
                                            value: false,
                                        },
                                    ]}
                                    price={323}
                                    duration='y'
                                    background='linear-gradient(-20deg, #ddd6f3 0%, #faaca8 100%, #faaca8 100%)'
                                    shadow='#F5BCD7'
                                    currency='U$D'
                                    buttonContent={
                                        alreadySubscribe ? (
                                            <a
                                                onClick={() =>
                                                    router.push('/checkout')
                                                }
                                            >
                                                {t(
                                                    'subcomponent-already-subscribe',
                                                    {
                                                        defaultValue:
                                                            'View My Subscription',
                                                    }
                                                )}
                                            </a>
                                        ) : (
                                            <a onClick={subscribePlan1}>
                                                {t(
                                                    'subcomponent-subscribe-btn',
                                                    {
                                                        defaultValue:
                                                            'INSCREVER',
                                                    }
                                                )}
                                            </a>
                                        )
                                    }
                                    //priceText='Bring your designs to the next level and export them.'
                                    headerText='Plano Básico'
                                />

                                <Pricing
                                    data={[
                                        {
                                            text: 'Aulas gravadas',
                                            value: true,
                                        },
                                        { text: 'Receita do mês', value: true },
                                        {
                                            text: 'acesso à comunidade (WA)',
                                            value: true,
                                        },
                                        {
                                            text: 'material de apoio',
                                            value: true,
                                        },
                                        {
                                            text: 'Certificado digital',
                                            value: true,
                                        },
                                        {
                                            text: 'Aulas práticas gravadas',
                                            value: true,
                                        },
                                        {
                                            text: 'Desconto na loja online',
                                            value: true,
                                        },
                                        {
                                            text: 'Eventos com descontos exclusivos',
                                            value: true,
                                        },
                                        {
                                            text: 'Cursos Transmitidos',
                                            value: false,
                                        },
                                        {
                                            text: 'Aulas práticas ao vivo',
                                            value: false,
                                        },
                                        {
                                            text: '1 consultoria com SF',
                                            value: false,
                                        },
                                        {
                                            text: 'Uma aula prática na escola (opcional)*',
                                            value: false,
                                        },
                                        {
                                            text: 'Grupo de ex-alunos do LinkedIn',
                                            value: false,
                                        },
                                        {
                                            text: 'Cerimônia de formatura com diploma físico',
                                            value: false,
                                        },
                                    ]}
                                    price={474}
                                    duration='y'
                                    background='linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%)'
                                    shadow='#F5BCD7'
                                    currency='U$D'
                                    buttonContent={
                                        alreadySubscribe ? (
                                            <a
                                                onClick={() =>
                                                    router.push('/checkout')
                                                }
                                            >
                                                {t(
                                                    'subcomponent-already-subscribe',
                                                    {
                                                        defaultValue:
                                                            'View My Subscription',
                                                    }
                                                )}
                                            </a>
                                        ) : (
                                            <a onClick={subscribePlan2}>
                                                {t(
                                                    'subcomponent-subscribe-btn',
                                                    {
                                                        defaultValue:
                                                            'INSCREVER',
                                                    }
                                                )}
                                            </a>
                                        )
                                    }
                                    //priceText='Bring your designs to the next level and export them.'
                                    headerText='Plano Intermediário'
                                />

                                <Pricing
                                    data={[
                                        {
                                            text: 'Aulas gravadas',
                                            value: true,
                                        },
                                        { text: 'Receita do mês', value: true },
                                        {
                                            text: 'acesso à comunidade (WA)',
                                            value: true,
                                        },
                                        {
                                            text: 'material de apoio',
                                            value: true,
                                        },
                                        {
                                            text: 'Certificado digital',
                                            value: true,
                                        },
                                        {
                                            text: 'Aulas práticas gravadas',
                                            value: true,
                                        },
                                        {
                                            text: 'Desconto na loja online',
                                            value: true,
                                        },
                                        {
                                            text: 'Eventos com descontos exclusivos',
                                            value: true,
                                        },
                                        {
                                            text: 'Cursos Transmitidos',
                                            value: true,
                                        },
                                        {
                                            text: 'Aulas práticas ao vivo',
                                            value: true,
                                        },
                                        {
                                            text: '1 consultoria com SF',
                                            value: true,
                                        },
                                        {
                                            text: 'Uma aula prática na escola (opcional)*',
                                            value: true,
                                        },
                                        {
                                            text: 'Grupo de ex-alunos do LinkedIn',
                                            value: true,
                                        },
                                        {
                                            text: 'Cerimônia de formatura com diploma físico',
                                            value: true,
                                        },
                                    ]}
                                    price={708}
                                    duration='y'
                                    background='linear-gradient(68.6deg, rgb(252, 165, 241) 1.8%, rgb(181, 255, 255) 100.5%)'
                                    shadow='#F5BCD7'
                                    currency='U$D'
                                    buttonContent={
                                        alreadySubscribe ? (
                                            <a
                                                onClick={() =>
                                                    router.push('/checkout')
                                                }
                                            >
                                                {t(
                                                    'subcomponent-already-subscribe',
                                                    {
                                                        defaultValue:
                                                            'View My Subscription',
                                                    }
                                                )}
                                            </a>
                                        ) : (
                                            <a onClick={subscribePlan3}>
                                                {t(
                                                    'subcomponent-subscribe-btn',
                                                    {
                                                        defaultValue:
                                                            'INSCREVER',
                                                    }
                                                )}
                                            </a>
                                        )
                                    }
                                    // priceText='mo/year'
                                    headerText='Plano Premium'
                                />
                            </div>
                        </div>
                    </div>
                </a>
            )}
        </>
    );
};

export default SubscribePlanComponent;
