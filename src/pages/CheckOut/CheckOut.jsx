import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { addOrderToServer } from "../../store/reducers/orderSlice";
import { clearCart } from "../../store/reducers/carts";
import { useNavigate } from "react-router-dom";
import './CheckOut.scss'

const CheckOut = () => {
    const { user } = useSelector((state) => state.user);
    const carts = useSelector((state) => state.carts);
    const products = useSelector((state) => state.products);
    const { loading } = useSelector((state) => state.orders);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { register,
        handleSubmit,
        formState: { errors },
        reset
        } = useForm({
        defaultValues: {
            name: user.login || "",
            email: user.email || "",
            address: "",
        },
    });

    const cartsItems = products.data.filter((product) =>
        carts.data.some((cart) => cart.id === product.id)
    );

    const totalPrice = cartsItems.reduce((acc, product) => {
        const cartItem = carts.data.find((cart) => cart.id === product.id);
        return acc + product.price * cartItem.count;
    }, 0);

    const onSubmit = async (data) => {
        const { name, email, address } = data;

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
            reset(); // Сброс формы
        } catch (error) {
            toast.error("Ошибка при оформлении заказа: " + error);
        }
    };

    return (
        <section className="check-out">
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2>Имя получателя</h2>
                    <input
                        type="text"
                        placeholder="Введите ваше имя"
                        {...register("name", { required: "Имя обязательно для заполнения" })}
                    />
                    {errors.name && <p className="error">{errors.name.message}</p>}

                    <h2>Электронная почта</h2>
                    <input
                        type="email"
                        placeholder="Введите ваш email"
                        {...register("email", {
                            required: "Email обязателен для заполнения",
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "Введите корректный email",
                            },
                        })}
                    />
                    {errors.email && <p className="error">{errors.email.message}</p>}

                    <h2>Адрес доставки</h2>
                    <textarea
                        cols="30"
                        rows="10"
                        placeholder="Введите ваш адрес доставки"
                        {...register("address", { required: "Адрес обязателен для заполнения" })}
                    ></textarea>
                    {errors.address && <p className="error">{errors.address.message}</p>}

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
