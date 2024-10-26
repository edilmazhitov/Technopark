import React from 'react';
import './Header.scss';
import Logo from '../../assets/Logo.ico'
import { MdHelpCenter } from "react-icons/md";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { LiaSignalSolid } from "react-icons/lia";
import BurgerMenu from "../BurgerMenu/BurgerMenu.jsx";
import SearchBlock from "../SearhBlock/SearchBlock.jsx";

import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <div className="header__block">
                    <div className="header__left">
                        <img src={Logo} className='header__logo' alt=""/>
                        <div role='button' className="header__catalog">
                            <BurgerMenu/>
                            <span>Каталог</span>
                        </div>
                        <SearchBlock/>
                    </div>

                    <ul className='header__list'>
                        <li>
                            <a href="" className="header__link">
                            <LiaSignalSolid className='header__link-icons'/>
                                <p>Сравнение</p>

                            </a>
                        </li>
                        <li>
                            <a href="" className="header__link">
                                <AiFillHeart className='header__link-icons'/>
                                <p>Избранное</p>

                            </a>
                        </li>
                        <li>
                            <a href="" className="header__link">
                                <MdOutlineLocalGroceryStore className='header__link-icons'/>
                                <p>Корзина</p>
                            </a>
                        </li>
                        <li>
                            <Link to='/Login' className="header__link">
                                <CiUser className='header__link-icons'/>
                                <p>Войти</p>

                            </Link>
                        </li>
                    </ul>
                    <div className="number">
                        <div className="number__block">
                            <div className="number__order">
                                <a href="tel:88001008899">
                                    8 (800) 100-88-99
                                </a>
                                <p>Оформить заказ</p>
                            </div>
                            <div className="number__support">
                                <a href="tel:88001005588">
                                    8 (800) 100-55-88
                                </a>
                                <p>
                                    Служба поддержки
                                </p>
                            </div>
                        </div>
                    </div>
                    <div role='button' className="header__info">
                        <MdHelpCenter className='header__help'/>
                    </div>
                </div>

            </div>
        </header>
    );
};

export default Header;