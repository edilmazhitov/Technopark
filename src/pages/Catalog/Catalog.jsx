import React from 'react';
import Card from '../../components/Card/Card'
import './Catalog.scss';
import Pagination from '@mui/material/Pagination';
import {useDispatch, useSelector} from "react-redux";
import {animateScroll as scroll} from 'react-scroll';
import {changePage} from "../../store/reducers/products";
import FilterPrice from "../../components/FilterPrice/FilterPrice.jsx";

const Catalog = () => {

    const dispatch = useDispatch();

    const { filter, data} = useSelector((state) => state.products )


    return (
        <section className='catalog'>
            <div className="container">

                <h1 className="catalog__title">Каталог товаров</h1>

                <FilterPrice/>

                <Card/>

                <div className="catalog__pagination">
                    <Pagination
                        onChange={(event,page) => {
                            dispatch(changePage(page))
                            scroll.scrollToTop({
                                smooth: true,
                                duration: 500
                            })
                        }}
                        page={filter.page} count={Math.ceil(data.length / 8)} variant="outlined"
                        shape="rounded" sx={{
                        color: 'white',
                        '& .MuiPaginationItem-root': {
                            color: '#0093c4',
                            borderColor: 'white',
                        },
                        '& .MuiPaginationItem-root:hover': {
                            color: 'white',
                            backgroundColor: '#0093c4',
                        },
                        '& .Mui-selected': {
                            backgroundColor: '#0093c4',
                            color: 'white',
                        },
                    }}
                    />
                </div>

            </div>
        </section>
    );
};

export default Catalog;