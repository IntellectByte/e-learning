import React, { useState } from 'react';

// INTERNALS
import Navbar from '@/components/_App/Navbar';
import CheckoutForm from '@/components/Checkout/CheckoutForm';
// import PopUpCheck from '@/components/PopUp/PopupCheckout';
import SupportButton from '@/components/ContactUs/SupportBtn';
import PaymentField from '@/components/PaymentField/PaymentField';
import TopBanner from '@/components/TopBanner/TopBanner';
import SubscribeForm from '@/components/Common/SubscribeForm';
import Footer from '@/components/_App/Footer';
import SnackBar from '@/components/SnackBar/SnackBar';

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
            <TopBanner />

            <Navbar user={user} />

            {/* <SupportButton /> */}

            <SnackBar />

            {/* COMMENTING POP UP BECAUSE IT WAS USED WHEN WE HAD HOTMART CHECKOUT */}
            {/* {showChackoutPopUp && (
                <PopUpCheck onClose={handleCloseCheckOutPopUP} />
            )} */}

            <PaymentField
                user={user}
                onFormComplete={setIsPaymentFormComplete}
            />

            <hr className='payment-field-border' />

            <CheckoutForm
                user={user}
                onButtonClick={handleShowCheckOutPopUP}
                isPaymentFormComplete={isPaymentFormComplete}
            />

            <hr className='payment-field-border' />

            <SubscribeForm />

            <Footer />
        </>
    );
}
