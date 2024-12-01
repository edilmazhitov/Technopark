
import React, { useState } from 'react';
import './Favorites.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorites } from '../../store/reducers/favorites.js';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { BsBoxFill } from 'react-icons/bs';
import Aside from './Aside';
import {toast} from "react-toastify";
import pickup from '../../assets/Logo.ico';

const Favorites = () => {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites);
    const { data } = useSelector((state) => state.products);

    const [filteredData, setFilteredData] = useState(data);

    const handleFilterChange = (filterName, filterValue) => {
        let filteredItems = [...data];

        if (filterName === 'type' && filterValue) {
            filteredItems = filteredItems.filter((item) => item.type === filterValue);
        }

        if (filterName === 'price') {
            if (filterValue === 'low') {
                filteredItems = filteredItems.filter((item) => item.price <= 10000);
            } else if (filterValue === 'high') {
                filteredItems = filteredItems.filter((item) => item.price > 10000);
            }
        }
    };
    const handleFavorites = (itemId) => {
        if (favorites.data.includes(itemId)) {
            toast.error("Удалено из избранного!");
        }
        dispatch(toggleFavorites(itemId));
    };
    return (
        <section className='favorites'>
            <div className='container'>
                <div className='favorites__block'>
                    {/* Вставляем Aside в левую часть */}
                    <Aside onFilterChange={handleFilterChange} />

                    {/* Блок с карточками */}
                    <div className='favorites__cards'>
                        {filteredData
                            .filter((item) => favorites.data.includes(item.id))
                            .map((item) => (
                                <div className='favorites__card' key={item.id}>
                                    <div className='favorites__card-block'>
                                        <div className='card__img'>
                                            <img src={item.img} alt='' className='favorites__card-img' />
                                        </div>
                                        <div className='favorites__card-wrapper'>
                                            <p className='favorites__card-type'>{item.type}</p>
                                            <h2 className='favorites__card-title'>{item.title}</h2>
                                            <p className='favorites__card-code'>Код: {item.id}</p>
                                            <p className='favorites__card-description'>
                                                Описание: <span>{item.description}</span>
                                            </p>
                                        </div>
                                        <div className='favorites__card-add'>
                                            <button
                                                className="card__favorites"
                                                onClick={() => handleFavorites(item.id)}
                                            >
                                                {favorites.data.includes(item.id) ? (
                                                    <MdFavorite className="card__favorites-icon"/>
                                                ) : (
                                                    <MdFavoriteBorder className="card__favorites-icon"/>
                                                )}
                                            </button>
                                        </div>
                                        <div className='favorites__card-actions'>
                                            <div className='favorites__card-action-wrapper'>
                                                <div className='favorites__card-quantity'>
                                                    <div
                                                        className='favorites__card-circle'
                                                        style={{backgroundColor: item.quantity === 0 ? 'red' : 'green'}}
                                                    ></div>
                                                    <p>{item.quantity > 0 ? `В наличии ${item.quantity}` : 'Товаров нет в наличии'}</p>
                                                </div>
                                                <div className='favorites__card-delivery'>
                                                    <BsBoxFill className='favorites__card-icons' />
                                                    <p>Доставка: сегодня</p>
                                                </div>
                                                <div className='favorites__card-pickup'>
                                                    <img src={pickup} alt='' className='favorites__card-icons' />
                                                    <p>Самовывоз: Сегодня</p>
                                                </div>
                                            </div>
                                            <div className='favorites__card-price-wrapper'>
                                                <p className='favorites__card-price'>{item.price} ₽</p>
                                            </div>
                                            <button className='add-to-cart'>
                                                <span>В корзину</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Favorites;
