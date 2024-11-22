import React from 'react';
import './Favorites.scss';
import {useDispatch, useSelector} from "react-redux";
import {toggleFavorites} from "../../store/reducers/favorites.js";
import {MdFavorite, MdFavoriteBorder, MdOutlineLocalGroceryStore} from "react-icons/md";
import {LiaSignalSolid} from "react-icons/lia";

const Favorites = () => {

    const dispatch = useDispatch();

    const favorites = useSelector((state) => state.favorites);

    const {data} = useSelector(state => state.products);

    return (
        <section className='favorites'>
            <div className='container'>
                <div className="favorites__block">
                    {
                        data.filter(item => favorites.data.includes(item.id))
                            .map((item) => (
                            <div className="card" key={item.id}>
                                <img src={item.img} alt={item.title} className="card__img" />
                                <p className="card__type">{item.type}</p>
                                <h3 className="card__title">{item.title}</h3>
                                <p className="card__availability">
                                    {item.quantity > 0 ? 'В наличии' : 'Товара нет в наличии'}
                                </p>
                                <div className="card__wrapper">
                                    <div className="card__left">
                                        <h3 className="card__price">{item.price} ₽</h3>
                                    </div>
                                    <div className="card__right">
                                        <button className="card__favorites" onClick={() => dispatch(toggleFavorites(item.id))}>
                                            {
                                                favorites.data.includes(item.id) ?  <MdFavorite className='card__favorites-icon'/>
                                                    : <MdFavoriteBorder className="card__favorites-icon"/>
                                            }
                                        </button>
                                        <button className="card__comparison">
                                            <LiaSignalSolid className="card__comparison-icon" />
                                        </button>
                                        <button className="card__add-to-cart">
                                            <MdOutlineLocalGroceryStore className="card__basket-icon" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Favorites;