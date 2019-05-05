import * as React from 'react';
import { Slider, Switch } from 'antd';
import './RangePicker.css';
import { number } from 'prop-types';

export interface RangePickerProps {
    label: string,
    defaultValue: number | [number, number],
    unit: string,
    range: boolean,
    min?: number,
    max?: number,
    changed: Function
}

export interface RangePickerState {
    disabled: boolean
}

export default class RangePicker extends React.Component<RangePickerProps, RangePickerState> {
    constructor(props: RangePickerProps) {
        super(props);

        this.state = {
            disabled: false,
        }
    }

    private handleDisabledChange = (disabled: boolean) => {
        this.setState({ disabled });
    }

    private formatter = (value: number) => {
        const { unit } = this.props;

        return `${value}${unit}`;
    }

    private handleChange = (e: any) => {
        const { changed } = this.props;

        console.log('PROPSSSS', this.props)
        const min = e[0];
        const max = e[1];

        // changed(min, max);
         changed(e);
    }

    public render() {
        const { disabled } = this.state;
        const { label, defaultValue, range, min, max } = this.props;

        return (
            <fieldset className="custom-radio-field">
                <legend className="custom-legend">{label}</legend>
                <Slider className="custom-slider" min={min} max={max} range={range} defaultValue={defaultValue} disabled={disabled} tipFormatter={this.formatter} onChange={this.handleChange} />
            </fieldset>
        );
    }
}


