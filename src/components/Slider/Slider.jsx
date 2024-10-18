// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import './Slider.scss'
//
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import '../../pages/Home/Home.scss'
// import QYRON from "../../assets/QYRON-images.jpg";
// import inovationImages from "../../assets/Inovation-images.jpg";
// import smartSeacrh from "../../assets/smart-search-img.jpg";
// import BORK from "../../assets/BORK-images.jpg";
// import giftCard from "../../assets/gift-card-img.jpg";
// import newDyson from "../../assets/newDyson.jpg";
// import covers from "../../assets/covers.jpg";
// import profitable from "../../assets/profitable-img.jpg";
//
// const Slider = () => {
//     return (
//         <>
//             <Swiper
//                 spaceBetween={20}
//                 slidesPerView={10}
//                 onSlideChange={() => console.log('slide change')}
//                 onSwiper={(swiper) => console.log(swiper)}
//             >
//                 <SwiperSlide>
//                     <div className="brand__nav-block">
//                         <div className="brand__nav-circle">
//                             <img src={QYRON} alt=""/>
//                             <p className='brand__nav-text'>QYRON</p>
//                         </div>
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <div className="brand__nav-block">
//                         <div className="brand__nav-circle">
//                             <img src={inovationImages} alt=""/>
//                             <p>Центр инноваций</p>
//                         </div>
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//
//                     <div className="brand__nav-block">
//                         <div className="brand__nav-circle">
//                             <img src={smartSeacrh} alt=""/>
//                         </div>
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//
//                     <div className="brand__nav-block">
//                         <div className="brand__nav-circle">
//                             <img src={BORK} alt=""/>
//                         </div>
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <div className="brand__nav-block">
//                         <div className="brand__nav-circle">
//                             <img src={giftCard} alt=""/>
//                         </div>
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//
//                     <div className="brand__nav-block">
//                         <div className="brand__nav-circle">
//                             <img src={newDyson} alt=""/>
//                         </div>
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//
//                     <div className="brand__nav-block">
//                         <div className="brand__nav-circle">
//                             <img src={covers} alt=""/>
//                         </div>
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <div className="brand__nav-block">
//                         <div className="brand__nav-circle">
//                             <img src={profitable} alt=""/>
//                         </div>
//                     </div>
//                 </SwiperSlide><SwiperSlide>
//
//                     <div className="brand__nav-block">
//                         <div className="brand__nav-circle">
//                             <img src={newDyson} alt=""/>
//                         </div>
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//
//                     <div className="brand__nav-block">
//                         <div className="brand__nav-circle">
//                             <img src={covers} alt=""/>
//                         </div>
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <div className="brand__nav-block">
//                         <div className="brand__nav-circle">
//                             <img src={profitable} alt=""/>
//                         </div>
//                     </div>
//                 </SwiperSlide><SwiperSlide>
//
//                     <div className="brand__nav-block">
//                         <div className="brand__nav-circle">
//                             <img src={newDyson} alt=""/>
//                         </div>
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//
//                     <div className="brand__nav-block">
//                         <div className="brand__nav-circle">
//                             <img src={covers} alt=""/>
//                         </div>
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <div className="brand__nav-block">
//                         <div className="brand__nav-circle">
//                             <img src={profitable} alt=""/>
//                         </div>
//                     </div>
//                 </SwiperSlide>
//             </Swiper>
//         </>
//     );
// };
//
// export default Slider;