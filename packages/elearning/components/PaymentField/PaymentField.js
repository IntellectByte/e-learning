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
                                        <input
                                            type='text'
                                            id='form6Example3'
                                            className='form-control'
                                            placeholder='Seu nome'
                                        />
                                        <label
                                            className='form-label'
                                            for='form6Example3'
                                        >
                                            Nome
                                        </label>
                                    </div>

                                    <div className='form-outline mb-4'>
                                        <input
                                            type='text'
                                            id='form6Example3'
                                            className='form-control'
                                            placeholder='XX XXXX-XXXX'
                                        />
                                        <label
                                            className='form-label'
                                            for='form6Example3'
                                        >
                                            Telefone
                                        </label>
                                    </div>

                                    <div className='form-outline mb-4'>
                                        <input
                                            type='email'
                                            id='form6Example4'
                                            className='form-control'
                                            placeholder='Seu e-mail'
                                        />
                                        <label
                                            className='form-label'
                                            for='form6Example4'
                                        >
                                            E-mail
                                        </label>
                                    </div>

                                    <div className='form-outline mb-4'>
                                        <input
                                            type='text'
                                            id='form6Example5'
                                            className='form-control'
                                            placeholder='DD/MM/AAAA'
                                        />
                                        <label
                                            className='form-label'
                                            for='form6Example5'
                                        >
                                            Data de nascimento
                                        </label>
                                    </div>

                                    {/* <div className='form-outline mb-4'>
                                        <input
                                            type='number'
                                            id='form6Example6'
                                            className='form-control'
                                        />
                                        <label
                                            className='form-label'
                                            for='form6Example6'
                                        >
                                            Phone
                                        </label>
                                    </div> */}

                                    <hr className='my-4' />

                                    <h5 className='mb-4'>Dados do cartão</h5>

                                    <div className='row mb-4'>
                                        <div className='col'>
                                            <div className='form-outline'>
                                                <input
                                                    type='text'
                                                    id='formNameOnCard'
                                                    className='form-control'
                                                    placeholder='000.000.000-00'
                                                />
                                                <label
                                                    className='form-label'
                                                    for='formNameOnCard'
                                                >
                                                    CPF ou CNPJ do dono do
                                                    cartão
                                                </label>
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <div className='form-outline'>
                                                <input
                                                    type='text'
                                                    id='formCardNumber'
                                                    className='form-control'
                                                    placeholder='0000.0000.0000.0000'
                                                />
                                                <label
                                                    className='form-label'
                                                    for='formCardNumber'
                                                >
                                                    Número do cartão
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='row mb-4'>
                                        <div className='col-3'>
                                            <div className='form-outline'>
                                                <input
                                                    type='text'
                                                    id='formExpiration'
                                                    className='form-control'
                                                    placeholder='MM/AA'
                                                />
                                                <label
                                                    className='form-label'
                                                    for='formExpiration'
                                                >
                                                    Validade do cartão
                                                </label>
                                            </div>
                                        </div>
                                        <div className='col-3'>
                                            <div className='form-outline'>
                                                <input
                                                    type='text'
                                                    id='formCVV'
                                                    className='form-control'
                                                    placeholder='CVV'
                                                />
                                                <label
                                                    className='form-label'
                                                    for='formCVV'
                                                >
                                                    Código de segurança CVV
                                                </label>
                                            </div>
                                        </div>
                                        <div className='col-6'>
                                            <div className='form-outline'>
                                                <input
                                                    type='text'
                                                    id='formCVV'
                                                    className='form-control'
                                                    placeholder='Nome impresso no cartão'
                                                />
                                                <label
                                                    className='form-label'
                                                    for='formCVV'
                                                >
                                                    Nome impresso no cartão
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <hr className='my-4' />

                                    <h5 className='mb-4'>
                                        Endereço de cobrança
                                    </h5>

                                    <div className='row mb-4'>
                                        <div className='col'>
                                            <div className='form-outline'>
                                                <input
                                                    type='text'
                                                    id='formNameOnCard'
                                                    className='form-control'
                                                    placeholder='CEP do Endereço'
                                                />
                                                <label
                                                    className='form-label'
                                                    for='formNameOnCard'
                                                >
                                                    CEP
                                                </label>
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <div className='form-outline'>
                                                <input
                                                    type='text'
                                                    id='formCardNumber'
                                                    className='form-control'
                                                    placeholder='Rua, logradouro ou avenida'
                                                />
                                                <label
                                                    className='form-label'
                                                    for='formCardNumber'
                                                >
                                                    Endereço
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
                                                    placeholder='Número do endereço'
                                                />
                                                <label
                                                    className='form-label'
                                                    for='formNameOnCard'
                                                >
                                                    Número do endereço
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
                                                />
                                                <label
                                                    className='form-label'
                                                    for='formCardNumber'
                                                >
                                                    Bairro
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
                                                    placeholder='Casa, apartamento ou bloco'
                                                />
                                                <label
                                                    className='form-label'
                                                    for='formNameOnCard'
                                                >
                                                    Complemento (Opcional)
                                                </label>
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <div className='form-outline'>
                                                <input
                                                    type='text'
                                                    id='formCardNumber'
                                                    className='form-control'
                                                    placeholder='Nome da cidade'
                                                />
                                                <label
                                                    className='form-label'
                                                    for='formCardNumber'
                                                >
                                                    Cidade
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='form-outline mb-4'>
                                        <label for='lang'>Estado</label>
                                        <select name='languages' id='lang'>
                                            <option value='Acre'>Acre</option>
                                            <option value='Alagoas'>
                                                Alagoas
                                            </option>
                                            <option value='Amapá'>Amapá</option>
                                            <option value='Amazonas'>
                                                Amazonas
                                            </option>
                                            <option value='Bahía'>Bahía</option>
                                            <option value='Ceará'>Ceará</option>
                                            <option value='Espírito Santo'>
                                                Espírito Santo
                                            </option>
                                            <option value='Goiás'>Goiás</option>
                                            <option value='Maranhao'>
                                                Maranhao
                                            </option>
                                            <option value='Mato Grosso'>
                                                Mato Grosso
                                            </option>
                                            <option value='Mato Grosso del Sur'>
                                                Mato Grosso del Sur
                                            </option>
                                            <option value='Minas Gerais'>
                                                Minas Gerais
                                            </option>
                                            <option value='Estado de Pará'>
                                                Estado de Pará
                                            </option>
                                            <option value='Paraíba'>
                                                Paraíba
                                            </option>

                                            <option value='Paraná'>
                                                Paraná
                                            </option>
                                            <option value='Estado de Pernambuco'>
                                                Estado de Pernambuco
                                            </option>
                                            <option value='Piauí'>Piauí</option>
                                            <option value='Río de Janeiro'>
                                                Río de Janeiro
                                            </option>
                                            <option value='Río Grande del Norte'>
                                                Río Grande del Norte
                                            </option>
                                            <option value='Río Grande del Sur'>
                                                Río Grande del Sur
                                            </option>
                                            <option value='Rondonia'>
                                                Rondonia
                                            </option>
                                            <option value='Roraima'>
                                                Roraima
                                            </option>
                                            <option value='Santa Catarina'>
                                                Santa Catarina
                                            </option>
                                            <option value='Sao Paulo'>
                                                Sao Paulo
                                            </option>

                                            <option value='Sergipe'>
                                                Sergipe
                                            </option>
                                            <option value='Tocantins'>
                                                Tocantins
                                            </option>
                                            <option value='Distrito Federal'>
                                                Distrito Federal
                                            </option>
                                        </select>
                                    </div>

                                    <div className='btn-payment'>
                                        <button
                                            className='btn button-payment'
                                            type='submit'
                                        >
                                            Continue to checkout
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* <div class='col-md-4 mb-4'>
                        <div class='card mb-4'>
                            <div class='card-header py-3'>
                                <h5 class='mb-0'>Summary</h5>
                            </div>
                            <div class='card-body'>
                                <ul class='list-group list-group-flush'>
                                    <li class='list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0'>
                                        Products
                                        <span>$53.98</span>
                                    </li>
                                    <li class='list-group-item d-flex justify-content-between align-items-center px-0'>
                                        Shipping
                                        <span>Gratis</span>
                                    </li>
                                    <li class='list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3'>
                                        <div>
                                            <strong>Total amount</strong>
                                            <strong>
                                                <p class='mb-0'>
                                                    (including VAT)
                                                </p>
                                            </strong>
                                        </div>
                                        <span>
                                            <strong>$53.98</strong>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>
        </div>
    );
};

export default PaymentField;
