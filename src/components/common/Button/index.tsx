import * as React from 'react';
import { Button } from 'antd';
import './Button.css';

interface CustomButtonProps {
}

const CustomButton: React.FunctionComponent<CustomButtonProps> = (props) => {
    return (
        <Button className="custom-btn" type="primary">Search</Button>
    );
};

export default CustomButton;