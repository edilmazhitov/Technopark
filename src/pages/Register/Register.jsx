import React from 'react';
import './Register.scss';

const Register = () => {
    return (
        <section className='register'>
            <div className="container">
                <form className='register__form'>
                    <h1 className="register__title">
                        Регистрация
                    </h1>
                    <input type="email"/>
                    <input type="text"/>
                    <input type="number"/>
                    <button>Сгенерировать пароль</button>
                    <div className="register__block">
                        <input type="password"/>
                    </div>
                    <div className="register__block">
                        <input type="password"/>
                    </div>

                    <button type="submit">Зарегистрироваться</button>
                </form>
            </div>
        </section>
    );
};

export default Register;