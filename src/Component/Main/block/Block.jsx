import React from 'react';
import s from './Block.module.css';

const Block = (props) => {
    return (
        <div className={s.block/*'app-wrapper-content'*/} style={props.style}>
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