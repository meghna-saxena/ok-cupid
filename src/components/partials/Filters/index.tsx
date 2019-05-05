import * as React from 'react';
import Radio from '../../common/RadioButton';
import RangePicker from '../../common/RangePicker';
import Button from '../../common/Button';
import './Filters.css';

interface FiltersProps {
  changed?: Function
}

const Filters: React.FunctionComponent<FiltersProps> = (props) => {
  const options = ['All', 'Yes', 'No'];
  const distanceValue = 30

  // const handleOptionChange = (e: any, term: string) => {
  //   if (props.changed) {
  //     props.changed(e, term)
  //   }
  // }

  // const handleSliderChange = (min: number, max: number, term: string) => {
  //   console.log('CHNAGEDDD', min, max, term)
  //   if (props.changed) {
  //     props.changed(min, max, term)
  //   }
  // }

  const handleFilter = (value: any, term: string) => {
    console.log('CHNAGEDDD', value, term)

    if (props.changed) {
      props.changed(value, term)
    }
  }

  return (
    <div className="filters">
      <Radio label="Photo" options={options} changed={(value: any) => handleFilter(value, 'photo')} />
      <Radio label="In Contact" options={options} changed={(value: any) => handleFilter(value, 'contact')} />
      <Radio label="Favorite" options={options} changed={(value: any) => handleFilter(value, 'favorite')} />
      {/* <RangePicker
        label="Compatibility Score"
        min={1}
        max={99}
        range={true}
        defaultValue={[1, 99]}
        unit='%'
        changed={(min: number, max: number) => handleSliderChange(min, max, 'score')}
      />
      <RangePicker
        label="Age"
        min={18}
        range={true}
        defaultValue={[18, 95]}
        unit='y/o'
        changed={(min: number, max: number) => handleSliderChange(min, max, 'age')}
      />
      <RangePicker
        label="Height"
        min={135}
        max={300}
        range={true}
        defaultValue={[135, 210]}
        unit='cm'
        changed={(min: number, max: number) => handleSliderChange(min, max, 'height')}
      />
      <RangePicker
        label="Distance"
        min={0}
        max={400}
        range={false}
        defaultValue={distanceValue}
        unit='km'
        changed={(min: number, max: number) => handleSliderChange(min, max, 'distance')}
      /> */}

<RangePicker
        label="Compatibility Score"
        min={1}
        max={99}
        range={true}
        defaultValue={[1, 99]}
        unit='%'
        changed={(value: any) => handleFilter(value, 'score')}
      />
      <RangePicker
        label="Age"
        min={18}
        range={true}
        defaultValue={[18, 95]}
        unit='y/o'
        changed={(value: any) => handleFilter(value, 'age')}
      />
      <RangePicker
        label="Height"
        min={135}
        max={300}
        range={true}
        defaultValue={[135, 210]}
        unit='cm'
        changed={(value: any) => handleFilter(value, 'height')}
      />
      <RangePicker
        label="Distance"
        min={0}
        max={400}
        range={false}
        defaultValue={distanceValue}
        unit='km'
        changed={(value: any) => handleFilter(value, 'distance')}
      />
      <Button />
    </div>
  );
};

export default Filters;