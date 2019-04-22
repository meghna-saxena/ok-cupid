import * as React from 'react';
import { List } from '../../common/List';
import { Filters } from '../../common/Filters';
import './Home.css';

export interface HomeProps {
}

export interface HomeState {
}

export default class Home extends React.Component<HomeProps, HomeState> {
    constructor(props: HomeProps) {
        super(props);

        this.state = {

        }
    }

    public render() {
        return (
            <div className="home-container">
                {/* <h1>Tinder</h1> */}
                <Filters />
                <List />
            </div>
        );
    }
}




