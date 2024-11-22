import '../Register/Register.scss';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {loginUser, registerUser} from "../../store/reducers/user.js";
import { Navigate } from "react-router-dom";

const Login = () => {

    const {
        register,
        handleSubmit,
        formState: {errors },
        reset,
        watch,
        trigger,
        getValues
    } = useForm({ mode: "onBlur" });

    const {user,status,error} = useSelector(s => s.user)

    const dispatch = useDispatch()

    const submitForm = (data) => {
        dispatch(loginUser(data))
    }

    if (status === 'success') {
        return <Navigate to='/'/>
    }
    return (
        <section className='register'>
            <div className="container">
                <form id="register-form" className="register__form" onSubmit={handleSubmit(submitForm)}>
                    <h1 className='register__title'>Авторизацию</h1>
                    <h3 className='register__subtitle'>Чтобы заказать товары пройдите Войдите в аккаунт</h3>

                    <input
                        {...register('email')}
                        placeholder='Эл.почта'
                        type="email"
                        autoComplete='email'
                    />
                    <p className='register__error'>
                        {/*{errors.email && errors.email?.message}*/}
                    </p>

                    <div className='register__block'>
                        <input
                            {...register('password')}
                            placeholder='Придумайте пароль'
                            type={'password'}
                            autoComplete="new-password"
                        />
                        <p className='register__error'>
                            {/*{errors.password && errors.password?.message}*/}
                        </p>
                    </div>
                    <button type="submit">Войти</button>
                    <p>
                        Первый раз? <a href="/Login">Пройдите Регистрацию</a>
                    </p>
                    {/*{status === 'error' ? <p className="register__error">Ошибка при регистрации</p> :*/}
                    {/*    // status === 'success' ? <p className="register__error" style={{ color: 'green' }}>Успешная регистрация</p> :*/}
                    {/*    //     status === 'loading' ? <p className="register__error" style={{ color: 'yellow' }}>Загрузка обработки данных</p> : ''}*/}
                </form>
            </div>
        </section>
    );
};

export default Login;
