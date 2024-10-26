import React, { useEffect, useState } from 'react';
import './Card.scss';
import axios from 'axios';
import { MdFavoriteBorder, MdOutlineLocalGroceryStore } from "react-icons/md";
import { LiaSignalSolid } from "react-icons/lia";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = () => {
    const [products, setProducts] = useState([]);
    const favorites = () => toast("Товар был добавлен в избранные");
    const basket = () => toast("Товар добавлено в корзину");


    useEffect(() => {
        axios('http://localhost:8080/products')
            .then((res) => setProducts(res.data || []))
            .catch((error) => console.error('Error fetching products:', error));
    }, []);

    return (
        <div style={{
            background: 'black',
            height: '100vh',
            padding: '20px',
            overflowY: 'auto'
        }}>
            {products && products.length > 0 ? (
                products.map((item) => (
                    <div className='card' key={item.id}>
                        <img src={item.img} alt={item.title} className="card__img" />
                            <p className='card__type'>{item.type}</p>
                            <h3 className="card__title">{item.title}</h3>
                        <p className="card__availability">
                            <span>
                            </span>
                            {
                                item.quantity > 0 ? `В наличии` : 'Товар нету в наличии'
                            }
                        </p>
                        <div className="card__wrapper">
                            <div className="card__left">
                                <h3 className="card__price">{item.price} ₽</h3>
                            </div>
                            <div className="card__right">
                                <button className="card__favorites" onClick={favorites}>
                                    <MdFavoriteBorder className='card__favorites-icon'/>
                                </button>
                                <button className="card__comparison">
                                    <LiaSignalSolid  className='card__comparison-icon'/>
                                </button>
                                <button className="card__add-to-cart" onClick={basket}>
                                    <MdOutlineLocalGroceryStore className='card__basket-icon'/>
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p style={{ color: 'white' }}>Нет доступных продуктов для отображения</p>
            )}
        </div>
    );
};

export default Card;
