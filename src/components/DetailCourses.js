import React, {useContext, useState} from 'react';
import style from './DetailCourses.module.css';
import { Link, useParams } from 'react-router-dom';
import { ProductContext } from '../services/ProductProvider';
import {BiSupport} from 'react-icons/bi';
import {MdOutlineWatchLater} from 'react-icons/md';
import {FaChalkboardTeacher} from 'react-icons/fa';
import {FaUserGraduate} from 'react-icons/fa';
import Dropdowing from './Drowdown/Dropdowing';
import Question from './question';
import { cartContext } from '../services/CartContextProvider';
import { isInCart } from '../helper/function';
import { formatPrice } from '../helper/function';

const DetailCourses = () => {

    const {state, dispatch} = useContext(cartContext);

    const data = useContext(ProductContext);
    let coursesName = useParams().name;

    let [showQuestion, setShowQuestion] = useState(false)

    const showAllQuestions = () => {
        setShowQuestion(prev => !prev)
    }


    const getCourses = () => {
        let courses = data.courses.filter(item => item.name === coursesName)
        return courses
    }

    const resulte = getCourses()

    const {id, Support, image, price, title, student, description, posterVideo, videoSrc, horse, numberSessions, teacherId} = resulte[0]
    const {img, name, job, descriptionTeacher} = data.teacher[teacherId-1]

    return (
        <div  className={style.container}>
            <div className={style.abouteCourses} dir='rtl'>
                <div data-aos='zoom-in' className={style.titleAboutCourses}>
                    <div className={style.textCourses}>
                        <img className={style.image} src={image} />
                        <span>{title}</span>
                        <p>{description}</p>
                    </div>
                    <div className={style.video}>
                        <video preload="none" width="100%" controls poster={posterVideo}>
                            <source src={videoSrc} type="video/mp4" />                    
                        </video>
                    </div>
                </div>
                <div data-aos='zoom-in' className={style.footerCouses}>
                    <div className={style.priceCourseContainer}>
                        {
                            isInCart(state, id) ? 
                            <Link className={style.btnContinuation} to='/cart'>
                                <span>ادامه سفارش</span>
                            </Link> : 
                            <button  className={style.loginLink}  onClick={() => dispatch({type: 'ADD-ITEM', payload: resulte[0]})}>ثبت نام</button>
                        }
                        <span>{price ?  ` ${formatPrice(price)} تومان`: 'رایگان'}</span>
                    </div>
                    <div className={style.iconCourses}>
                        <div>
                            <BiSupport className={style.icon} />
                            <span>{Support ? 'پشتیبانی داعمی' : 'فاقد پشتیبانی'}</span>
                        </div>
                        <div>
                            <MdOutlineWatchLater className={style.icon} />
                            <span>{horse}ساعت</span>
                        </div>
                        <div>
                            <FaChalkboardTeacher className={style.icon} />
                            <span>{numberSessions}جلسه</span>
                        </div>
                        <div>
                            <FaUserGraduate className={style.icon} />
                            <span>{student}دانشجو</span>
                        </div>
                    </div>
                </div>
            </div>

            <div  dir='rtl' className={showQuestion ? style.openQuestions : style.closedQuestions}>
                <div>
                    <Question coursesId={id} />
                </div>
            </div>
            <button className={style.btnShowAllQuestions} onClick={showAllQuestions}>{showQuestion ? 'بستن' : 'ادامه مطلب'}</button>

            <div className={style.dropdown}>
                {
                    resulte[0].controversialQuestions.map(item => 
                        <Dropdowing questionData={item} />
                    )
                }
            </div>

        


            <div data-aos='zoom-in' className={style.teacher} dir='rtl'>
                <p className={style.title}>از چه کسی یاد میگیرید؟</p>
                <div className={style.box}>
                    <img className={style.imageTeacher} src={img} />
                    <div className={style.textTeacher}>
                        <p className={style.naemTeacher}>{name}</p>
                        <p className={style.job}>{job}</p>
                        <br/>
                        <p className={style.description}>{descriptionTeacher}</p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default DetailCourses;