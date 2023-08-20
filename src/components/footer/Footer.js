import React from 'react';
import style from './Footer.module.css';
import {RiHeart2Fill} from 'react-icons/ri'
// import zarinpal from './../../image/zarinpal.png'
import { Link } from 'react-router-dom';
import {AiOutlineInstagram} from 'react-icons/ai';
import {FaTelegramPlane} from 'react-icons/fa';
import {BsGithub} from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai'

const Footer = () => {
    return (
        <>
        <div className={style.container} dir='rtl'>
            <div className={style.div1}>
                <div className={style.imageContainer}>
                    <img src='https://botostart.ir/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.c523c566.png&w=256&q=100' />
                    <div className={style.textImage}>
                        <span className={style.title}>آکادمی بوتواستارت</span>
                        <br/>
                        <span className={style.textTitle}>آموزش برنامه نویسی|پروژه محور|پشتیبانی دایمی|جامع</span>
                    </div>
                </div>
                <p className={style.text}>هدف بوتواستارت ارائه بهترین دوره های آموزش برنامه نویسی به دانشجویان برای ورود به بازار کار است و برای رسیدن به این هدف یک سری استانداردها تعیین شده و به صورت سختگیرانه روی دوره ها اعمال میشود. این استاندار ها شامل تدریس سلیس و روان برای انتقال مفاهیم در کنار کامل و جامع بودن دوره ها است به صورتی که با دیدن یک دوره به سطح مناسب و حرفه ای برسید. همچنین دوره ها پروژه محور هستند تا کاربرد مفاهیمی که یاد میگیرید را درک کنید و اگر احیانا ابهامی پیش آید میتوانید از پشتیبانی دائمی‌ بوتواستارت استفاده کنید و سوال هایتان را بپرسید. و در آخر به یکی از مهم ترین ویژگی دوره ها اشاره میکنم و آن هم آپدیت و بروز بودن آن ها مطابق آخرین تکنولوژی ها میباشد.</p>
            </div>
            <div className={style.div2}>
                <div className={style.urlTest}>
                    <div className={style.one}>
                        <p>بخش های سایت</p>
                        <div className={style.pageUrlText}>
                            <Link className={style.link} to='/courses'>دوره ها</Link>
                            <Link className={style.link} to='/about-us'>درباره ما</Link>
                            <Link className={style.link} to='/student-comments'>نظرات دانشجویان</Link>
                        </div>
                    </div>
                    <div className={style.tow}>
                        <p>پرداخت امن زرین پال</p>
                        <a href='https://www.zarinpal.com/trustPage/www.botostart.ir'>
                            {/* <img className={style.imageZarinpal} src={zarinpal} /> */}
                        </a>
                    </div>
                </div>  
                <div className={style.icons}>
                    <a href='https://www.instagram.com/javascript.front/'>
                        <AiOutlineInstagram className={style.icon} />
                    </a>
                    <a href='https://t.me/botostart_io'>
                        <FaTelegramPlane className={style.icon} />
                    </a>
                    <a href='https://github.com/milad-azami'>
                        <BsGithub className={style.icon} />
                    </a>
                    <AiOutlineMail className={style.icon} />
                </div>
            </div>
        </div>
        <p className={style.footerText}>ساخته شده با <RiHeart2Fill className={style.heartIcon} /> در بوتواستارت</p>
        </>
    );
};

export default Footer;