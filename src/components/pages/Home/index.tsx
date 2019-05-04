import * as React from 'react';
import List from '../../partials/List';
import Filters from '../../partials/Filters';
import Header from '../../common/Header';
import data from '../../../vendors/data.json';
import './Home.css';
import axios from 'axios';

export interface HomeProps {
}

export interface HomeState {
    users: any
}

export default class Home extends React.Component<HomeProps, HomeState> {
    constructor(props: HomeProps) {
        super(props);

        this.state = {
            users: []
        }
    }

    public componentDidMount() {
        axios.get('http://localhost:8080/api/users')
            .then(response => {
                this.setState({ users: response.data.users })
            });
    }

    public render() {
        const { users } = this.state;

        console.log('DATA', data.matches)
        console.log('USERS', users)

        const bla = users[Math.floor(Math.random() * users.length)];
        console.log('BLA', bla)

        const user = data.matches[Math.floor(Math.random() * data.matches.length)];
        const { display_name: userName, city: { name: userCity } } = user;

        return (
            <React.Fragment>
                <Header user={userName} city={userCity} />
                <div className="content">
                    <Filters />
                    <List users={users} />
                </div>
            </React.Fragment>
        );
    }
}




