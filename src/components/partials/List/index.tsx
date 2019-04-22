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

    return <Card key={displayName} name={displayName} image={img} />
  });

  return (
    <div className="list">
      {list}
    </div>
  );
};

export default List;