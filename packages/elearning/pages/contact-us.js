import React from 'react';
import Navbar from '@/components/_App/Navbar';
import PageBanner from '@/components/Common/PageBanner';
import ContactForm from '../components/ContactUs/ContactForm';
import GoogleMap from '../components/ContactUs/GoogleMap';
import ContactInfo from '@/components/ContactUs/ContactInfo';
import Footer from '@/components/_App/Footer';
import SupportButton from '@/components/ContactUs/SupportBtn';

export default function ContactUsPage({ user }) {
    return (
        <>
            <SupportButton />

            <Navbar user={user} />

            <PageBanner
                pageTitle='Contact Us'
                homePageUrl='/'
                homePageText='Home'
                activePageText='Contact Us'
            />

            <div className='contact-area ptb-100'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-lg-6 col-md-12'>
                            <ContactInfo />
                        </div>

                        <div className='col-lg-6 col-md-12'>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>

            <GoogleMap />

            <Footer />
        </>
    );
}
