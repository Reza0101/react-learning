import React, { useState } from 'react';
import style from './Login.module.css';
import {Link} from 'react-router-dom';  
import {TiUserAddOutline} from 'react-icons/ti';
import {BiLogIn} from 'react-icons/bi'

const Login = () => {




    return (
        <div className={style.container}>
            <div className={style.iamgeContainer}>
                <Link className={style.image} to='/'>
                    <img src='https://botostart.ir/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.c523c566.png&w=256&q=100' />
                </Link>
            </div>
            <div className={style.form}>
                <div className={style.btnLinkRoute}>
                    <Link className={style.linkLogout} to='/register'>
                        <span>ثبت نام</span>
                        <TiUserAddOutline  className={style.iconLogout} />
                    </Link>
                    <Link  className={style.linkLogin} to='/login'>
                        <span>ورود</span>
                        <BiLogIn className={style.iconLogin} />
                    </Link>
                </div>
                <div className={style.formInformation}>
                    <p className={style.titleForm}>ورود به سایت بوتواستارت</p>
                    <p className={style.textNumberPhone} dir='rtl'>شماره موبایل خود را وارد کنید</p>
                    <input className={style.inputPhone} dir='rtl' />
                    <button className={style.btnSend} type='submit'>ارسال کد تایید</button>
                </div>
            </div>
        </div>
    );
};

export default Login;