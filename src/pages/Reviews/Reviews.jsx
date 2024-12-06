import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAllReviews, getAllReviews } from '../../store/reducers/reviews.js';
import { useForm } from 'react-hook-form';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { v4 as uuidv4 } from 'uuid';
import './Reviews.scss';

const Reviews = () => {
    const [value, setValue] = useState(1);
    const { data = [], status, error } = useSelector((state) => state.reviews);
    const { user } = useSelector((state) => state.user);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllReviews());
    }, [dispatch]);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({ mode: 'onBlur' });

    const addReview = (formData) => {
        const newReview = {
            ...formData,
            rating: value,
            userName: user?.login || 'Аноним',
            id: uuidv4(),
            date: new Date().toLocaleString(),
        };

        dispatch(addAllReviews(newReview));
        reset();
        setValue(1);
    };

    if (status === 'loading') {
        return <p>Загрузка отзывов...</p>;
    }

    if (status === 'error') {
        return <p style={{ color: 'red' }}>Ошибка: {error}</p>;
    }

    return (
        <section className='reviews'>
            <h1 className="reviews__title">Отзывы</h1>
            <p className='reviews__subtitle'>
                {user?.login
                    ? ""
                    : "Вы не авторизованы. Отзывы будут оставлены анонимно."}
                <br />
                Напишите отзыв о нашем магазине:
            </p>
            <form className='reviews__form' onSubmit={handleSubmit(addReview)}>
                <Stack spacing={1}>
                    <Rating
                        name="size-large"
                        value={value}
                        size="large"
                        onChange={(event, newValue) => {
                            setValue(newValue >= 1 ? newValue : 5);
                        }}
                    />
                </Stack>

                <textarea
                    className='reviews__textarea'
                    {...register('text', { required: 'Отзыв обязателен' })}
                    cols="30"
                    rows="10"
                />
                {errors.text && <p style={{ color: 'red' }}>{errors.text.message}</p>}
                <button className='reviews__btn' type='submit'>Оставить отзыв</button>
            </form>

            {data.map((item) => (
                <div key={item.id} className='reviews__block'>
                    <h2 className='reviews__user'>{item.userName}</h2>
                    <h2 className='reviews__text'>{item.text}</h2>
                    <Stack spacing={1}>
                        <Rating name={`rating-${item.id}`} value={item.rating} readOnly />
                    </Stack>
                    <p className='reviews__data'>Дата: {item.date}</p>
                </div>
            ))}
        </section>
    );
};

export default Reviews;
