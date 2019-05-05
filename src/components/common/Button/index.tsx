import * as React from 'react';
import { Button } from 'antd';
import './Button.css';


interface CustomButtonProps {
    text: string
    changed: Function
}

const CustomButton: React.FunctionComponent<CustomButtonProps> = (props) => {
    const { text } = props;

    const handleClick = () => {
        const { changed } = props;

        changed();
    }

    return (
        <Button className="custom-btn" type="primary" onClick={handleClick}>{text}</Button>
    );
};

export default CustomButton;