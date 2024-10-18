import React from 'react';
import './SearchBlock.scss';

const SearchBlock = () => {
    return (
        <>
            <input
                className='search'
                required
                type="text"
                placeholder="Искать Товары"
            />
        </>
    );
};

export default SearchBlock;