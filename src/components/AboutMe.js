import React from 'react';
import style from './AboutMe.module.css';
import Slider from './Slider';

const AboutMe = () => {
    return (
        <div className={style.container}>
            <div className={style.slider}>
                <Slider />
            </div>
            <img data-aos='zoom-in' className={style.imageMilad} src='https://botostart.ir/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmilad.8723fa0e.png&w=384&q=100' />
        </div>
    );
};

export default AboutMe;