import React, { useState } from 'react';
import { data } from '../../services/Couses';
import styled from 'styled-components';
import style from './Slider.module.css';
import {GoArrowRight, GoArrowLeft} from 'react-icons/go'

let Div = styled.div`
display: flex;
flex-direction: column;
    div{
        &:nth-child(1){
            z-index: ${props => props.numPage === 1 ? '3' : props => props.numPage === 2 ? '1' : props => props.numPage === 3 ? '2' : ''};
            transform: rotate(${props => props.numPage === 1 ? '' : props => props.numPage === 2 ? '20deg' :   props => props.numPage === 3 ? '10deg' : ''});
        }
        &:nth-child(2){
            z-index: ${props => props.numPage === 2 ? '3' : props => props.numPage === 1 ? '2' : props => props.numPage === 3 ? '1' : ''};
            transform: rotate(${props => props.numPage === 2 ? '' : props => props.numPage === 1 ? '10deg' :   props => props.numPage === 3 ? '20deg' : ''});
            
        }
        &:nth-child(3){
            z-index: ${props => props.numPage === 3 ? '3' : props => props.numPage === 1 ? '1' : props => props.numPage === 2 ? '2' : ''};
            transform: rotate(${props => props.numPage === 3 ? '' : props => props.numPage === 2 ? '10deg' :   props => props.numPage === 1 ? '20deg' : ''});
        }
        position: absolute;
        top: 0;
        right: 0;
    }

`

const Slider = () => {

    const about = data.aboutMe


    let [numberPage, setNumberPage] = useState(1)

    const nextSlider = () => {
        if (numberPage === 3) {
            setNumberPage(1)
        } else if (numberPage <= 3) {
            setNumberPage(prev => prev+1)
        }
    }

    const prevSlider = () => {
        if (numberPage === 1) {
            setNumberPage(3)
        } else if(numberPage <= 3) {
            setNumberPage(prev => prev-1)
        }
    }

 

    return (
        <div data-aos='zoom-in' className={style.container} >
            <Div numPage={numberPage} dir='rtl'>
                {
                    about.map(item => 
                        <div key={item.id} className={style.boxSlider}>
                            <span>{item.title}</span>
                            <p>{item.text}</p>
                        </div>
                    )
                }
            </Div>
            <div className={style.btns}>
                <GoArrowLeft className={style.iconPrevSlider} onClick={prevSlider} />
                <GoArrowRight className={style.iconNextSlider} onClick={nextSlider} />
            </div>
        </div>
    );
};

export default Slider;