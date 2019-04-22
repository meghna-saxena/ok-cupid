import * as React from 'react';
import Star from '../Star';
import data from '../../../vendors/data.json';
import './Card.css';

interface CardProps {
    name: string,
    image?: string
}

const Card: React.FunctionComponent<CardProps> = (props) => {
    const { name, image } = props;

    return (
        <div className="profile-card">
            <div className="favorite-with-name">
                <Star />
                {name}
            </div>
            <img className="main-profile-img" src={image} />
        </div>
    );
};

export default Card;