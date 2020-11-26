import React from 'react'
import SwiperCore, { Navigation } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'
import ReactMarkdown from 'react-markdown'
import Img from 'gatsby-image'

/* purgecss start ignore */
// import 'swiper/swiper.scss'
/* purgecss end ignore */
SwiperCore.use([Navigation])

const Slider = ({ cover, image, text, icon }) => {
  console.log('text', text)
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      // navigation={{
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // }}
      navigation={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}>
      <SwiperSlide>
        <Img fluid={cover} />
      </SwiperSlide>
      <SwiperSlide>
        <Img fluid={image} />
      </SwiperSlide>
      <SwiperSlide>
        <div className='project-content'>
          <ReactMarkdown source={text} className='projects-markdown' />
          <div className='post-spinner'>
            <img src='/img/projects/post-spinner.jpg' />
          </div>
        </div>
      </SwiperSlide>
      ...
    </Swiper>
  )
}

export default Slider
