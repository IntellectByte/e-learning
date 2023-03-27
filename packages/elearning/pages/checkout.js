import React from 'react';
import Navbar from '@/components/_App/Navbar';
import PageBanner from '@/components/Common/PageBanner';
import CheckoutForm from '@/components/Checkout/CheckoutForm';
import Footer from '@/components/_App/Footer';
import SupportButton from '@/components/ContactUs/SupportBtn';

export default function CheckoutPage({ user }) {
    return (
        <>
            <SupportButton />

            <Navbar user={user} />

            <PageBanner
                pageTitle='Checkout'
                homePageUrl='/'
                homePageText='Home'
                activePageText='Checkout'
            />

            <CheckoutForm user={user} />

            <Footer />
        </>
    );
}
