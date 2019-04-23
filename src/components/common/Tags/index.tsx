import * as React from 'react';
import './Tags.css';

interface TagsProps {
    score: number
}

const Tags: React.FunctionComponent<TagsProps> = (props) => {
    const {score} = props;

    return (
        <div className="score-label">
           {score}%
        </div>
    );
};

export default Tags;