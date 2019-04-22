import * as React from 'react';
import { Card } from '../Card';
import './List.css';
import data from '../../../vendors/data.json';

export interface ListProps {
}

export function List(props: ListProps) {

  // const image = data.matches.filter(el => el)
  const name = data.matches.map(el => {
    const displayName = el.display_name;
    const img = el.main_photo
    return <Card key={displayName} name={displayName} image={img} />
  }


  );

  return (
    <div className="list">
      {/* <Card name={name} /> */}
      {name}
    </div>
  );
}
