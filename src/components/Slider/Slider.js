import React from 'react';
import { data } from '../../services/Couses';
import style from './Slider.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards } from 'swiper/modules';



const Slider = () => {

  const about = data.aboutMe


  return (
    <>
      <Swiper
  
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className={`mySwiper`}
      >
        {
          about.map(item => <div>
            <SwiperSlide className={style.item_slide}>
              <h1>{item.title}</h1>
              <p>{item.text}</p>
            </SwiperSlide>
          </div>)
        }
      </Swiper>
    </>
  );
};

export default Slider;