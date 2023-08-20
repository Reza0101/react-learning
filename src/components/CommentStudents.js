import React, {useContext} from 'react';
import style from './CommentsStudent.module.css';
import { ProductContext } from '../services/ProductProvider';
import Comment from './Comment';

const CommentStudents = () => {

    const data = useContext(ProductContext);

    return (
        <div className={style.container}>
            {
                data.allCommentsStudent.map(comment => <Comment key={comment.id} productData={comment} />)
            }
        </div>
    );
};

export default CommentStudents;