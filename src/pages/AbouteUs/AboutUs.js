import React,{useContext} from 'react';
import style from './AboutUs.module.css';
import {ProductContext} from '../../services/ProductProvider';

const AboutUs = () => {

    const data = useContext(ProductContext);


    return (
        <div  dir='rtl' className={style.container}>
            {
                data.aboutUs.map(item => <div>
                    <p className={style.title}>{item.title}</p>
                    <div>{
                        item.description.map(item => 
                            <div data-aos='zoom-in'>
                                {item.title ? <p className={style.titleDescription}>{item.title}</p> : ''}
                                <p>{item.text}</p>
                            </div>
                        )        
                    }</div>
                </div>
                )
            }
        </div>
    );
};

export default AboutUs;