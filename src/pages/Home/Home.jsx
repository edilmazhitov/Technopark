
import {Link} from 'react-router-dom'
import './Home.scss';
import QYRON from '../../assets/QYRON-images.jpg';
import inovationImages from '../../assets/Inovation-images.jpg';
import BORK from '../../assets/BORK-images.jpg';
import smartSeacrh from '../../assets/smart-search-img.jpg';
import giftCard from '../../assets/gift-card-img.jpg';
import newDyson from '../../assets/newDyson.jpg';
import covers from '../../assets/covers.jpg';
import globalSlidePhotoOne from '../../assets/globall-slider-images-one.jpg'
import bonusOne from '../../assets/bonus-one.jpg'
import bonusTwo from '../../assets/bonus-two.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Card from '../../components/Card/Card'


const Home = () => {
    return (
        <main className='main'>
            <section className="slider">
                <div className="container">
                    <Swiper

                        modules={[Navigation, Pagination]}
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true}}

                    >
                        <SwiperSlide>
                            <a href="">
                                <img src={globalSlidePhotoOne} className='slider__img' alt=""/>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="">
                                <img src={globalSlidePhotoOne} className='slider__img' alt=""/>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="">
                                <img src={globalSlidePhotoOne} className='slider__img' alt=""/>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="">
                                <img src={globalSlidePhotoOne} className='slider__img' alt=""/>
                            </a>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>


            <section className="brand">
                <div className="container">
                    <div className="brand__block">
                        <nav className="brand__nav">
                            <Swiper
                                modules={[Navigation, Pagination]}
                                spaceBetween={50}
                                slidesPerView={6}
                                navigation={true}
                                pagination={{ clickable: true }}
                            >
                                <SwiperSlide>
                                    <Link to='/qyron'>

                                        <div className="brand__nav-block">
                                            <div className="brand__nav-circle">
                                                <img src={QYRON} alt="QYRON"/>
                                                <p className='brand__nav-text'>QYRON</p>
                                            </div>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a href="">

                                        <div className="brand__nav-block">
                                            <div className="brand__nav-circle">
                                                <img src={inovationImages} alt="Центр инноваций"/>
                                                <p className='brand__nav-text'>Центр инноваций</p>
                                            </div>
                                        </div>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Link to='/Smart'>

                                        <div className="brand__nav-block">
                                            <div className="brand__nav-circle">
                                                <img src={smartSeacrh} alt="Smart Search"/>
                                                <p className='brand__nav-text'>Smart Search</p>
                                            </div>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a href="">

                                        <div className="brand__nav-block">
                                            <div className="brand__nav-circle">
                                                <img src={BORK} alt="BORK"/>
                                                <p className='brand__nav-text'>BORK</p>
                                            </div>
                                        </div>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a href="">

                                        <div className="brand__nav-block">
                                            <div className="brand__nav-circle">
                                                <img src={giftCard} alt="Gift Card"/>
                                                <p className='brand__nav-text'>Gift Card</p>
                                            </div>
                                        </div>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a href="">

                                        <div className="brand__nav-block">
                                            <div className="brand__nav-circle">
                                                <img src={newDyson} alt="New Dyson"/>
                                                <p className='brand__nav-text'>New Dyson</p>
                                            </div>
                                        </div>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a href="">

                                        <div className="brand__nav-block">
                                            <div className="brand__nav-circle">
                                                <img src={covers} alt="Covers"/>
                                                <p className='brand__nav-text'>Covers</p>
                                            </div>
                                        </div>
                                    </a>
                                </SwiperSlide>
                            </Swiper>
                        </nav>
                    </div>
                </div>
            </section>
            <section className="bestsellers">
                <div className="container">
                    <div className="bestsellers__block">
                        <div className="bestsellers__left">
                            <h1 className="bestsellers__title">
                                Хиты продаж
                            </h1>
                        </div>
                        <div className="bestsellers__right">
                            <div className="bestsellers__slider">

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="promotions">
                <div className="container">
                    <div className="promotions__block">
                        <a className="promotions__bonus" href='#'>
                            <img src={bonusOne} alt=""/>
                        </a>
                        <a className="promotions__discounts" href='#'>
                            <img src={bonusTwo} alt=""/>
                        </a>
                    </div>
                </div>
            </section>

            <section className="news">
                <div className="container">

                    <div className="news__block">
                        <div className="news__left">
                            <h1 className="news__title">
                                Новинки
                            </h1>
                        </div>
                        <div className="news__right">
                                    <Card/>
                            <div className="news__slider">
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="popular">
                <div className="container">
                    <h1 className='popular__title'>Популярные категории</h1>
                    <div className="popular__block">
                        <a href="" className="popular__link-box">
                        </a>
                        <a className="popular__link-box">

                        </a>
                        <a className="popular__link-box">

                        </a>
                        <a className="popular__link-box">

                        </a>
                        <a className="popular__link-box">

                        </a>
                        <a className="popular__link-box">

                        </a>
                    </div>
                    <div className="popular__block">
                        <a href="" className="popular__link-box">
                        </a>
                        <a className="popular__link-box">

                        </a>
                        <a className="popular__link-box">

                        </a>
                        <a className="popular__link-box">

                        </a>
                        <a className="popular__link-box">

                        </a>
                        <a className="popular__link-box">

                        </a>
                    </div>
                </div>
            </section>

            <section className="popularBrands">
                <div className="container">
                    <div className="popularBrands__block">
                        <div className="popularBrands__information">
                            <h1 className='popularBrands__title'>Популярные бренды</h1>
                        </div>
                        <div className="popularBrands__box-block">
                            <div className="popularBrands__box"></div>
                            <div className="popularBrands__box"></div>
                            <div className="popularBrands__box"></div>
                            <div className="popularBrands__box"></div>
                            <div className="popularBrands__box"></div>
                            <div className="popularBrands__box"></div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default Home;
