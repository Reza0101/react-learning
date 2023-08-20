import React, {useContext, useEffect} from 'react';
import style from './Cart.module.css';
import {MdOutlineWatchLater} from 'react-icons/md';
import { Link } from 'react-router-dom';
import {TiArrowLeftThick} from 'react-icons/ti'
import { cartContext } from '../services/CartContextProvider';
import { isInCart } from '../helper/function';
import {formatPrice} from '../helper/function';
import animation from './Animation-scroll';

const Cart = ({productData}) => {

    const {state, dispatch} = useContext(cartContext)


    useEffect(() => {
        animation(1000);
    }, [])

    const {id, title, name, image, price, horse, student} = productData
    return (
        <div data-aos='zoom-in' className={style.container}>
            <div className={style.image}>
                <img src={image} />
            </div>
            <p>{title}</p>
            <div className={style.watch}>
                <MdOutlineWatchLater className={style.iconWatch} />
                <span>{horse}ساعت</span>
            </div>
            <div className={style.studentPrice}>
                <div className={style.studentBox}>
                    {formatPrice(student)}
                    <span>نفر</span>
                </div>
                <span>{price ? formatPrice(price) : 'رایگان'}{price ? 'تومان' : ''}</span>
            </div>
            <hr/>
            <div className={style.linkDetail}>
                {
                    isInCart(state, id) ? 
                    <Link to='/cart' className={style.btnbtnContinuation}>ادامه سفارش</Link> :
                    <button  className={style.login} onClick={() => dispatch({type: 'ADD-ITEM', payload: productData})}>ثبت نام</button>
                }
                <Link to={`/courses/${name}`} className={style.detail}>
                    <span>مشاهده دروه</span>
                    <TiArrowLeftThick />
                </Link>
            </div>
        </div>
    );
};

export default Cart;