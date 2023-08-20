import React, {useEffect, useState} from 'react';
import style from './StudentComments.module.css';
import { data } from '../services/Couses';
import {Link} from 'react-router-dom';
import {TiArrowLeftThick} from 'react-icons/ti'
import {GoArrowRight, GoArrowLeft} from 'react-icons/go'

const StudentComment = () => {

    const commentsStudents = data.studentsComments;


    let [numberPage, setNumberPage] = useState(2)

    const nextSlider = () => {
        if (numberPage === 3) {
            setNumberPage(1)
        } else if (numberPage <= 3) {
            setNumberPage(prev => prev+1)
        }
    }

    const prevSlider = () => {
        if (numberPage === 1) {
            setNumberPage(3)
        } else if(numberPage <= 3) {
            setNumberPage(prev => prev-1)
        }
    }



    return (
        <div className={style.container} dir='rtl'>
            <div data-aos='zoom-in' className={style.textComments}>
                <p className={style.title}>نظرات دانشجویان</p>
                <div className={style.titleStudent}>
                    <div>
                        <span>{commentsStudents[numberPage-1].name}</span>
                        <br/>
                        <span>{commentsStudents[numberPage-1].studentCourses}</span>
                    </div>
                </div>
                <p className={style.textStudent}>{commentsStudents[numberPage-1].text}</p>
                <div className={style.showCorses}>
                    <Link className={style.link} to='/courses'> 
                        <span>مشاهده دروه ها</span>
                        <TiArrowLeftThick />
                    </Link>
                    <div className={style.btnSlider}>
                        <GoArrowRight className={style.iconNextSlider} onClick={nextSlider} />
                        <GoArrowLeft className={style.iconPrevSlider} onClick={prevSlider} />
                    </div>
                </div>
            </div>
            <div data-aos='zoom-in' className={style.slider}>
                <img src={commentsStudents[numberPage-1].image} />
            </div>
        </div>
    );
};

export default StudentComment;