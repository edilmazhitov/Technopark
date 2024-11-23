import { useEffect } from 'react';
import './Card.scss';
import { MdFavoriteBorder, MdFavorite, MdOutlineLocalGroceryStore } from "react-icons/md";
import { LiaSignalSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../store/reducers/products.js";
// import {addCart} from "../../store/reducers/carts.js";
import {toggleFavorites} from "../../store/reducers/favorites.js";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Card = () => {
    const { data } = useSelector((state) => state.products);
    const dispatch = useDispatch();
    // const carts = useSelector((state) => state.carts)

    const favorites = useSelector((state) => state.favorites )

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    return (
        <div className="card-container">
            {data && data.length > 0 ? (
                data.map((item) => (
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
            ) : (
                <p style={{ color: 'white' }}>Нет доступных продуктов для отображения</p>
            )}
            <div className="card__pagination">
                <Stack spacing={2}>
                    <Pagination count={10} shape="rounded" />
                </Stack>
            </div>

        </div>
    );
};

export default Card;
