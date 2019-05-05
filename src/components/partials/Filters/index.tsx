import * as React from 'react';
import Radio from '../../common/RadioButton';
import RangePicker from '../../common/RangePicker';
import Button from '../../common/Button';
import './Filters.css';

interface FiltersProps {
  changed?: Function
}

const Filters: React.FunctionComponent<FiltersProps> = (props) => {
  const options = ['Yes', 'No'];
  const distanceValue = 30


  const handleChange = (e: any, term: string) => {
    if (props.changed) {
      props.changed(e, term)
    }
  }

  return (
    <div className="filters">
      <Radio label="Photo" options={options} changed={(e: any) => handleChange(e, 'photo')} />
      <Radio label="In Contact" options={options} changed={(e: any) => handleChange(e, 'contact')} />
      <Radio label="Favorite" options={options} changed={(e: any) => handleChange(e, 'favorite')} />
      <RangePicker label="Compatibility Score" min={1} max={99} range={true} defaultValue={[1, 99]} unit='%' />
      <RangePicker label="Age" min={18} range={true} defaultValue={[18, 95]} unit='y/o' />
      <RangePicker label="Height" min={135} max={300} range={true} defaultValue={[135, 210]} unit='cm' />
      <RangePicker label="Distance" min={0} max={400} range={false} defaultValue={distanceValue} unit='km' />
      <Button />
    </div>
  );
};

export default Filters;