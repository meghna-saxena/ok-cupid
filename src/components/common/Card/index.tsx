import * as React from 'react';
import './Card.css';
import { Star } from '../Star';
import data from '../../../vendors/data.json';

export interface CardProps {
    // btnText: string,
    // content: string,
    // action: Function
}

export function Card(props: CardProps) {
    // const { btnText, content } = props;

    // const clickHandler = () => {
    //     props.action();
    // }

    const image = data.matches[0].main_photo

    console.log('IMG', image)
    return (
        <div className="card">
            <Star />
            {/* Here is a text. */}
            <img className="main-img" src={image} />
            {/* <div className="btn-position">
                <button className="action-btn">Click</button>
            </div> */}
        </div>
    );
}

