import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addOrderToServer } from "../../store/reducers/orderSlice";
import { clearCart } from "../../store/reducers/carts";
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
    const { user } = useSelector((state) => state.user);
    const carts = useSelector((state) => state.carts);
    const products = useSelector((state) => state.products);
    const { loading } = useSelector((state) => state.orders);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName] = useState(user.login || "");
    const [email, setEmail] = useState(user.email || "");
    const [address, setAddress] = useState("");

    const cartsItems = products.data.filter((product) =>
        carts.data.some((cart) => cart.id === product.id)
    );

    const totalPrice = cartsItems.reduce((acc, product) => {
        const cartItem = carts.data.find((cart) => cart.id === product.id);
        return acc + product.price * cartItem.count;
    }, 0);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name.trim() || !email.trim() || !address.trim()) {
            toast.error("Заполните все поля!");
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            toast.error("Введите корректный email!");
            return;
        }

        const order = {
            id: Date.now(),
            user: { name, email, address },
            items: cartsItems.map((product) => {
                const cartItem = carts.data.find((cart) => cart.id === product.id);
                return {
                    id: product.id,
                    title: product.title,
                    count: cartItem.count,
                    price: product.price,
                    total: product.price * cartItem.count,
                };
            }),
            totalPrice,
        };

        try {
            await dispatch(addOrderToServer(order)).unwrap();
            dispatch(clearCart());
            toast.success("Заказ успешно оформлен!");
            navigate("/");
            setName(user.login || "");
            setEmail(user.email || "");
            setAddress("");
        } catch (error) {
            toast.error("Ошибка при оформлении заказа: " + error);
        }
    };

    return (
        <section className="check-out">
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <h2>Имя получателя</h2>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Введите ваше имя"
                    />
                    <h2>Электронная почта</h2>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Введите ваш email"
                    />
                    <h2>Адрес доставки</h2>
                    <textarea
                        cols="30"
                        rows="10"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Введите ваш адрес доставки"
                    ></textarea>

                    <button type="submit" disabled={loading}>
                        {loading ? "Отправка..." : "Заказать"}
                    </button>
                </form>

                <div className="check-out__items">
                    <h2>Ваш заказ:</h2>
                    {cartsItems.map((item) => {
                        const cartItem = carts.data.find((cart) => cart.id === item.id);
                        return (
                            <div key={item.id} className="check-out__item">
                                <p>Название: {item.title}</p>
                                <p>Количество: {cartItem.count}</p>
                                <p>Сумма: {(item.price * cartItem.count).toLocaleString("ru-RU")} ₽</p>
                                <hr />
                            </div>
                        );
                    })}
                </div>

                <div className="check-out__total">
                    <h2>Общая сумма:</h2>
                    <p>{totalPrice.toLocaleString("ru-RU")} ₽</p>
                </div>
            </div>
        </section>
    );
};

export default CheckOut;
