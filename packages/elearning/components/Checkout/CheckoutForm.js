import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    calculateCartTotal,
    calculateCartTotalMinus,
} from '@/utils/calculateCartTotal';
import CheckoutList from './CheckoutList';
import PlaceOrderBtn from './PlaceOrderBtn';
import Link from 'next/link';
import PlaceOrderBtnDisabled from '@/components/Checkout/PlaceOrderBtnDisabled';

const CheckoutForm = ({ user, isPaymentFormComplete }) => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();
    const [cartAmout, setCartAmaount] = React.useState(0);
    const [cartAmoutMinus, setCartAmaountMinus] = React.useState(0);
    const [isMobile, setIsMobile] = React.useState(false);

    useEffect(() => {
        const { cartTotal } = calculateCartTotal(cartItems);
        const { cartTotalMinus } = calculateCartTotalMinus(cartItems);
        setCartAmaount(cartTotal);
        setCartAmaountMinus(cartTotalMinus);
    }, [cartItems]);

    const handleRemove = async (cartId) => {
        dispatch({
            type: 'REMOVE_CART',
            id: cartId,
        });
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div
                style={{
                    maxWidth: isMobile ? '100%' : '33%',
                    height: isMobile ? 'auto' : '100%',
                    display: 'flex',
                }}
                className='checkout-area ptb-100'
            >
                <div className='container'>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignContent: 'center',
                            // backgroundColor: "red"
                        }}
                        className='row justify-content-center'
                    >
                        <div
                            style={
                                {
                                    // backgroundColor: "red",
                                }
                            }
                            className='col-lg-9 col-md-12'
                        >
                            <div
                                style={
                                    {
                                        // backgroundColor: "red",
                                    }
                                }
                                className='shopping-cart'
                            >
                                <p>{cartItems.length} Course in Cart</p>

                                <div className='shopping-cart-list'>
                                    <div className='row align-items-center'>
                                        {cartItems.length > 0 ? (
                                            cartItems.map((cart) => (
                                                <CheckoutList
                                                    key={cart.id}
                                                    {...cart}
                                                    onRemove={() =>
                                                        handleRemove(cart.id)
                                                    }
                                                />
                                            ))
                                        ) : (
                                            <>
                                                <div
                                                    style={
                                                        {
                                                            // backgroundColor: "red",
                                                        }
                                                    }
                                                    className='col-lg-12 text-center'
                                                >
                                                    <h3
                                                        style={{
                                                            textAlign: 'center',
                                                            fontWeight: 'bold',
                                                            color: '#0000001f',
                                                            fontSize: '93px',
                                                        }}
                                                    >
                                                        Empty
                                                    </h3>
                                                    <Link href='/courses'>
                                                        <a className='default-btn'>
                                                            <i className='flaticon-shopping-cart'></i>
                                                            Continue Shopping
                                                        </a>
                                                    </Link>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {cartItems.length > 0 && (
                            <div
                                style={{
                                    // backgroundColor: "red",
                                    padding: '5px',
                                }}
                                className='col-lg-6 col-md-12'
                            >
                                <p className='fs-18 mb-2'>Subtotal:</p>
                                <h1 className='fw-bold'>
                                    ${cartAmout}
                                    {cartAmoutMinus > 0 && (
                                        <del className='d-block fs-18 text-muted mt-2'>
                                            ${cartAmoutMinus}
                                        </del>
                                    )}
                                </h1>
                                {isPaymentFormComplete ? (
                                    <PlaceOrderBtn
                                        user={user}
                                        cartItems={cartItems}
                                        disabled={false}
                                        inner={'Proceed to checkout'}
                                        btnColor={'3'}
                                    />
                                ) : (
                                    <PlaceOrderBtnDisabled />
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CheckoutForm;
