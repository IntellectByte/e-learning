import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const PopUp = ({ onClose }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    // Mailchimp throwing CORS error
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
            <h2>Seu dia de sorte</h2>
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
                <button type='submit' onClick={onClose}>
                    Quero o cupom
                </button>
            </form>
        </div>
    );
};

export default PopUp;
