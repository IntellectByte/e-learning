import React, { useState } from 'react';

// INTERNALS
import Navbar from '@/components/_App/Navbar';
import CheckoutForm from '@/components/Checkout/CheckoutForm';
import PopUpCheck from '@/components/PopUp/PopupCheckout';
import SupportButton from '@/components/ContactUs/SupportBtn';
import PaymentField from '@/components/PaymentField/PaymentField';

export default function CheckoutPage({ user }) {
    const [showChackoutPopUp, setShowChackoutPopUp] = useState(true);

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

            <CheckoutForm user={user} onButtonClick={handleShowCheckOutPopUP} />

            <PaymentField />
        </>
    );
}
