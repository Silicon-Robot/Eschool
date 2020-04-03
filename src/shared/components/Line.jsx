import React from 'react'

import './Line.css';

export default function Line(props) {
    return (
        <div className={`${props.type} statLine`}>
            <h3>{props.data.index}</h3>
            <h3>{props.data.filiere}</h3>
            <h3>{props.data.niveauMax}</h3>
            <input type='button' value='Edit' className='editBtn' />
            <input type='button' value='Delete' className='deleteBtn' />
        </div>
    )
}