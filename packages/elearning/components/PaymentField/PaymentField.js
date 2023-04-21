import React, {useState, useEffect} from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import PlaceOrderBtn from '@/components/Checkout/PlaceOrderBtn';
import axios from 'axios';
import baseUrl from '@/utils/baseUrl';
import {parseCookies} from 'nookies';
import {useTranslation} from 'next-i18next';
import {v4 as uuidv4} from "uuid";
import {useSelector} from "react-redux";


const PaymentField = ({user, onFormComplete}) => {
    const {elarniv_users_token} = parseCookies();
    const {t} = useTranslation();
    const [isMounted, setIsMounted] = React.useState(false);
    const {cartItems} = useSelector(state => state.cart)

    const validationSchema = Yup.object().shape({

        doc: Yup.string().required('Required'),
        documentNumber: Yup.string().required('Required'),
        phoneNumber: Yup.string().required('Required'),
        streetNumber: Yup.string().required('Required'),
        street: Yup.string().required('Required'),
        addressComplementary: Yup.string().required('Required'),
        neighborhood: Yup.string().required('Required'),
        city: Yup.string().required('Required'),
        state: Yup.string().required('Required'),
        zipCode: Yup.string().required('Required'), // customerFirstName: Yup.string().when('shouldValidateCustomer', {

        customerEmail: Yup.string().email('Invalid email').required('Email is required')
            .test(
                'unique-email',
                'Email already exists',
                async function (value) {
                    try {
                        const response = await axios.get(`/api/users/email-already-exists?email=${value}`);
                        return response.data.exists === false;
                    } catch (error) {
                        console.log(error);
                        return false;
                    }
                }
            ),

        customerFirstName: Yup.string().required('Required'),
        customerLastName: Yup.string().required('Required'),
        // customerEmail: Yup.string().required('Required'),

    });

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const validateForm = async (values) => {
        try {

            // console.log(values)

            await validationSchema.validate(values, {abortEarly: false});

            setTimeout(() => {
                const script = document.getElementById('script-getnet');

                script.dataset.getnetCustomerDocumentType = values.doc;
                script.dataset.getnetCustomerDocumentNumber = values.documentNumber;
                script.dataset.getnetCustomerPhoneNumber = values.phoneNumber;
                script.dataset.getnetCustomerAddressStreetNumber = values.streetNumber;
                script.dataset.getnetCustomerAddressStreet = values.street;
                script.dataset.getnetCustomerAddressComplementary = values.addressComplementary;
                script.dataset.getnetCustomerAddressNeighborhood = values.neighborhood;
                script.dataset.getnetCustomerAddressCity = values.city;
                script.dataset.getnetCustomerAddressState = values.state;
                script.dataset.getnetCustomerAddressZipcode = values.zipCode;
                script.dataset.getnetCustomerCountry = 'Brasil';

                if (!user) {

                    const token = uuidv4();

                    script.dataset.getnetCustomerid = token;
                    script.dataset.getnetCustomerFirstName = values.customerFirstName;
                    script.dataset.getnetCustomerLastName = values.customerLastName;
                    script.dataset.getnetCustomerEmail = values.customerEmail;
                }

                const payment = {
                    id: script.dataset.getnetOrderid,
                    userId: script.dataset.getnetCustomerid,
                    amount: parseFloat(script.dataset.getnetAmount),
                    buyerEmail: script.dataset.getnetCustomerEmail,
                    buyerName: `${script.dataset.getnetCustomerFirstName} ${script.dataset.getnetCustomerLastName}`,
                    buyerDocType: script.dataset.getnetCustomerDocumentType,
                    buyerDocNumber: script.dataset.getnetCustomerDocumentNumber,
                    buyerAdressStreetNumber: script.dataset.getnetCustomerAddressStreetNumber,
                    buyerPhoneNumber: script.dataset.getnetCustomerPhoneNumber,
                    buyerAdressStreet: script.dataset.getnetCustomerAddressStreet,
                    buyerAdressComplementary: script.dataset.getnetCustomerAddressComplementary,
                    buyerAdressNeighborhood: script.dataset.getnetCustomerAddressNeighborhood,
                    buyerAdressCity: script.dataset.getnetCustomerAddressCity,
                    buyerAdressState: script.dataset.getnetCustomerAddressState,
                    buyerAdressZipCode: script.dataset.getnetCustomerAddressZipcode,
                    buyerCountry: script.dataset.getnetCustomerCountry,
                    items: JSON.parse(script.dataset.getnetItems),
                    paymentState: 'PENDANT',
                };

                axios
                    .post(`${baseUrl}/api/purchases`, payment, {
                        headers: {authorization: elarniv_users_token},
                    })
                    .then((data) => {
                        // console.log(data)
                    })
                    .catch((err) => {
                        // console.log(err)
                    });
            }, 2000);

            onFormComplete(true);
        } catch (error) {
            onFormComplete(false);
        }
    };

    return (<>
        {isMounted && cartItems.length > 0 && (<div className='container'>
            <section>
                <div className='row'>
                    <div className='col-md-8 mb-4'>
                        <div className='card mb-4 payment-field-border'>
                            <div className='card-header py-3'>
                                <h5 className='mb-0'>
                                    {t('paymentfield-page-h5', {
                                        defaultValue: 'Your Info',
                                    })}
                                </h5>
                            </div>
                            <div className='card-body'>
                                <Formik
                                    initialValues={{
                                        doc: 'CPF',
                                        documentNumber: '',
                                        phoneNumber: '',
                                        streetNumber: '',
                                        street: '',
                                        addressComplementary: '',
                                        neighborhood: '',
                                        city: '',
                                        state: '',
                                        zipCode: '',
                                        customerFirstName: user ? user.first_name : '',
                                        customerLastName: user ? user.last_name : '',
                                        customerEmail: user ? user.email : '', // shouldValidateCustomer: user ? "false" : "true",
                                    }}
                                    validationSchema={validationSchema}
                                    validateOnMount
                                    validate={validateForm}
                                >


                                    {({isSubmitting}) => (<Form>
                                        <div className='form-outline mb-4'>

                                            {/*{!user && <div>*/}

                                            <label htmlFor='customerFirstName'>
                                                {t('customerFirstName', {
                                                    defaultValue: 'First Name',
                                                })}
                                            </label>

                                            <Field
                                                type={user ? 'hidden' : "text"}
                                                name='customerFirstName'
                                                id='customerFirstName'
                                                className='form-control'
                                                placeholder='John'
                                                // value={user && user.first_name}
                                            />
                                            <ErrorMessage
                                                name='customerFirstName'
                                                component='div'
                                                style={{
                                                    color: 'red',
                                                }}
                                            />
                                            <label htmlFor='customerLastName'>
                                                {t('customerLastName', {
                                                    defaultValue: 'Last Name',
                                                })}
                                            </label>

                                            <Field
                                                type={user ? 'hidden' : "text"}
                                                name='customerLastName'
                                                id='customerLastName'
                                                className='form-control'
                                                placeholder='Doe'
                                                // value={user && user.last_name}

                                            />
                                            <ErrorMessage
                                                name='customerLastName'
                                                component='div'
                                                style={{
                                                    color: 'red',
                                                }}
                                            />
                                            <label htmlFor='customerEmail'>
                                                {t('customerEmail', {
                                                    defaultValue: 'Email',
                                                })}
                                            </label>

                                            <Field
                                                type={user ? 'hidden' : "text"}
                                                name='customerEmail'
                                                id='customerEmail'
                                                className='form-control'
                                                placeholder='johndoe@example.com'
                                                // value={user && user.email}
                                            />
                                            <ErrorMessage
                                                name='customerEmail'
                                                component='div'
                                                style={{
                                                    color: 'red',
                                                }}
                                            />
                                            {/*</div>*/}
                                            {/*}*/}


                                            <label htmlFor='doc'>
                                                {t('paymentfield-page-tipodoc', {
                                                    defaultValue: 'Document Type',
                                                })}
                                            </label>
                                            <Field
                                                as='select'
                                                name='doc'
                                                id='doc'
                                                style={{
                                                    display: 'block',
                                                    width: '100%',
                                                    padding: '8px',
                                                    fontSize: '16px',
                                                    lineHeight: '1.5',
                                                    color: '#495057',
                                                    backgroundColor: '#fff',
                                                    backgroundClip: 'padding-box',
                                                    border: '1px solid #ced4da',
                                                    borderRadius: '4px',
                                                    transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
                                                }}
                                            >
                                                <option value='CPF'>
                                                    CPF
                                                </option>
                                                <option value='CNPJ'>
                                                    CNPJ
                                                </option>
                                            </Field>
                                            <ErrorMessage
                                                name='doc'
                                                component='div'
                                                style={{
                                                    color: 'red',
                                                }}
                                            />
                                        </div>

                                        <hr className='my-4 payment-field-border'/>

                                        <div className='form-outline'>
                                            <Field
                                                type='number'
                                                name='documentNumber'
                                                id='formNameOnCard'
                                                className='form-control'
                                                placeholder='00000000000'
                                            />
                                            <label
                                                className='form-label'
                                                htmlFor='formNameOnCard'
                                            >
                                                {t('paymentfield-page-cpf', {
                                                    defaultValue: 'CPF or CNPJ of the card owner',
                                                })}
                                            </label>
                                            <ErrorMessage
                                                name='documentNumber'
                                                component='div'
                                                style={{
                                                    color: 'red',
                                                }}
                                            />
                                        </div>

                                        <hr className='my-4 payment-field-border'/>

                                        <div className='form-outline mb-4'>
                                            <Field
                                                type='number'
                                                name='phoneNumber'
                                                id='form6Example3'
                                                className='form-control'
                                                placeholder='XX XXXX-XXXX'
                                            />
                                            <label
                                                className='form-label'
                                                htmlFor='form6Example3'
                                            >
                                                {t('paymentfield-page-telefone', {
                                                    defaultValue: 'Phone Number',
                                                })}
                                            </label>
                                            <ErrorMessage
                                                name='phoneNumber'
                                                component='div'
                                                style={{
                                                    color: 'red',
                                                }}
                                            />
                                        </div>

                                        <hr className='my-4 payment-field-border'/>

                                        <h5 className='mb-4'>
                                            {t('paymentfield-page-cobranca', {
                                                defaultValue: 'Billing Address',
                                            })}
                                        </h5>

                                        <div className='row mb-4'>
                                            <div className='col'>
                                                <div className='form-outline'>
                                                    <Field
                                                        type='text'
                                                        name='street'
                                                        id='formCardNumber'
                                                        className='form-control'
                                                        placeholder='Street'
                                                    />
                                                    <label
                                                        className='form-label'
                                                        htmlFor='formCardNumber'
                                                    >
                                                        {t('paymentfield-page-street', {
                                                            defaultValue: 'Street',
                                                        })}
                                                    </label>
                                                    <ErrorMessage
                                                        name='street'
                                                        component='div'
                                                        style={{
                                                            color: 'red',
                                                        }}
                                                    />
                                                </div>
                                            </div>

                                            <div className='col'>
                                                <div className='form-outline'>
                                                    <Field
                                                        type='number'
                                                        name='streetNumber'
                                                        id='formStreetNumber'
                                                        className='form-control'
                                                        placeholder='Street Number'
                                                    />
                                                    <label
                                                        className='form-label'
                                                        htmlFor='formStreetNumber'
                                                    >
                                                        {t('paymentfield-page-streetnumber', {
                                                            defaultValue: 'Street Number',
                                                        })}
                                                    </label>
                                                    <ErrorMessage
                                                        name='streetNumber'
                                                        component='div'
                                                        style={{
                                                            color: 'red',
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='row mb-4'>
                                            <div className='col'>
                                                <div className='form-outline'>
                                                    <Field
                                                        type='text'
                                                        name='addressComplementary'
                                                        id='formAddressComplementary'
                                                        className='form-control'
                                                        placeholder='Address Complementary'
                                                    />
                                                    <label
                                                        className='form-label'
                                                        htmlFor='formAddressComplementary'
                                                    >
                                                        {t('paymentfield-page-complementary', {
                                                            defaultValue: 'Address Complementary',
                                                        })}
                                                    </label>
                                                    <ErrorMessage
                                                        name='addressComplementary'
                                                        component='div'
                                                        style={{
                                                            color: 'red',
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className='col'>
                                                <div className='form-outline'>
                                                    <Field
                                                        type='text'
                                                        name='neighborhood'
                                                        id='formCardNumber'
                                                        className='form-control'
                                                        placeholder='Nome do bairro'
                                                    />
                                                    <label
                                                        className='form-label'
                                                        htmlFor='formCardNumber'
                                                    >
                                                        {t('paymentfield-page-bairro', {
                                                            defaultValue: 'Neighborhood',
                                                        })}
                                                    </label>
                                                    <ErrorMessage
                                                        name='neighborhood'
                                                        component='div'
                                                        style={{
                                                            color: 'red',
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='row mb-4'>
                                            <div className='col'>
                                                <div className='form-outline'>
                                                    <Field
                                                        type='text'
                                                        name='city'
                                                        id='formCity'
                                                        className='form-control'
                                                        placeholder='City'
                                                    />
                                                    <label
                                                        className='form-label'
                                                        htmlFor='formCity'
                                                    >
                                                        {t('paymentfield-page-cityname', {
                                                            defaultValue: 'City',
                                                        })}
                                                    </label>
                                                    <ErrorMessage
                                                        name='city'
                                                        component='div'
                                                        style={{
                                                            color: 'red',
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className='col'>
                                                <div className='form-outline'>
                                                    <Field
                                                        type='text'
                                                        name='state'
                                                        id='formState'
                                                        className='form-control'
                                                        placeholder='State'
                                                    />
                                                    <label
                                                        className='form-label'
                                                        htmlFor='formState'
                                                    >
                                                        {t('paymentfield-page-statename', {
                                                            defaultValue: 'State',
                                                        })}
                                                    </label>
                                                    <ErrorMessage
                                                        name='state'
                                                        component='div'
                                                        style={{
                                                            color: 'red',
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className='col'>
                                                <div className='form-outline'>
                                                    <Field
                                                        type='text'
                                                        name='zipCode'
                                                        id='formZipCode'
                                                        className='form-control'
                                                        placeholder='Zip Code'
                                                    />
                                                    <label
                                                        className='form-label'
                                                        htmlFor='formZipCode'
                                                    >
                                                        {t('paymentfield-page-zipcode', {
                                                            defaultValue: 'Zip Code',
                                                        })}
                                                    </label>
                                                    <ErrorMessage
                                                        name='zipCode'
                                                        component='div'
                                                        style={{
                                                            color: 'red',
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </Form>)}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>)}
    </>);
};

export default PaymentField;
