import * as React from 'react';
import Star from '../Star';
import Tags from '../Tags';
import './Card.css';

interface CardProps {
    name: string,
    image?: string,
    job: string,
    age: number,
    city: string,
    religion: string,
    favorite: boolean,
    score: number,
}

const Card: React.FunctionComponent<CardProps> = (props) => {
    const { name, image, job, age, city, religion, favorite, score } = props;

    return (
        <div className="profile-card">
            <Star favorite={favorite} />
            <Tags score={score} />
            <span className="profile-name">{name}</span>
            <div>{job}</div>
            <img className="main-profile-img" src={image} />
            <ul className="tags">
                <li className="tag">{city}</li>
                <li className="tag">{age} y/o</li>
                <li className="tag">{religion}</li>
            </ul>
        </div>
    );
};

export default Card;