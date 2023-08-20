import React, {useContext} from 'react';
import style from './ShoppingCart.module.css';
import { cartContext } from '../../services/CartContextProvider';
import { Link } from 'react-router-dom';
import {AiOutlineDelete} from 'react-icons/ai';
import { formatPrice } from '../../helper/function';
const ShoppingCart = () => {

    const {dispatch, state} = useContext(cartContext);



    const result = state.selectedItems;

    return (
        <div className={style.container}>
            {
                result.length ? 
                <div className={style.cart} dir='rtl'>
                    <div className={style.itemsProducts}>
                        <p>لیست دوره ها</p>
                        <div className={style.products}>
                            {
                                result.map(item => 
                                    <div key={item.id} className={style.productItem}>
                                        <div className={style.aboutProduct}>
                                            <img className={style.imgae} src={item.image} />
                                            <div className={style.titles}>
                                                <span>{item.title}</span>
                                                <br></br>
                                                <span>{item.price ? `تومان${formatPrice(item.price)}` : 'رایگان'}</span>
                                            </div>
                                        </div>
                                        <div onClick={() => dispatch({type:'REMOVE-ITEM', payload: item})} className={style.iconDelete} >
                                            <AiOutlineDelete />
                                        </div>
                                    </div>    
                                )
                            }
                        </div>
                    </div>
                    <div className={style.priceProducts}>
                        <p className={style.titlePriceProducts}>هزینه های دوره</p>
                        <div className={style.priceContainer}>
                            <div className={style.sumPrices}>
                                <span>جمع کل:</span>
                                <span>{state.total ? `تومان${formatPrice(state.total)}` : 'رایگان'}</span>
                            </div>
                            <hr/>
                            <div  className={style.sumPrices}>
                                <span>قابل پرداخت:</span>
                                <span>{state.total ? `تومان${formatPrice(state.total)}` : 'رایگان'}</span>
                            </div>
                            <div className={style.btnChekcout}>
                                <Link onClick={() => dispatch({type : 'CHEK-OUT'})} className={style.chkeoutProducts} to='/courses'>تکمیل سفارش</Link>
                            </div>
                        </div>
                    </div>
                </div>:     
                <div className={style.noProduct}>
                    <h4>!متاسفانه سبد شما خالی است</h4>
                    <img src='https://botostart.ir/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fempty-basket.e02ad87e.png&w=256&q=75' />
                    <div className={style.btnCourses}>
                        <Link className={style.linkCourses} to='/courses'>
                            ثبت نام و شروع برنامه نویسی
                        </Link>
                    </div>
                </div>
            }
        </div>
    );
};

export default ShoppingCart;