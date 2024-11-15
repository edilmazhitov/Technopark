import { useEffect, useState } from 'react';
import './Card.scss';
import axios from 'axios';
import { MdFavoriteBorder, MdFavorite, MdOutlineLocalGroceryStore } from "react-icons/md";
import { LiaSignalSolid } from "react-icons/lia";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = () => {
    const [products, setProducts] = useState([]);
    const [favorites, setFavorites] = useState([]); // Состояние для избранного
    const [cart, setCart] = useState([]); // Состояние для корзины

    useEffect(() => {
        axios('http://localhost:8080/products')
            .then((res) => setProducts(res.data || []))
            .catch((error) => console.error('Error fetching products:', error));
    }, []);

    const toggleFavorite = (id) => {
        if (favorites.includes(id)) {
            setFavorites(favorites.filter((favId) => favId !== id));
            toast("Товар удалён из избранного");
        } else {
            setFavorites([...favorites, id]);
            toast("Товар добавлен в избранное");
        }
    };

    const toggleCart = (id) => {
        if (cart.includes(id)) {
            setCart(cart.filter((cartId) => cartId !== id));
            toast("Товар удалён из корзины");
        } else {
            setCart([...cart, id]);
            toast("Товар добавлен в корзину");
        }
    };

    return (
        <div className="cards-container">
            {products && products.length > 0 ? (
                products.map((item) => (
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
                                <button
                                    className="card__favorites"
                                    onClick={() => toggleFavorite(item.id)}
                                >
                                    {favorites.includes(item.id) ? (
                                        <MdFavorite className="card__favorites-icon" />
                                    ) : (
                                        <MdFavoriteBorder className="card__favorites-icon" />
                                    )}
                                </button>
                                <button className="card__comparison">
                                    <LiaSignalSolid className="card__comparison-icon" />
                                </button>
                                <button
                                    className="card__add-to-cart"
                                    onClick={() => toggleCart(item.id)}
                                >
                                    <MdOutlineLocalGroceryStore
                                        className={
                                            cart.includes(item.id)
                                                ? 'card__basket-icon active'
                                                : 'card__basket-icon'
                                        }
                                    />
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
