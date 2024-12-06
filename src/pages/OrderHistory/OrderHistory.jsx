import React from "react";
import { useSelector } from "react-redux";
import "./OrderHistory.scss";

const OrderHistory = () => {
    const { data: orders } = useSelector((state) => state.orders);
    const { user } = useSelector((state) => state.user);

    if (!user) {
        return <p>Вы не авторизованы. Пожалуйста, войдите в аккаунт, чтобы увидеть историю заказов.</p>;
    }

    if (orders.length === 0) {
        return <p>У вас пока нет заказов.</p>;
    }

    return (
        <section className="order-history">
            <div className="container">
                <h1>История заказов</h1>
                {orders.map((order) => (
                    <div key={order.id} className="order-history__item">
                        <h2>Заказ #{order.id}</h2>
                        <p><strong>Имя:</strong> {order.user.name}</p>
                        <p><strong>Email:</strong> {order.user.email}</p>
                        <p><strong>Адрес:</strong> {order.user.address}</p>
                        <h3>Товары:</h3>
                        <ul>
                            {order.items.map((item) => (
                                <li key={item.id}>
                                    <p>Название: {item.title}</p>
                                    <p>Количество: {item.count}</p>
                                    <p>Цена за единицу: {item.price.toLocaleString("ru-RU")} ₽</p>
                                    <p>Итого: {item.total.toLocaleString("ru-RU")} ₽</p>
                                </li>
                            ))}
                        </ul>
                        <p><strong>Общая сумма:</strong> {order.totalPrice.toLocaleString("ru-RU")} ₽</p>
                        <hr />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OrderHistory;
