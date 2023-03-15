import React from 'react';
import { useRouter } from 'next/router';
import baseUrl from '@/utils/baseUrl';

const SocialShareBtns = () => {
    const router = useRouter();
    const { slug } = router.query;
    return (
        <div className='courses-share'>
            <div className='share-info'>
                <span>
                    Share This Course <i className='flaticon-share'></i>
                </span>

                <ul className='social-link'>
                    <li>
                        <a
                            href='https://www.facebook.com/escolasorvete'
                            className='d-block'
                            target='_blank'
                        >
                            <i className='bx bxl-facebook'></i>
                        </a>
                    </li>
                    <li>
                        <a
                            href='https://www.instagram.com/escolasorvete/'
                            className='d-block'
                            target='_blank'
                        >
                            <i className='bx bxl-instagram'></i>
                        </a>
                    </li>

                    <li>
                        <a
                            href='https://www.linkedin.com/company/escola-sorvete/mycompany/'
                            className='d-block'
                            target='_blank'
                        >
                            <i className='bx bxl-linkedin'></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SocialShareBtns;
