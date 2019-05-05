import * as React from 'react';
import Card from '../../common/Card';
import NoPhotoUser from '../../../images/no-photo.png';
import './List.css';

interface ListProps {
  users: any
}

const List: React.FunctionComponent<ListProps> = (props) => {
  const { users } = props;

  const list = users.map((el: any) => {
    const id = el.id;
    const displayName = el.display_name;
    const img = el.main_photo ? el.main_photo : NoPhotoUser;
    const occupation = el.job_title;
    const age = el.age;
    const city = el.city.name;
    const religion = el.religion;
    const favorite = el.favourite;
    const score = el.compatibility_score * 100; /* converting in percentage */

    return <Card
      key={id}
      name={displayName}
      image={img} job={occupation}
      age={age}
      city={city}
      religion={religion}
      favorite={favorite}
      score={score}
    />
  });

  return (
    <div className="list">
      {list}
    </div>
  );
};

export default List;