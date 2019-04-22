import * as React from 'react';
import './Card.css';
import { Star } from '../Star';
import data from '../../../vendors/data.json';

export interface CardProps {
    // btnText: string,
    // content: string,
    // action: Function
    name: string,
    image: string | undefined
}

export function Card(props: CardProps) {
    // const { btnText, content } = props;

    // const clickHandler = () => {
    //     props.action();
    // }

    // const image = data.matches[0].main_photo
    // const name = data.matches[0].display_name;
    // console.log('IMG', image)

    const { name, image } = props;

    return (
        <div className="card">
            <div className="favorite-with-name">
                <Star />
                {name}
            </div>
            <img className="main-img" src={image} />
            {/* <div className="btn-position">
                <button className="action-btn">Click</button>
            </div> */}
        </div>
    );
}

