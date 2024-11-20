import { useState, useEffect } from 'react';
import './Register.scss';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../store/reducers/user.js";

const Register = () => {
    const [userId, setUserId] = useState(1);
    const { register, handleSubmit, formState: { errors }, reset, watch, trigger, getValues } = useForm({ mode: "onBlur" });
    const dispatch = useDispatch();
    const { status, error } = useSelector(state => state.user);

    const submitForm = (data) => {
        const { email, name, password } = data;

        const newUserId = userId;
        const newUser = {
            id: newUserId,
            email,
            login: name,
            password,
            balance: 0
        };

        dispatch(registerUser(newUser));
        setUserId(userId + 1);
    };


    useEffect(() => {
        if (status === 'success') {
            reset();
        }
    }, [status, reset]);

    useEffect(() => {
        if (status === 'error') {
            console.log("Ошибка регистрации:", error);
        }
    }, [status, error]);

    useEffect(() => {
        const subscription = watch((_, { name }) => {
            if (name === 'password') {
                trigger('confirmPassword');
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, trigger]);

    return (
        <section className='register'>
            <div className="container">
                <form id="register-form" className="register__form" onSubmit={handleSubmit(submitForm)}>
                    <h1 className='register__title'>Регистрация</h1>
                    <h3 className='register__subtitle'>Чтобы заказать товары пройдите Регистрацию</h3>

                    <input
                        {...register('email', {
                            required: {
                                message: 'Эл. почта обязательна',
                                value: true
                            },
                            minLength: {
                                message: 'Минимум 10 символов',
                                value: 10
                            },
                            pattern: {
                                message: 'Неправильный формат email',
                                value: /^[^ ]+@[^ ]+\.[a-z]{2,5}$/
                            }
                        })}
                        placeholder='Эл.почта'
                        type="email"
                        autoComplete='email'
                    />
                    <p className='register__error'>
                        {errors.email && errors.email?.message}
                    </p>

                    <input
                        {...register('name', {
                            required: {
                                message: 'Имя и фамилия обязательны',
                                value: true
                            },
                            minLength: {
                                value: 3,
                                message: "Минимум 3 символа"
                            },
                            pattern: {
                                value: /^[A-Za-zА-Яа-яЁё]+(?:\s+[A-Za-zА-Яа-яЁё]+)+$/,
                                message: "Имя и фамилия должны состоять из букв и хотя бы из двух слов"
                            }
                        })}
                        placeholder='Имя и Фамилия'
                        type="text"
                        autoComplete='name'
                    />
                    <p className='register__error'>
                        {errors.name && errors.name?.message}
                    </p>

                    <button type="button" className='register__btn'>Сгенерировать пароль</button>

                    <div className='register__block'>
                        <input
                            {...register('password', {
                                required: {
                                    message: "Пароль обязателен",
                                    value: true
                                },
                                pattern: {
                                    value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g,
                                    message: 'Пароль должен содержать минимум 8 символов, заглавную букву, число!'
                                }
                            })}
                            placeholder='Придумайте пароль'
                            type={'password'}
                            autoComplete="new-password"
                        />
                        <p className='register__error'>
                            {errors.password && errors.password?.message}
                        </p>
                    </div>

                    <div className='register__block'>
                        <input
                            {...register('confirmPassword', {
                                required: {
                                    message: "Подтвердите пароль",
                                    value: true
                                },
                                validate: value =>
                                    value === getValues('password') || "Пароли не совпадают"
                            })}
                            placeholder='Повторите пароль'
                            type='password'
                            autoComplete="new-password"
                        />
                        <p className='register__error'>
                            {errors.confirmPassword && errors.confirmPassword?.message}
                        </p>
                    </div>

                    <button type="submit" disabled={status === 'loading'}>Зарегистрироваться</button>
                    <p>
                        Не первый раз? <a href="/Login">Войти</a>
                    </p>
                    {status === 'error' ? <p className="register__error">Ошибка при регистрации</p> :
                        status === 'success' ? <p className="register__error" style={{ color: 'green' }}>Успешная регистрация</p> :
                            status === 'loading' ? <p className="register__error" style={{ color: 'yellow' }}>Загрузка обработки данных</p> : ''}
                </form>
            </div>
        </section>
    );
};

export default Register;
