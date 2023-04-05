import React, { useState } from 'react';
import Navbar from '@/components/_App/Navbar';
import PageBanner from '@/components/Common/PageBanner';
import CheckoutForm from '@/components/Checkout/CheckoutForm';
import Footer from '@/components/_App/Footer';
import PopUpCheck from '@/components/PopUp/PopupCheckout';
import SupportButton from '@/components/ContactUs/SupportBtn';

export default function CheckoutPage({ user }) {
    const [showChackoutPopUp, setShowChackoutPopUp] = useState(true); // Change the initial state to true

    const handleCloseCheckOutPopUP = () => {
        setShowChackoutPopUp(false);
    };

    const handleShowCheckOutPopUP = () => {
        setShowChackoutPopUp(true);
    };

    return (
        <>
            <Navbar user={user} />

            <SupportButton />

            {showChackoutPopUp && (
                <PopUpCheck onClose={handleCloseCheckOutPopUP} />
            )}
            {/*<PageBanner
                pageTitle="Checkout"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Checkout"
            />*/}

            <CheckoutForm user={user} onButtonClick={handleShowCheckOutPopUP} />

            {/*<Footer />*/}
        </>
    );
}
