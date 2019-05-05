import * as React from 'react';
import Card from '../../common/Card';
import NoPhotoUser from '../../../images/no-photo.png';
import './List.css';

interface ListProps {
  users: any
}

const List: React.FunctionComponent<ListProps> = (props) => {
  const { users } = props;

  const list = users.map((user: any) => {
    const id = user.id;
    const displayName = user.display_name;
    const img = user.main_photo ? user.main_photo : NoPhotoUser;
    const occupation = user.job_title;
    const age = user.age;
    const city = user.city.name;
    const religion = user.religion;
    const favorite = user.favourite;
    const score = user.compatibility_score * 100; /* converting in percentage */
    const contacts = user.contacts_exchanged

    return <Card
      key={id}
      name={displayName}
      image={img} job={occupation}
      age={age}
      city={city}
      religion={religion}
      favorite={favorite}
      score={score}
      contacts={contacts}
    />
  });

  return (
    <div className="list">
      {list}
    </div>
  );
};

export default List;