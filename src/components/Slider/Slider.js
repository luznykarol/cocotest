import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import ReactMarkdown from 'react-markdown'
import Img from 'gatsby-image'

/* purgecss start ignore */
import 'swiper/swiper.scss'
/* purgecss end ignore */
const Slider = ({ cover, image, body }) => {
  console.log('body', body)
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
        {/* <ReactMarkdown source={body} className='projects-markdown' /> */}
        <p className='projects-markdown'>{body}</p>
      </SwiperSlide>
      ...
    </Swiper>
  )
}

export default Slider
