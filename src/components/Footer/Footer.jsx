import React from 'react';
import './Footer.scss';
import { FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { SiOdnoklassniki } from "react-icons/si";
import { IoLogoVk } from "react-icons/io5";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__line"></div>
            <div className="container">
                <div className="footer__block">
                    <div className="footer__contact">
                        <h2 className="footer__contact-title">
                            Контакты
                        </h2>
                        <p className="footer__contact-address">
                            г. Москва, пос. Московский, кв-л <br/>
                            32, влад. 17А стр. 1
                        </p>
                        <a className='footer__contact-number' href="tel:88001005588">8 (800) 100-55-88</a> <br/>
                        <button className="footer__contact-btn">Обратная связь</button>

                        <ul className="footer__contact-social">
                            <li className="footer__contact-social-item">
                                <a href="" className="footer__social-link">
                                    <FaTelegramPlane className='footer__social-icons'/>
                                </a>
                            </li>
                            <li className="footer__contact-social-item">
                                <a href="" className="footer__social-link">
                                    <SiOdnoklassniki className='footer__social-icons'/>
                                </a>
                            </li>
                            <li className="footer__contact-social-item">
                                <a href="" className="footer__social-link">
                                    <IoLogoVk className='footer__social-icons'/>
                                </a>
                            </li>
                            <li className="footer__contact-social-item">
                                <a href="" className="footer__social-link">
                                    <FaYoutube className='footer__social-icons'/>
                                </a>
                            </li>
                        </ul>

                    </div>
                    <div className="footer__company">
                        <h2 className="footer__company-title">
                            Компания Технопарк
                        </h2>
                        <ul className="footer__company-list">
                            <li className="footer__company-list-item">
                                <a href="" className="footer__company-link">
                                    Компания
                                </a>
                            </li>
                            <li className="footer__company-list-item">
                                <a href="" className="footer__company-link">
                                    Карьера в Технопарке
                                    <span></span>
                                </a>
                            </li>
                            <li className="footer__company-list-item">
                                <a href="" className="footer__company-link">
                                    Об интернет-магазине
                                </a>
                            </li>
                            <li className="footer__company-list-item">
                                <a href="" className="footer__company-link">
                                    Контакты
                                </a>
                            </li>
                            <li className="footer__company-list-item">
                                <a href="" className="footer__company-link">
                                    Магазины
                                </a>
                            </li>
                            <li className="footer__company-list-item">
                                <a href="" className="footer__company-link">
                                    Для бизнеса
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__supports">
                        <h2 className="footer__supports-title">Помощь и поддержка</h2>
                        <ul className="footer__supports-list">
                            <li className="footer__supports-list-item">
                                <a href="" className="footer__supports-link">
                                    Доставка
                                </a>
                            </li>
                            <li className="footer__supports-list-item">
                                <a href="" className="footer__supports-link">
                                    Способы оплаты
                                </a>
                            </li>
                            <li className="footer__supports-list-item">
                                <a href="" className="footer__supports-link">
                                    Банковская карта
                                </a>
                            </li>
                            <li className="footer__supports-list-item">
                                <a href="" className="footer__supports-link">
                                    Установка техники
                                </a>
                            </li>
                            <li className="footer__supports-list-item">
                                <a href="" className="footer__supports-link">
                                    Запасные части
                                </a>
                            </li>
                            <li className="footer__supports-list-item">
                                <a href="" className="footer__supports-link">
                                    Техно.Блог
                                </a>
                            </li>
                            <li className="footer__supports-list-item">
                                <a href="" className="footer__supports-link">
                                    Конфиденциальность
                                </a>
                            </li>
                            <li className="footer__supports-list-item">
                                <a href="" className="footer__supports-link">
                                    Отслеживаемые товары
                                </a>
                            </li>
                            <li className="footer__supports-list-item">
                                <a href="" className="footer__supports-link">
                                    Trade-In
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__information">
                        <div className="footer__wrapper"></div>
                        <ul className="footer__information-list">
                            <li className="footer__information-list-item">
                                <a href="" className="footer__information-link">
                                    Самовывоз
                                </a>
                            </li>
                            <li className="footer__information-list-item">
                                <a href="" className="footer__information-link">
                                    Рассрочка и кредиты
                                </a>
                            </li>
                            <li className="footer__information-list-item">
                                <a href="" className="footer__information-link">
                                    Обмен и возврат
                                </a>
                            </li>
                            <li className="footer__information-list-item">
                                <a href="" className="footer__information-link">
                                    Техники BORK
                                </a>
                            </li>
                            <li className="footer__information-list-item">
                                <a href="" className="footer__information-link">
                                    Гарантии
                                </a>
                            </li>
                            <li className="footer__information-list-item">
                                <a href="" className="footer__information-link">
                                    О персональных данных
                                </a>
                            </li>
                            <li className="footer__information-list-item">
                                <a href="" className="footer__information-link">
                                    Договор офере
                                </a>
                            </li>
                            <li className="footer__information-list-item">
                                <a href="" className="footer__information-link">
                                    Карта сайта
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__privileges">
                        <h2 className="footer__privileges-title">
                            Ваши привилегии
                        </h2>
                        <ul className="footer__privileges-list">
                            <li className="footer__privileges-list-item">
                                <a href="" className='footer__privileges-link'>
                                    Акции
                                </a>
                            </li>
                            <li className="footer__privileges-list-item">
                                <a href="" className='footer__privileges-link'>
                                    Бонусная программа
                                </a>
                            </li>
                            <li className="footer__privileges-list-item">
                                <a href="" className='footer__privileges-link'>
                                    Баланс бонусной карты
                                </a>
                            </li>
                            <li className="footer__privileges-list-item">
                                <a href="" className='footer__privileges-link'>
                                    VIP сервис
                                </a>
                            </li>
                            <li className="footer__privileges-list-item">
                                <a href="" className='footer__privileges-link'>
                                    Подарочные карты
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer__line-two"></div>
            <div className="container">
                <div className="footer__interaction">
                    <div className="footer__interaction-left">
                        <h2 className="footer__interaction-title">Подпишитесь на рассылку</h2>
                        <p className="footer__interaction-desc">Будьте в курсе лучших предложений</p>
                    </div>
                    <form className="footer__interaction-form">

                        <input type="email" placeholder='Электронная почта' required/>
                        <button type='submit'>Подписаться</button>
                    </form>
                    <div className="footer__interaction-right">
                        <img src='https://cdn.technopark.ru/source/custom_images/newsite/footer/yandex-rating.svg' alt=""/>
                    </div>
                </div>
                <p className='license'>© 2006-2024 Technopark.ru</p>
            </div>
        </footer>
    );
};

export default Footer;