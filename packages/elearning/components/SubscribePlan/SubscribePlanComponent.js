import React, { useEffect, useState } from 'react';
import { Pricing } from 'react-pricing';
import styles from './SubscribePlanComponent.module.css';
import { useTranslation } from 'next-i18next';

const SubscribePlanComponent = () => {
    const { t } = useTranslation();
    const [isMounted, setIsMounted] = React.useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <>
            {isMounted && (
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
                                    { text: 'material de apoio', value: true },
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
                                price={1589}
                                duration='y'
                                background='linear-gradient(-20deg, #ddd6f3 0%, #faaca8 100%, #faaca8 100%)'
                                shadow='#F5BCD7'
                                currency='R$'
                                buttonContent='Inscrever'
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
                                    { text: 'material de apoio', value: true },
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
                                price={2331}
                                duration='y'
                                background='linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%)'
                                shadow='#F5BCD7'
                                currency='R$'
                                buttonContent='Inscrever'
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
                                    { text: 'material de apoio', value: true },
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
                                price={3482}
                                duration='y'
                                background='linear-gradient(68.6deg, rgb(252, 165, 241) 1.8%, rgb(181, 255, 255) 100.5%)'
                                shadow='#F5BCD7'
                                currency='R$'
                                buttonContent='Inscrever'
                                // priceText='mo/year'
                                headerText='Plano Premium'
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default SubscribePlanComponent;
