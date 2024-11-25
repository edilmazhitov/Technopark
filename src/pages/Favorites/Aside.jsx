import React, { useState } from 'react';
import './Aside.scss';

const Aside = ({ onFilterChange }) => {
    const [filter, setFilter] = useState({
        type: '',
        price: '',
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilter((prev) => ({
            ...prev,
            [name]: value,
        }));

        onFilterChange(name, value);
    };

    return (
        <aside className='aside'>
            <h3>Фильтры</h3>
            <div className='filter'>
                <label htmlFor='type'>Тип товара</label>
                <select id='type' name='type' onChange={handleFilterChange}>
                    <option value=''>Все</option>
                    <option value='phone'>Телефон</option>
                    <option value='laptop'>Ноутбук</option>
                    {/* Добавьте другие типы, если нужно */}
                </select>
            </div>
            <div className='filter'>
                <label htmlFor='price'>Цена</label>
                <select id='price' name='price' onChange={handleFilterChange}>
                    <option value=''>Без фильтра</option>
                    <option value='low'>До 10000 ₽</option>
                    <option value='high'>От 10000 ₽</option>
                </select>
            </div>
        </aside>
    );
};

export default Aside;
