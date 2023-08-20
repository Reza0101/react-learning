import React, {useContext} from 'react';
import style from './question.module.css';

import { ProductContext } from '../services/ProductProvider';

const Question = props => {

    const data = useContext(ProductContext);
    let courses = data.courses
    let coursesId = props.coursesId;
    let question = courses[coursesId-1].questions;
    return (
        <>
            {
                question.map(ques => 
                    <div data-aos='zoom-in' key={ques.id} className={style.container}>
                        <p className={style.title}>{ques.title}</p>
                        {
                            ques.text ? <p>{ques.text}</p> : ''
                        }
                        <ul className={style.listQuestions}>
                            {
                                ques.listText ? ques.listText.map(item => <li key={item.id} className={style.listItem}>{item.title}</li>) : ''
                            }
                        </ul>
                    </div>
                )
            }
        </>
    );
};

export default Question;