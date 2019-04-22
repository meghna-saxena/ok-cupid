import * as React from 'react';
import {Radio} from '../RadioButton';
import './Filters.css';

export interface FiltersProps {
}

export function Filters(props: FiltersProps) {
  const options = ['Yes', 'No'];

  return (
    <div className="filters">
      <h1>Find Your Match</h1>
      <Radio label="Photo" options={options}  />
      <Radio label="In Contact" options={options}  />
      <Radio label="Favorite" options={options}  />
    </div>
  );
}
