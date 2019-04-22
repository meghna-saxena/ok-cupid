import * as React from 'react';
import { Radio } from '../RadioButton';
import RangePicker from '../RangePicker';
import './Filters.css';

export interface FiltersProps {
}

export function Filters(props: FiltersProps) {
  const options = ['Yes', 'No'];
  const distanceValue = 30

  return (
    <div className="filters">
      <p className="title">Find Your Match</p>
      <Radio label="Photo" options={options} />
      <Radio label="In Contact" options={options} />
      <Radio label="Favorite" options={options} />
      <RangePicker range={true} defaultValue={[1, 99]}  unit='%' />
      <RangePicker range={true} defaultValue={[18, 95]}  unit='y/o' />
      <RangePicker min={0} max={300} range={true} defaultValue={[135, 210]}  unit='cm' />
      <RangePicker min={0} max={400} range={false} defaultValue={distanceValue} unit='km' /> 
    </div>
  );
}
