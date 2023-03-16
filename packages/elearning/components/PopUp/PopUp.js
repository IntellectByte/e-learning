import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const PopUp = ({ onClose }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [nameError, setNameError] = useState('');

    const handleNameChange = (e) => {
        const inputName = e.target.value;
        setName(inputName);

        // Validate that the input name doesn't contain special characters
        const namePattern = /^[a-zA-Z\s]+$/;
        if (!namePattern.test(inputName)) {
            setNameError(
                'Please enter a valid name without special characters.'
            );
        } else {
            setNameError('');
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        if (!e.target.checkValidity() || nameError) {
            e.preventDefault();
            toast.error('Please fill out all fields correctly.');
            return;
        }
        toast.success('Email submitted successfully!');
        setTimeout(() => {
            onClose();
        }, 2000);
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
                    <form
                        onSubmit={handleSubmit}
                        action='https://escolasorvete.us17.list-manage.com/subscribe/post'
                        method='POST'
                    >
                        <input
                            type='hidden'
                            name='u'
                            value='861af04770adfc24846742c1c'
                        />
                        <input type='hidden' name='id' value='be824b0afb' />
                        <label>
                            Digite seu nome:
                            <input
                                type='text'
                                name='MERGE1'
                                value={name}
                                onChange={handleNameChange}
                                required
                            />
                        </label>
                        {nameError && (
                            <p style={{ color: 'red' }}>{nameError}</p>
                        )}
                        <label>
                            Digite seu e-mail:
                            <input
                                type='email'
                                name='EMAIL'
                                value={email}
                                onChange={handleEmailChange}
                                required
                            />
                        </label>
                        <button type='submit'>Quero o cupom</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PopUp;
