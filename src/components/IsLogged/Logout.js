import React, {useState, useEffect} from 'react';
import style from './Logout.module.css';
import { Link } from 'react-router-dom';
import {TiUserAddOutline} from 'react-icons/ti';
import {BiLogIn} from 'react-icons/bi';
import { validate } from './validate';
import { ToastContainer } from 'react-toastify';
import { notify } from './toast';
import 'react-toastify/dist/ReactToastify.css';

const Logout = () => {

    const [errors, setErrors] = useState({});
    const [touchd, setTouchd] = useState({})


    const [data, setData] = useState({
        name: '',
        password: ''
    })

    const changeHandler = event => {
        setData({...data, [event.target.name] : event.target.value})
    }

    useEffect(() => {
        setErrors(validate(data))
    }, [data])


    const focusHandler = event => {
        setTouchd({...touchd, [event.target.name] : true})
    }

    const submitForm = event => {
        event.preventDefault()

        if(!Object.keys(errors).length){
            notify('با موفقیت ثبت نام شدید', 'success');
        } else{
            notify('اطلاعات  کامل نمیباشد', 'error')
            setTouchd({
                name: true,
                password: true
            })
        }
    }

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
                <div className={style.formInformation} dir='rtl'>
                    <p className={style.titleForm}>عضویت در بوتواستارت</p>
                    <p className={style.textNumberPhone}>نام و نام خانوادگی</p>
                    <form onSubmit={submitForm}>
                        <input onChange={changeHandler} className={style.inputName} value={data.name} name='name'  onFocus={focusHandler}/>
                        {errors.name && touchd.name && <span>{errors.name}</span>}
                        <p className={style.textNumberPhone} >شماره موبایل خود را وارد کنید</p>
                        <input onChange={changeHandler} className={style.inputPhone} value={data.password} name='password' onFocus={focusHandler}/>
                        {errors.password && touchd.password && <span>{errors.password}</span>}
                        <button className={style.btnSend} type='submit'><Link className={style.linkSubmit} to={!Object.keys(errors).length && '/' }>ثبت نام</Link></button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default  Logout;
