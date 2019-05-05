import * as React from 'react';
import './RadioButton.css';
import data from '../../../vendors/data.json';

interface RadioProps {
    label: string,
    options: string[],
    changed: Function
}

const Radio: React.FunctionComponent<RadioProps> = (props) => {
    const { label, options, changed } = props;

    const handleChange = (e: any) => {
        const { changed } = props;
        const value = e.target.value;


        changed(value, null);

    }

    const value = options.map(option => {
        return (
            <label key={option}>
                {/* <input name={label}  type="radio" />
                    <span className="custom-radio-options">{option}</span> */}

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