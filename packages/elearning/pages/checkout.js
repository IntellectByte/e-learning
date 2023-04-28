import React, { useState } from 'react';

// INTERNALS
import Navbar from '@/components/_App/Navbar';
import CheckoutForm from '@/components/Checkout/CheckoutForm';
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

            <SnackBar />

            <div style={{display: "flex"}}>
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

            </div>


            {/*<SubscribeForm />*/}



            <Footer />
        </>
    );
}
