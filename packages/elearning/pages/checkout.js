import React, { useState } from 'react';

// INTERNALS
import Navbar from '@/components/_App/Navbar';
import CheckoutForm from '@/components/Checkout/CheckoutForm';
// import PopUpCheck from '@/components/PopUp/PopupCheckout';
import SupportButton from '@/components/ContactUs/SupportBtn';
import PaymentField from '@/components/PaymentField/PaymentField';

export default function CheckoutPage({ user }) {
    const [showChackoutPopUp, setShowChackoutPopUp] = useState(true);
    const [isPaymentFormComplete, setIsPaymentFormComplete] = useState(false);

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

            {/* COMMENTING POP UP BECAUSE IT WAS USED WHEN WE HAD HOTMART CHECKOUT */}
            {/* {showChackoutPopUp && (
                <PopUpCheck onClose={handleCloseCheckOutPopUP} />
            )} */}

            <CheckoutForm
                user={user}
                onButtonClick={handleShowCheckOutPopUP}
                isPaymentFormComplete={isPaymentFormComplete}
            />

            <PaymentField onFormComplete={setIsPaymentFormComplete} />
        </>
    );
}
