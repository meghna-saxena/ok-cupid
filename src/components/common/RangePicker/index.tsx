import * as React from 'react';
import { Slider, Switch } from 'antd';
import './RangePicker.css';
import { number } from 'prop-types';

export interface RangePickerProps {
    defaultValue: number | [number, number],
    unit: string,
    range: boolean,
    min?: number,
    max?: number,   
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

    handleDisabledChange = (disabled: any) => {
        this.setState({ disabled });
    }

    formatter = (value: number) => {
        const { unit } = this.props;

        return `${value}${unit}`;
    }

    public render() {
        const { disabled } = this.state;
        const { defaultValue, range, min, max } = this.props;

        return (
            <div>
                <Slider min={min} max={max} range={range} defaultValue={defaultValue} disabled={disabled} tipFormatter={this.formatter} />
            </div>
        );
    }
}


