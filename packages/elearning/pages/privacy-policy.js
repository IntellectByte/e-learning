import React, { useState, useEffect } from 'react';
import Navbar from '@/components/_App/Navbar';
import PageBanner from '@/components/Common/PageBanner';
import Footer from '@/components/_App/Footer';
import { useTranslation } from 'next-i18next';
import SupportButton from '@/components/ContactUs/SupportBtn';
import TopBanner from '@/components/TopBanner/TopBanner';

export default function PrivacyPolicyPage({ user }) {
    const { t } = useTranslation();
    const [isMounted, setIsMounted] = React.useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <>
            <SupportButton />

            <TopBanner />

            <Navbar user={user} />

            <PageBanner
                pageTitle='Privacy Policy'
                homePageUrl='/'
                homePageText='Home'
                activePageText='Privacy Policy'
            />
            <>
                {isMounted && (
                    <div className='privacy-policy-area ptb-100'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-12 col-md-12'>
                                    <div className='privacy-policy-content'>
                                        <p>
                                            <i>
                                                {t('privacy-policy-i', {
                                                    defaultValue:
                                                        'This Privacy Policy was last updated on March 22, 2023.',
                                                })}
                                            </i>
                                        </p>
                                        <h3>
                                            {t('privacy-policy-h3', {
                                                defaultValue:
                                                    '1. What Data We Get',
                                            })}
                                        </h3>

                                        <blockquote className='blockquote'>
                                            <p>
                                                {t(
                                                    'privacy-policy-blockquote',
                                                    {
                                                        defaultValue:
                                                            'We collect certain data from you directly, like information you enter yourself, data about your participation in courses, and data from third-party platforms you connect with eLearniv. We also collect some data automatically, like information about your device and what parts of our Services you interact with or spend time using.',
                                                    }
                                                )}
                                            </p>
                                        </blockquote>

                                        <h3>
                                            {t('privacy-policy-h32', {
                                                defaultValue:
                                                    '2. Data You Provide to Us',
                                            })}
                                        </h3>
                                        <p>
                                            {t('privacy-policy-p1', {
                                                defaultValue:
                                                    'We may collect different data from or about you depending on how you use the Services. Below are some examples to help you better understand the data we collect.',
                                            })}
                                        </p>
                                        <h3>
                                            {t('privacy-policy-h33', {
                                                defaultValue:
                                                    '3. How We Get Data About You',
                                            })}
                                        </h3>
                                        <p>
                                            {t('privacy-policy-p2', {
                                                defaultValue:
                                                    'We use tools like cookies, web beacons, analytics services, and advertising providers to gather the data listed above. Some of these tools offer you the ability to opt out of data collection.',
                                            })}
                                        </p>
                                        <h3>
                                            {t('privacy-policy-h34', {
                                                defaultValue:
                                                    '4. What We Use Your Data For',
                                            })}
                                        </h3>
                                        <ol>
                                            <li>
                                                {t('privacy-policy-li1', {
                                                    defaultValue:
                                                        'Responding to your questions and concerns;',
                                                })}
                                            </li>
                                            <li>
                                                {t('privacy-policy-li2', {
                                                    defaultValue:
                                                        'Sending you administrative messages and information, including messages from instructors and teaching assistants, notifications about changes to our Service, and updates to our agreements;',
                                                })}
                                            </li>
                                            <li>
                                                {t('privacy-policy-li3', {
                                                    defaultValue:
                                                        'Sending push notifications to your wireless device to provide updates and other relevant messages (which you can manage from the “options” or “settings” page of the mobile app);',
                                                })}
                                            </li>
                                        </ol>
                                        <h3>
                                            {t('privacy-policy-h35', {
                                                defaultValue:
                                                    '5. Your Choices About the Use of Your Data',
                                            })}
                                        </h3>
                                        <p>
                                            {t('privacy-policy-p3', {
                                                defaultValue:
                                                    'You can choose not to provide certain data to us, but you may not be able to use certain features of the Services.',
                                            })}
                                        </p>
                                        <ul>
                                            <li>
                                                {t('privacy-policy-li4', {
                                                    defaultValue:
                                                        'To stop receiving promotional communications from us, you can opt out by using the unsubscribe mechanism in the promotional communication you receive or by changing the email preferences in your account. Note that regardless of your email preference settings, we will send you transactional and relationship messages regarding the Services, including administrative confirmations, order confirmations, important updates about the Services, and notices about our policies.',
                                                })}
                                            </li>
                                            <li>
                                                {t('privacy-policy-li5', {
                                                    defaultValue:
                                                        'The browser or device you use may allow you to control cookies and other types of local data storage. Your wireless device may also allow you to control whether location or other data is collected and shared. You can manage Adobe LSOs through their Website Storage Settings panel.',
                                                })}
                                            </li>
                                            <li>
                                                {t('privacy-policy-li6', {
                                                    defaultValue:
                                                        'To get information and control cookies used for tailored advertising from participating companies, see the consumer opt-out pages for the Network Advertising Initiative and Digital Advertising Alliance, or if you are located in the European Union, visit the Your Online Choices site. To opt out of Google display advertising or customize Google Display Network ads, visit the Google Ads Settings page. To opt out of Taboola targeted ads, see the Opt-out Link in their Cookie Policy.',
                                                })}
                                            </li>
                                            <li>
                                                {t('privacy-policy-li7', {
                                                    defaultValue:
                                                        'To update data you provide directly, log into your account and update your account at any time.',
                                                })}
                                            </li>
                                        </ul>
                                        <h3>
                                            {t('privacy-policy-h36', {
                                                defaultValue:
                                                    '6. Our Policy Concerning Children',
                                            })}
                                        </h3>
                                        <p>
                                            {t('privacy-policy-p4', {
                                                defaultValue:
                                                    'We recognize the privacy interests of children and encourage parents and guardians to take an active role in their children online activities and interests. Children under 13 (or under 16 in the European Economic Area) should not use the Services. If we learn that we have collected personal data from a child under those ages, we will take reasonable steps to delete it.',
                                            })}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </>

            <Footer />
        </>
    );
}
