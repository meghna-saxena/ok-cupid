import * as React from 'react';
import './RadioButton.css';

interface RadioProps {
    label: string,
    options: string[],
}

const Radio: React.FunctionComponent<RadioProps> = (props) => {
    const { label, options } = props;

    const value = options.map(option => {
        return (
            // <>
                <label key={option}>
                    <input name={label} type="radio" />
                    <span className="custom-radio-options">{option}</span>
                </label>
            // </>
        )
    })

    return (
        <React.Fragment>
            <fieldset className="custom-radio-field">
                <legend className="custom-legend">{label}</legend>
                {value}
            </fieldset>
        </React.Fragment>
    );
}

export default Radio;