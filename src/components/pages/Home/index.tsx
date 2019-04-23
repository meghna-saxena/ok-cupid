import * as React from 'react';
import List from '../../partials/List';
import Filters from '../../partials/Filters';
import Header from '../../common/Header';
import data from '../../../vendors/data.json';
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
        const user = data.matches[Math.floor(Math.random() * data.matches.length)];
        const { display_name: userName, city: { name: userCity } } = user;

        return (
            <React.Fragment>
                <Header user={userName} city={userCity} />
                <div className="content">
                    <Filters />
                    <List />
                </div>
            </React.Fragment>
        );
    }
}




