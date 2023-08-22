import React, { useEffect } from 'react';
import style from './Comment.module.css';
import {TbMoodBoy} from 'react-icons/tb';
import {CgBoy} from 'react-icons/cg';



const Comment = (props) => {



    const {name, text, gender, studentCourses, posterVideo, videoSrc} = props.productData

    return (
        <div  className={style.container} dir='rtl'>
            <div data-aos='zoom-in' className={style.commentTexts}>
                <div className={style.headComments}>
                    <span className={style.iconGender}>{gender === 'male' ? <TbMoodBoy /> : <CgBoy />}</span>
                    <div className={style.aboutStudent}>
                        <span className={style.stundetName}>{name}</span>
                        <br/>
                        <p className={style.studentCourses}>{studentCourses}</p>
                    </div>
                </div>
                <p className={style.textComment}>{text}</p>
            </div>
            <div data-aos='zoom-in' className={style.video}>
                <video preload="none" width="100%" controls poster={posterVideo}>
                        <source src={videoSrc} type="video/mp4" />                    
                </video>
            </div>
        </div>
    );
};

export default Comment;