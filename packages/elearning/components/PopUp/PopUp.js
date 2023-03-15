import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const PopUp = ({ onClose }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailValid, setEmailValid] = useState(true);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        const inputEmail = e.target.value;
        setEmail(inputEmail);

        // Valida que el formato de email sea correcto
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

        setEmailValid(emailPattern.test(inputEmail));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(
                'https://escolasorvete.us17.list-manage.com/subscribe/post?u=861af04770adfc24846742c1c&amp;id=be824b0afb&amp;f_id=005521e0f0',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email_address: email,
                        merge_fields: {
                            FNAME: name,
                        },
                        status: 'subscribed',
                    }),
                }
            );
            if (response.ok) {
                console.log('Email successfully submitted to Mailchimp');
                onClose();
                toast.success('Email submitted successfully!');
            } else {
                console.log('Failed to submit email to Mailchimp');
            }
        } catch (error) {
            console.log('Error submitting email to Mailchimp', error);
            toast.error('Failed to submit email. Please try again later.');
        }
    };

    return (
        <div className='popup'>
            <button className='popup__close' onClick={onClose}>
                X
            </button>
            <div className='popup-content'>
                <img
                    className='popup-image'
                    src='/sorvete-logo.png'
                    alt='Ice cream course'
                />
                <div>
                    <h2 className='color-changing'>Seu dia de sorte</h2>
                    <p>
                        Subscreva a nossa newsletter e obtenha um código de{' '}
                        <span>desconto de 20%</span>
                    </p>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Digite seu nome:
                            <input
                                type='text'
                                value={name}
                                onChange={handleNameChange}
                            />
                        </label>
                        <label>
                            Digite seu e-mail:
                            <input
                                type='email'
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </label>
                        {!emailValid && (
                            <p style={{ color: 'red' }}>
                                Por favor insira um endereço de e-mail válido.
                            </p>
                        )}
                        <button
                            type='submit'
                            onClick={onClose}
                            disabled={!name || !email || !emailValid}
                        >
                            Quero o cupom
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PopUp;
