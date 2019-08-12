import * as React from "react";
import Radio from "../../common/RadioButton";
import RangePicker from "../../common/RangePicker";
import Button from "../../common/Button";
import "./Filters.css";

interface FiltersProps {
  changed?: Function;
  searched?: Function;
}

const Filters: React.FunctionComponent<FiltersProps> = props => {
  const options = ["Yes", "No"];
  const distanceValue = 30;

  const handleFilter = (
    value: string | number | number[],
    term: string
  ): void => {
    const filter = getFilterName(term);

    let option: any = "";

    console.log("handleFilter", value);

    if (value === "Yes") {
      option = true;
    } else if (value === "No") {
      option = false;
    } else {
      option = value;
    }

    if (props.changed) {
      props.changed(option, filter);
    }
  };

  const getFilterName = (term: string): string => {
    const search: any = {
      photo: "has_photo",
      contact: "in_contact",
      favorite: "favourite",
      score: "compatibility_score",
      age: "age",
      height: "height",
      distance: "distance_in_km"
    };

    return search[term];
  };

  const handleSearch = () => {
    console.log("heree");
    const { searched } = props;

    if (searched) {
      searched();
    }
  };

  return (
    <div className="filters">
      <Radio
        label="Photo"
        options={options}
        changed={(value: string) => handleFilter(value, "photo")}
      />
      <Radio
        label="In Contact"
        options={options}
        changed={(value: string) => handleFilter(value, "contact")}
      />
      <Radio
        label="Favorite"
        options={options}
        changed={(value: string) => handleFilter(value, "favorite")}
      />
      <RangePicker
        label="Compatibility Score"
        min={1}
        max={99}
        range={true}
        defaultValue={[1, 99]}
        unit="%"
        changed={(value: number[]) => handleFilter(value, "score")}
      />
      <RangePicker
        label="Age"
        min={18}
        range={true}
        defaultValue={[18, 95]}
        unit="y/o"
        changed={(value: number[]) => handleFilter(value, "age")}
      />
      <RangePicker
        label="Height"
        min={135}
        max={300}
        range={true}
        defaultValue={[135, 210]}
        unit="cm"
        changed={(value: number[]) => handleFilter(value, "height")}
      />
      <RangePicker
        label="Distance"
        min={0}
        max={400}
        range={false}
        defaultValue={distanceValue}
        unit="km"
        changed={(value: number) => handleFilter(value, "distance")}
      />
      {/* <Button text="Search" changed={handleSearch} /> */}
    </div>
  );
};

export default Filters;
