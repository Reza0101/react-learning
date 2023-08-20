import React, {useContext, useEffect} from 'react';
import stye from './MainPage.module.css';
import {TiArrowLeftThick} from 'react-icons/ti'
import {Link} from 'react-router-dom';
// import Arrow from '../image/Arrow.png'
import Cart from './Cart';
import { ProductContext } from '../services/ProductProvider';
import StudentComment from './StudentComment';
import AboutMe from './AboutMe';

const MainPage = () => {




    const data = useContext(ProductContext);
    return (
        <div className={stye.container}>
            <div data-aos='zoom-in' className={stye.header}>
                <img src='https://botostart.ir/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner.b9133f39.png&w=1920&q=75' />
                <div className={stye.titleText} dir='rtl'>
                    <h1>آموزش برنامه نویسی با بوتواستارت</h1>
                    <p>آموزش هدفمند، پروژه محور جامع برنامه نویسی همراه با پشتیبانی دامی جزو استاندارد های آموزشی بوتواستارت است که بدون شک باعث ورود شما به بازار کار خواهد شد.</p>
                    <div className={stye.btns}>
                        <Link to='/courses' className={stye.courses}>
                            <span>مشاهده دوره ها</span>
                            <TiArrowLeftThick />
                        </Link>
                        <Link to='/student-comments' className={stye.studentComments}>
                            نظرات دانشجویان
                        </Link>
                    </div>
                </div>
            </div>
            <img src='https://dapper-travesseiro-73bdd1.netlify.app/static/media/Arrow.5366d9d01f3639304335.png' alt='arrow' className={stye.arrowImg} />
            <div className={stye.titleProducts} dir='rtl'>
                <span>جدید ترین دوره ها</span>
                <Link to='/courses' className={stye.linkMore}>
                    <span>بیشتر</span>
                    <TiArrowLeftThick className={stye.iconMore} />
                </Link>
            </div>
            <div className={stye.products} dir='rtl'> 
                {
                    data.courses.map(item => <Cart productData={item} key={item.id} />)
                }
            </div>
            <div className={stye.aboutMe}>
                <AboutMe />
            </div>
            <div className={stye.studentCommentsContainer}>
                <StudentComment/>
            </div>
            <div data-aos='zoom-in' className={stye.instagramBox} dir='rtl'>
                    <img src='https://botostart.ir/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmockup.b3a8ebf5.png&w=640&q=100'/>
                    <p>در <a href='https://www.instagram.com/javascript.front/'>اینستاگرام</a> هم همراهمون باشید</p>
                    <span> برای دیدن آموزش های رایگان ما در اینستاگرام <a href='https://www.instagram.com/javascript.front/'>اینجا</a> کلیک کنید </span>
            </div>
        </div>
    );
};

export default MainPage;