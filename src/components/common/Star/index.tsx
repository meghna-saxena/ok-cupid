import * as React from 'react';
import './Star.css';

export interface StarProps {
}

export function Star(props: StarProps) {
    return (
        <p>
            <i className="star"></i>
        </p>
    );
}
