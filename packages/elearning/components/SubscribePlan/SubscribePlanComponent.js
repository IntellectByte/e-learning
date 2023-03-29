import React from 'react';
import { Pricing } from 'react-pricing';
import styles from './SubscribePlanComponent.module.css';

const SubscribePlanComponent = () => {
    return (
        <>
            <div className={styles['main-component-background']}>
                <div className={styles.wrapper}>
                    <h2>
                        Subscribete a nuestros planes
                        <br />
                    </h2>
                    <br />
                    <div className={styles['pricing-table']}>
                        <Pricing
                            data={[
                                {
                                    text: 'Clases Grabadas',
                                    value: true,
                                },
                                { text: 'Receta del mes', value: true },
                                {
                                    text: 'acceso a la comunidad (WA)',
                                    value: true,
                                },
                                { text: 'material de apoyo', value: true },
                                { text: 'Certificado digital', value: true },
                                {
                                    text: 'Aulas practicas grabadas',
                                    value: false,
                                },
                                {
                                    text: 'Descuento en tienda online',
                                    value: false,
                                },
                                {
                                    text: 'Eventos con descuentos exclusivos',
                                    value: false,
                                },
                                {
                                    text: 'Cursos en Streaming',
                                    value: false,
                                },
                                {
                                    text: 'Aulas practicas en vivo',
                                    value: false,
                                },
                                { text: '1 consultoria con SF', value: false },
                                {
                                    text: 'Una clase practica en la escuela (optativa)*',
                                    value: false,
                                },
                                {
                                    text: 'Grupo de linkedin ex alumnos',
                                    value: false,
                                },
                                {
                                    text: 'Ceremonia de graduación con diploma fisico',
                                    value: false,
                                },
                            ]}
                            price={323}
                            duration='y'
                            background='linear-gradient(-20deg, #ddd6f3 0%, #faaca8 100%, #faaca8 100%)'
                            shadow='#F5BCD7'
                            currency='U$D'
                            buttonContent='Subscribete'
                            //priceText='Bring your designs to the next level and export them.'
                            headerText='Plan Basico'
                        />

                        <Pricing
                            data={[
                                {
                                    text: 'Clases Grabadas',
                                    value: true,
                                },
                                { text: 'Receta del mes', value: true },
                                {
                                    text: 'acceso a la comunidad (WA)',
                                    value: true,
                                },
                                { text: 'material de apoyo', value: true },
                                { text: 'Certificado digital', value: true },
                                {
                                    text: 'Aulas practicas grabadas',
                                    value: true,
                                },
                                {
                                    text: 'Descuento en tienda online',
                                    value: true,
                                },
                                {
                                    text: 'Eventos con descuentos exclusivos',
                                    value: true,
                                },
                                {
                                    text: 'Cursos en Streaming',
                                    value: false,
                                },
                                {
                                    text: 'Aulas practicas en vivo',
                                    value: false,
                                },
                                { text: '1 consultoria con SF', value: false },
                                {
                                    text: 'Una clase practica en la escuela (optativa)*',
                                    value: false,
                                },
                                {
                                    text: 'Grupo de linkedin ex alumnos',
                                    value: false,
                                },
                                {
                                    text: 'Ceremonia de graduación con diploma fisico',
                                    value: false,
                                },
                            ]}
                            price={474}
                            duration='y'
                            background='linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%)'
                            shadow='#F5BCD7'
                            currency='U$D'
                            buttonContent='Subscribete'
                            //priceText='Bring your designs to the next level and export them.'
                            headerText='Plan Intermedio'
                        />

                        <Pricing
                            data={[
                                {
                                    text: 'Clases Grabadas',
                                    value: true,
                                },
                                { text: 'Receta del mes', value: true },
                                {
                                    text: 'acceso a la comunidad (WA)',
                                    value: true,
                                },
                                { text: 'material de apoyo', value: true },
                                { text: 'Certificado digital', value: true },
                                {
                                    text: 'Aulas practicas grabadas',
                                    value: true,
                                },
                                {
                                    text: 'Descuento en tienda online',
                                    value: true,
                                },
                                {
                                    text: 'Eventos con descuentos exclusivos',
                                    value: true,
                                },
                                {
                                    text: 'Cursos en Streaming',
                                    value: true,
                                },
                                {
                                    text: 'Aulas practicas en vivo',
                                    value: true,
                                },
                                { text: '1 consultoria con SF', value: true },
                                {
                                    text: 'Una clase practica en la escuela (optativa)*',
                                    value: true,
                                },
                                {
                                    text: 'Grupo de linkedin ex alumnos',
                                    value: true,
                                },
                                {
                                    text: 'Ceremonia de graduación con diploma fisico',
                                    value: true,
                                },
                            ]}
                            price={708}
                            duration='y'
                            background='linear-gradient(68.6deg, rgb(252, 165, 241) 1.8%, rgb(181, 255, 255) 100.5%)'
                            shadow='#F5BCD7'
                            currency='U$D'
                            buttonContent='Subscribete'
                            // priceText='mo/year'
                            headerText='Plan Premium'
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SubscribePlanComponent;
