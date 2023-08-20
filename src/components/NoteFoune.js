import React from 'react';
import { Link } from 'react-router-dom';
import style from './NoteFound.module.css';

const NoteFoune = () => {
    return (
        <div className={style.container}>
            <div className={style.texts} dir="rtl">
                <h3 className={style.title}>صفحه مورد نظر پیدا نشد</h3>
                <Link className={style.link} to='/'>
                    بازگشت به صفحه اصلی
                </Link>
            </div>
            <img className={style.image} src='https://botostart.ir/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F404.e1baf4f1.png&w=640&q=75' />
        </div>
    );
}

export default NoteFoune;