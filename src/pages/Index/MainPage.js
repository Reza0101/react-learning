import React, {useContext} from 'react';
import stye from './MainPage.module.css';
import {TiArrowLeftThick} from 'react-icons/ti'
import {Link} from 'react-router-dom';
import Cart from '../../components/Cart/Cart';
import { ProductContext } from '../../services/ProductProvider';
import StudentComment from '../../components/StudentComments/StudentComment';
import AboutMe from '../../components/AboutMe/AboutMe';

const MainPage = () => {




    const data = useContext(ProductContext);
    return (
        <div className={stye.container}>
            <div data-aos='zoom-in' className={stye.header}>
                <img src='https://botostart.ir/_next/static/media/banner.6e498f5a.svg' />
                <div className={stye.titleText} dir='rtl'>
                    <h1 className={stye.title}>آموزش برنامه نویسی با بوتواستارت</h1>
                    <p>آموزش هدفمند، پروژه محور جامع برنامه نویسی همراه با پشتیبانی دامی جزو استاندارد های آموزشی بوتواستارت است که بدون شک باعث ورود شما به بازار کار خواهد شد.</p>
                    <div className={stye.btns}>
                        <Link to='/courses' className={stye.coursesBtn}>
                            <span>مشاهده دوره ها</span>
                            <TiArrowLeftThick />
                        </Link>
                        <Link to='/student-comments' className={stye.studentBtn}>
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