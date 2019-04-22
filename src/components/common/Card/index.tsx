import * as React from 'react';
import Star from '../Star';
import data from '../../../vendors/data.json';
import './Card.css';

interface CardProps {
    name: string,
    image?: string,
    job: string,
    age: number,
    city?: string,
    religion?: string,
}

const Card: React.FunctionComponent<CardProps> = (props) => {
    const { name, image, job, age, city, religion } = props;

    return (
        <div className="profile-card">
            <Star />
            <span className="profile-name">{name}</span>
            <div className="profile-name">{job}</div>
            <img className="main-profile-img" src={image} />
            <ul className="tags">
                <li className="tag">{city}</li>
                <li className="tag">{age}</li>
                <li className="tag">{religion}</li>
            </ul>
        </div>
    );
};

export default Card;