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
      <RangePicker label="Compatibility Score" range={true} defaultValue={[1, 99]}  unit='%' />
      <RangePicker label="Age" range={true} defaultValue={[18, 95]}  unit='y/o' />
      <RangePicker label="Height" min={0} max={300} range={true} defaultValue={[135, 210]}  unit='cm' />
      <RangePicker label="Distance" min={0} max={400} range={false} defaultValue={distanceValue} unit='km' /> 
    </div>
  );
}
