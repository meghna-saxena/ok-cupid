import * as React from 'react';
import './RadioButton.css';

interface RadioProps {
    label: string,
    options: string[],
    changed: Function
}

const Radio: React.FunctionComponent<RadioProps> = (props) => {
    const { label, options } = props;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { changed } = props;
        const value = event.target.value;

        changed(value);
    }

    const value = options.map(option => {
        return (
            <label key={option}>
                <input name={label} value={option} type="radio" onChange={handleChange} />
                <span className="custom-radio-options">{option}</span>
            </label>
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