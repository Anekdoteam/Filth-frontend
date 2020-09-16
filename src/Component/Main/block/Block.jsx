import React from 'react';
import s from './Block.module.css';

const Block = (props) => {
    console.log(Block);
    return (
        <div className={s.block/*'app-wrapper-content'*/}>
            <h4>
                {props.title}
            </h4>
            <p>
                {props.content}
            </p>
        </div>
    );
}

export default Block;