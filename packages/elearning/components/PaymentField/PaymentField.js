import React from 'react';

const PaymentField = () => {
    return (
        <div className='container'>
            <section>
                <div className='row'>
                    <div className='col-md-8 mb-4'>
                        <div className='card mb-4'>
                            <div className='card-header py-3'>
                                <h5 className='mb-0'>Seus Dados</h5>
                            </div>
                            <div className='card-body'>
                                <form>
                                    <div className='form-outline mb-4'>
                                        <label for='doc'>Tipo de Doc</label>
                                        <select name='doc' id='doc'>
                                            <option value='CPF'>CPF</option>
                                            <option value='CNPJ '>CNPJ</option>
                                        </select>
                                    </div>

                                    <hr className='my-4' />

                                    <div className='form-outline'>
                                        <input
                                            type='number'
                                            id='formNameOnCard'
                                            className='form-control'
                                            placeholder='000.000.000-00'
                                            required
                                        />
                                        <label
                                            className='form-label'
                                            for='formNameOnCard'
                                        >
                                            CPF ou CNPJ do dono do cartão
                                        </label>
                                    </div>

                                    <hr className='my-4' />

                                    <div className='form-outline mb-4'>
                                        <input
                                            type='number'
                                            id='form6Example3'
                                            className='form-control'
                                            placeholder='XX XXXX-XXXX'
                                            required
                                        />
                                        <label
                                            className='form-label'
                                            for='form6Example3'
                                        >
                                            Telefone
                                        </label>
                                    </div>

                                    <hr className='my-4' />

                                    <h5 className='mb-4'>
                                        Endereço de cobrança
                                    </h5>

                                    <div className='row mb-4'>
                                        <div className='col'>
                                            <div className='form-outline'>
                                                <input
                                                    type='number'
                                                    id='formNameOnCard'
                                                    className='form-control'
                                                    placeholder='Street Number'
                                                    required
                                                />
                                                <label
                                                    className='form-label'
                                                    for='formNameOnCard'
                                                >
                                                    Street Number
                                                </label>
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <div className='form-outline'>
                                                <input
                                                    type='text'
                                                    id='formCardNumber'
                                                    className='form-control'
                                                    placeholder='Street'
                                                    required
                                                />
                                                <label
                                                    className='form-label'
                                                    for='formCardNumber'
                                                >
                                                    Street
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='row mb-4'>
                                        <div className='col'>
                                            <div className='form-outline'>
                                                <input
                                                    type='text'
                                                    id='formNameOnCard'
                                                    className='form-control'
                                                    placeholder='Address Complementary'
                                                    required
                                                />
                                                <label
                                                    className='form-label'
                                                    for='formNameOnCard'
                                                >
                                                    Address Complementary
                                                </label>
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <div className='form-outline'>
                                                <input
                                                    type='text'
                                                    id='formCardNumber'
                                                    className='form-control'
                                                    placeholder='Nome do bairro'
                                                    required
                                                />
                                                <label
                                                    className='form-label'
                                                    for='formCardNumber'
                                                >
                                                    Bairro (Neighborhood)
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='row mb-4'>
                                        <div className='col'>
                                            <div className='form-outline'>
                                                <input
                                                    type='text'
                                                    id='formNameOnCard'
                                                    className='form-control'
                                                    placeholder='City'
                                                    required
                                                />
                                                <label
                                                    className='form-label'
                                                    for='formNameOnCard'
                                                >
                                                    City
                                                </label>
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <div className='form-outline'>
                                                <input
                                                    type='text'
                                                    id='formCardNumber'
                                                    className='form-control'
                                                    placeholder='State'
                                                    required
                                                />
                                                <label
                                                    className='form-label'
                                                    for='formCardNumber'
                                                >
                                                    State
                                                </label>
                                            </div>
                                        </div>

                                        <div className='col'>
                                            <div className='form-outline'>
                                                <input
                                                    type='text'
                                                    id='formCardNumber'
                                                    className='form-control'
                                                    placeholder='Zip Code'
                                                    required
                                                />
                                                <label
                                                    className='form-label'
                                                    for='formCardNumber'
                                                >
                                                    Zip Code
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PaymentField;
