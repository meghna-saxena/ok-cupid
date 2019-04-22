import * as React from 'react';
import Card from '../../common/Card';
import NoPhotoUser from '../../../images/no-photo.png';
import './List.css';
import data from '../../../vendors/data.json';

interface ListProps {
}

const List: React.FunctionComponent<ListProps> = (props) => {
  const list = data.matches.map(el => {
    const displayName = el.display_name;
    const img = el.main_photo ? el.main_photo : NoPhotoUser;
    const occupation = el.job_title;
    const age = el.age;
    const city = el.city.name;
    const religion = el.religion;
    const favorite = el.favourite;

    return <Card
      key={displayName}
      name={displayName}
      image={img} job={occupation}
      age={age}
      city={city}
      religion={religion}
      favorite={favorite}
    />
  });

  return (
    <div className="list">
      {list}
    </div>
  );
};

export default List;