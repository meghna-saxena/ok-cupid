import * as React from 'react';
import './Star.css';

interface StarProps {
    favorite: boolean,
}

const Star: React.FunctionComponent<StarProps> = (props) => {
    const { favorite } = props;
    const styles = favorite ? "star star-yellow" : "star star-white";

    return <i className={styles}></i>
};

export default Star;