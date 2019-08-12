import * as React from 'react';
import { Slider } from 'antd';
import './RangePicker.css';

interface RangePickerProps {
    label: string,
    defaultValue: number | [number, number],
    unit: string,
    range: boolean,
    min?: number,
    max?: number,
    changed: Function
}

const RangePicker: React.FunctionComponent<RangePickerProps> = (props) => {
    const formatter = (value: number) => {
        const { unit } = props;

        return `${value}${unit}`;
    }

    const handleChange = (values: any): void => {
        const { changed } = props;

        // console.log('RangePicker', values)
        // const min = values[0];
        // const max = values[1];

        changed(values);
    }

    const { label, defaultValue, range, min, max } = props;

    return (
        <fieldset className="custom-radio-field">
            <legend className="custom-legend">{label}</legend>
            <Slider className="custom-slider" min={min} max={max} range={range} defaultValue={defaultValue} tipFormatter={formatter} onChange={handleChange} />
        </fieldset>
    );

};

export default RangePicker;