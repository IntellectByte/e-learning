import React from 'react';
import Navbar from '@/components/_App/Navbar';
import PageBanner from '@/components/Common/PageBanner';
import ForgotPassComponent from '@/components/Authentication/ForgotPassComponent';
import Footer from '@/components/_App/Footer';

export default function ForgotPasswordPage({ user }) {
    return (
        <>
            <Navbar user={user} />

            <PageBanner
                pageTitle='Forgot Password'
                homePageUrl='/'
                homePageText='Home'
                activePageText='Forgot Password'
            />

            <ForgotPassComponent />

            <Footer />
        </>
    );
}