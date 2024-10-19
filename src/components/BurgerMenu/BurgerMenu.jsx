import React, { useState } from 'react';
import './BurgerMenu.scss';

function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="burger-menu">
            <div
                className={`burger-icon ${isOpen ? 'open' : ''}`}
                onClick={toggleMenu}
                role="button"
                tabIndex="0"
                onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        toggleMenu();
                    }
                }}
            >
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>

            {isOpen && (
                <nav className="menu">
                        <ul>
                            <li><a href="#home">Главная</a></li>
                            <li><a href="#about">О нас</a></li>
                        <li><a href="#services">Услуги</a></li>
                        <li><a href="#contact">Контакты</a></li>
                    </ul>
                    <ul>
                        <li>link</li>
                        <li>link</li>
                        <li></li>
                    </ul>
                </nav>
            )}
        </div>
    );
}

export default BurgerMenu;
