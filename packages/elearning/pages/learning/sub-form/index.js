import React, { useEffect, useState } from 'react';
import Navbar from '@/components/_App/Navbar';
import PageBanner from '../../../components/Common/PageBanner';
import SubscribePlanComponent from '../../../components/SubscribePlan/SubscribePlanComponent';
import Footer from '@/components/_App/Footer';
import SupportButton from '@/components/ContactUs/SupportBtn';

const Index = ({ user }) => {
    return (
        <>
            <SupportButton />

            <Navbar user={user} />

            <PageBanner
                pageTitle='Subscribe to our monthly plan'
                homePageUrl='/'
                homePageText='Home'
                activePageText='Monthly Plan'
            />

            <SubscribePlanComponent />

            <Footer />
        </>
    );
};

export default Index;
