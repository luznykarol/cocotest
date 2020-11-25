import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import ReactMarkdown from 'react-markdown'
import Img from 'gatsby-image'
// Import Swiper styles
// import 'swiper/swiper.scss'
const Slider = ({ cover, image, body }) => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}>
      <SwiperSlide>
        <Img fluid={cover} />
      </SwiperSlide>
      <SwiperSlide>
        <Img fluid={image} />
      </SwiperSlide>
      <SwiperSlide>
        <ReactMarkdown
          source={body}
          className='markdown-cozy text-yellow markdown__scenarios'
        />
      </SwiperSlide>
      ...
    </Swiper>
  )
}

export default Slider
