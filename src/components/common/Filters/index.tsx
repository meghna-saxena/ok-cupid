import * as React from 'react';
import Radio from '../RadioButton';
import RangePicker from '../RangePicker';
import './Filters.css';

interface FiltersProps {
}

const Filters: React.FunctionComponent<FiltersProps> = (props) => {
  const options = ['Yes', 'No'];
  const distanceValue = 30

  return (
    <div className="filters">
      <Radio label="Photo" options={options} />
      <Radio label="In Contact" options={options} />
      <Radio label="Favorite" options={options} />
      <RangePicker label="Compatibility Score" min={1} max={99} range={true} defaultValue={[1, 99]}  unit='%' />
      <RangePicker label="Age" min={18} range={true} defaultValue={[18, 95]}  unit='y/o' />
      <RangePicker label="Height" min={135} max={300} range={true} defaultValue={[135, 210]}  unit='cm' />
      <RangePicker label="Distance" min={0} max={400} range={false} defaultValue={distanceValue} unit='km' /> 
    </div>
  );
};

export default Filters;