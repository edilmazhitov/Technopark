import { useEffect } from 'react';
import './Card.scss';
import { MdFavoriteBorder, MdFavorite, MdOutlineLocalGroceryStore } from "react-icons/md";
import { LiaSignalSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../store/reducers/products";
import { toggleFavorites } from "../../store/reducers/favorites";
import { toast } from "react-toastify";
import { addCart } from "../../store/reducers/carts.js";

const Card = () => {
    const { data, filter } = useSelector((state) => state.products);
    const favorites = useSelector((state) => state.favorites);
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.carts);

    useEffect(() => {
        dispatch(getAllProducts(filter.filterPrice));
    }, [dispatch, filter.filterPrice]);

    const handleFavorites = (itemId) => {
        if (favorites.data.includes(itemId)) {
            toast.error("Удалено из избранного!");
        } else {
            toast.success("Добавлено в избранное!");
        }
        dispatch(toggleFavorites(itemId));
    };
    const handleCarts = (itemId) => {
        if (cart.data.includes(itemId)) {
            toast.error("Удалено из корзины!");

        } else {
            toast.success("Добавлено в корзину!");
            dispatch(addCart(itemId));
        }

    };
    return (
        <div className="card-container">
            {data && data.length > 0 ? (
                data.filter((item, idx) => {
                    return idx >= filter.page * 12 - 12 && idx < filter.page * 12;
                }).map((item) => (
                    <div className="card" key={item.id}>
                        <img src={item.img} alt={item.title} className="card__img" />
                        <p className="card__type">{item.type}</p>
                        <h3 className="card__title">{item.title}</h3>
                        <p className="card__number">Код: {item.id}</p>
                        <p className="card__availability">
                            {item.quantity > 0 ? 'В наличии' : 'Товара нет в наличии'}
                        </p>
                        <div className="card__wrapper">
                            <div className="card__left">
                                <h3 className="card__price">{item.price.toLocaleString('ru-RU')} ₽</h3>
                            </div>
                            <div className="card__right">
                                <button
                                    className="card__favorites"
                                    onClick={() => handleFavorites(item.id)}
                                >
                                    {favorites.data.includes(item.id) ? (
                                        <MdFavorite className="card__favorites-icon" />
                                    ) : (
                                        <MdFavoriteBorder className="card__favorites-icon" />
                                    )}
                                </button>
                                <button className="card__comparison">
                                    <LiaSignalSolid className="card__comparison-icon" />
                                </button>
                                <button className="card__add-to-cart">
                                    <MdOutlineLocalGroceryStore className="card__basket-icon" onClick={() => handleCarts(item.id)} />
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
