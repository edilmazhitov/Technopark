import React from 'react';
import './Navbar.scss';
import { FaLocationPin } from "react-icons/fa6";


const Navbar = () => {

    const handleClick = () => {
        alert('Клик по диву!');
    };
    return (
        <section className='navbar'>
            <div className="container">
                <div className="navbar__block">
                    <div className="navbar__left">
                        <button className="navbar__location-btn">
                            <FaLocationPin />
                            Москва
                        </button>
                        <nav>
                            <ul className="navbar__list">
                                <li className="navbar__item">
                                    <a href="" className="navbar__link">Доставка</a>
                                </li>
                                <li className="navbar__item">
                                    <a href="" className="navbar__link">Магазины</a>
                                </li>
                                <li className="navbar__item">
                                    <a href="" className="navbar__link">
                                        <span></span>
                                        Акции
                                    </a>
                                </li>
                                <li className="navbar__item">
                                    <a href="" className="navbar__link">Техно.Блог</a>
                                </li>
                                <li className="navbar__item">
                                    <a href="" className="navbar__link">Подарочные карты</a>
                                </li>
                                <li className="navbar__item">
                                    <a href="" className="navbar__link">BORK</a>
                                </li>
                                <li className="navbar__item">
                                    <a href="" className="navbar__link">Для Бизнеса</a>
                                </li>
                                <li className="navbar__item">
                                    <a href="" className="navbar__link">
                                        <span></span>
                                        Где мой заказ?
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="navbar__right">
                        <div role='button'
                             onClick={handleClick}
                             onKeyDown={(event) => {
                                 if (event.key === 'Enter' || event.key === ' ') {
                                     event.preventDefault();
                                     handleClick();
                                 }
                             }}
                             className="language__block">
                            <p>Ru</p>
                        </div>
                        <div role='button'
                             onClick={handleClick}
                             onKeyDown={(event) => {
                                 if (event.key === 'Enter' || event.key === ' ') {
                                     event.preventDefault();
                                     handleClick();
                                 }
                             }}
                             className="language__block">
                            <p>En</p>
                        </div>
                    </div>
                </div>

            </div>
            {/*<div className="navbar__line"></div>*/}
        </section>
    );
};

export default Navbar;