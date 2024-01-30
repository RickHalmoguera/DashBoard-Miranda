import { Swiper, SwiperSlide } from 'swiper/react'
import { SwiperBigCardImg, SwiperBigCardStyled } from './SwiperBigCardStyled'
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export const SwiperBigCard = ({room1, room2, room3}) =>{
    return(
        <SwiperBigCardStyled
        slidesPerView={1}
        loop={true}
        pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
        className="mySwiper">
            <SwiperSlide><SwiperBigCardImg src={room1}/></SwiperSlide>
            <SwiperSlide><SwiperBigCardImg src={room2}/></SwiperSlide>
            <SwiperSlide><SwiperBigCardImg src={room3}/></SwiperSlide>
        </SwiperBigCardStyled>
    )
}