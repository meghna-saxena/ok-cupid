import * as React from 'react';
import './RadioButton.css';

export interface RadioProps {
    label: string,
    options: string[],
}

export function Radio(props: RadioProps) {
    const { label, options } = props;

    const value = options.map(option => {
        return (
            <>
                <label>
                    <input name={label} type="radio" checked />
                    <span className="custom-radio-options">{option}</span>
                </label>
            </>
        )
    })

    return (
        <React.Fragment>
            <fieldset className="custom-radio-field">
                <legend className="custom-legend">{label}</legend>
                {/* <br /> */}
                {/* <input name="group1" type="radio" checked />
                    <span>{bla}</span> */}
                {value}
            </fieldset>
        </React.Fragment>
    );
}
