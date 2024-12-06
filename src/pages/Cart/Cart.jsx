import React, { useState } from 'react';
import './Cart.scss';
import { useDispatch, useSelector } from "react-redux";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { toast } from "react-toastify";
import { toggleFavorites } from "../../store/reducers/favorites.js";
import { LuTrash } from "react-icons/lu";
import { removeCart } from "../../store/reducers/carts.js";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa";
import { updateCartItem } from "../../store/reducers/carts.js";

const Cart = () => {
    const carts = useSelector((state) => state.carts);
    const products = useSelector((state) => state.products);
    const favorites = useSelector((state) => state.favorites);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleFavorites = (itemId) => {
        if (favorites.data.includes(itemId)) {
            toast.error("Удалено из избранного!");
        } else {
            toast.success("Добавлено в избранное!");
        }
        dispatch(toggleFavorites(itemId));
    };

    const removeCarts = (itemId) => {
        if (carts.data.some(item => item.id === itemId)) {
            dispatch(removeCart(itemId));
            toast.error("Удалено из корзины!");
        } else {
            toast.info("Элемент уже отсутствует в корзине.");
        }
    };

    const totalPrice = carts.data.reduce((acc, cartItem) => {
        const product = products.data.find((product) => product.id === cartItem.id);
        if (product) {
            return acc + product.price * cartItem.count;
        }
        return acc;
    }, 0);

    const updateCount = (id, newCount) => {
        dispatch(updateCartItem({ id, count: newCount }));
    };

    const { status } = useSelector(s => s.user);

    return (
        <section className='cart'>
            <div className="container">
                <h1 className="cart__title">
                    Корзина <span></span>
                </h1>
                <div className="cart__block">
                    <div className="cart__right">
                        {
                            products.data.filter(item => carts.data.some(el => el.id === item.id))
                                .map((product) => {
                                    const cartItem = carts.data.find(item => item.id === product.id);
                                    return (
                                        <div className="cart__product-list" key={product.id}>
                                            <div className='cart__card-block'>
                                                <div className="cart__card-right">
                                                    <img src={product.img} alt="" className='cart__card-img'/>
                                                    <div>
                                                        <p className='cart__card-title'>{product.title}</p>
                                                        <p className="cart__card-code">код: {product.id}</p>
                                                    </div>
                                                </div>
                                                <div className="cart__card-left">
                                                    <button
                                                        className="cart__card-favorites"
                                                        onClick={() => handleFavorites(product.id)}
                                                    >
                                                        {favorites.data.includes(product.id) ? (
                                                            <MdFavorite className="card__favorites-icon"/>
                                                        ) : (
                                                            <MdFavoriteBorder className="card__favorites-icon"/>
                                                        )}
                                                    </button>
                                                    <button className="card-add-to-cart" onClick={() => removeCarts(product.id)}>
                                                        <LuTrash className='card-add-to-cart-icons'/>
                                                    </button>
                                                    <div className="cart__count-wrapper">
                                                        <button className="cart__count-minus" onClick={() => {
                                                            if (cartItem.count > 1) {
                                                                updateCount(cartItem.id, cartItem.count - 1);
                                                            }
                                                        }}>
                                                            <FaMinus />
                                                        </button>
                                                        <input type="number" value={cartItem.count} onChange={(e) => updateCount(cartItem.id, parseInt(e.target.value))} className="cart__count"/>
                                                        <button className="cart_count-plus" onClick={() => updateCount(cartItem.id, cartItem.count + 1)}>
                                                            <FaPlus />
                                                        </button>
                                                    </div>
                                                    <h3 className='cart__card-price'>
                                                        {(product.price * cartItem.count).toLocaleString('ru-RU')} ₽
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                        }
                    </div>
                    <div className="cart__left">
                        <div className="cart__wrapper">
                            <h2 className="cart__total-title">Итого</h2>
                            <p className="cart__total-price">{totalPrice.toLocaleString('ru-RU')} ₽</p>
                        </div>
                        <span onClick={() => {
                            if (carts.data.length === 0) {
                                toast.error("Корзина пуста. Добавьте товары в корзину для оформления заказа.");
                            } else if (status === 'success') {
                                navigate('/CheckOut');
                            } else {
                                toast.error("Войдите в аккаунт чтобы заказать товары");
                            }
                        }}>
                            <button>Заказать</button>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;
