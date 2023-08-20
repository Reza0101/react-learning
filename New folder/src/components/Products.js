import React, { useState, useContext } from 'react';
import style from './Products.module.css';
import { ProductContext } from '../services/ProductProvider';
import Cart from './Cart';

const Products = () => {

    const data = useContext(ProductContext)

    const products = data.courses

    let [freeCourses, setFreeCourses] = useState(false);

    let flagFreeCourses = () => {
        setFreeCourses(prev => !prev);
    }

    let freeProducts = products.filter(course => course.price === 0)

    return (
        <div className={style.container}>
            <div className={style.titleProducts}>
                <div className={style.toggleFreeCourses}>
                    <span>دوره های رایگان</span>
                    <div className={freeCourses ? style.freeCourses : style.ofFreeCourses} onClick={flagFreeCourses}>
                        <div></div>
                    </div>
                </div>
                <span dir='rtl' className={style.title}>دوره های آموزش برنامه نویسی</span>
            </div>
            <div className={style.products} dir='rtl'>
                {
                    freeCourses ? freeProducts.map(courses => <Cart productData={courses} key={courses.id} />) :
                    products.map(courses => <Cart productData={courses} key={courses.id} />)
                }
            </div>
        </div>
    );
};

export default Products;