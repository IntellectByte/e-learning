import React, { useState } from 'react';

const PopUp = ({ onClose }) => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit form logic goes here
        console.log(`Submitted email: ${email}`);
        onClose();
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
                    Digite seu e-mail para receber um código de cupom:
                    <input
                        type='email'
                        value={email}
                        onChange={handleEmailChange}
                    />
                </label>
                <button type='submit'>Quero o cupom</button>
            </form>
        </div>
    );
};

export default PopUp;
