import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import FranciscoComponent from '../components/Francisco/FranciscoComponent';
import SubscribeForm from '../components/Common/SubscribeForm';
import Footer from '../components/_App/Footer';

export default function Francisco({ user }) {
    return (
        <>
            <Navbar user={user} />

            <PageBanner
                pageTitle='Francisco Santana'
                homePageUrl='/'
                homePageText='Home'
                activePageText='Francisco Santana'
            />

            <FranciscoComponent />

            <SubscribeForm />

            <Footer />
        </>
    );
}
