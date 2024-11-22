import React from 'react';
import './Header.scss';
import './HeaderMedia.scss';
import Logo from '../../assets/Logo.ico';
import { MdHelpCenter } from "react-icons/md";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { LiaSignalSolid } from "react-icons/lia";
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu.jsx";
import SearchBlock from '../../components/SearhBlock/SearchBlock'
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {logOut} from "../../store/reducers/user";

const Header = () => {
    const user = useSelector(s => s.user)

    const dispath = useDispatch()

    return (
        <header className='header'>
            <div className="container">
                <div className="header__block">
                    <div className="header__left">
                        <img src={Logo} className='header__logo' alt="" />
                        <div role='button' className="header__catalog">
                            <BurgerMenu />
                            <span>Каталог</span>
                        </div>
                        <SearchBlock />
                    </div>

                    <div className='header__list'>
                        <Link to="" className="header__link">
                            <LiaSignalSolid className='header__link-icons'/>
                            <p>Сравнение</p>
                        </Link>
                        <Link to="#" className="header__link">
                            <AiFillHeart className='header__link-icons'/>
                            <p>Избранное</p>
                        </Link>
                        <Link to="/Cart" className="header__link">
                            <MdOutlineLocalGroceryStore className='header__link-icons'/>
                            <p>Корзина</p>
                        </Link>
                        {
                            user.status === 'success' ?
                            <Link to='/profile' className='header__link'>
                                <CiUser className='header__link-icons'/>
                                <p>Профиль</p>
                            </Link> :
                                <Link to='/Login' className='header__link'>
                                    <CiUser className='header__link-icons'/>
                                    <p>Войти</p>
                                </Link>
                        }

                    </div>

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
                                <p>Служба поддержки</p>
                            </div>
                        </div>
                    </div>

                    <div role='button' className="header__info">
                        <MdHelpCenter className='header__help' />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
