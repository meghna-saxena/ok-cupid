import * as React from 'react';
import axios from 'axios';
import List from '../../partials/List';
import Filters from '../../partials/Filters';
import Header from '../../common/Header';
import './Home.css';

interface IFilterObject {
    photo: string,
    contact: string,
    favorite: string,
    score: string,
    age: string,
    height: string,
    distance: string,
}

interface City {
    name: string
}

interface User {
    age: number,
    city: City,
    compatibility_score: number,
    contacts_exchanged: number,
    display_name: string,
    favourite: boolean,
    height_in_cm: number,
    id: number,
    job_title: string,
    main_photo?: string,
    religion: string
}

interface IState {
    users: Array<User>,
    filteredUsers: Array<User>,
    filters: any
}

export default class Home extends React.Component<{}, IState> {
    state = {
        users: [],
        filteredUsers: [],
        filters: {}
    }

    public async componentDidMount() {
        const response = await axios.get('http://localhost:8080/api/users')
        this.setState({ users: response.data.users })
    }

    private handleFilterChange = (value: any, term: string) => {

        const filteredOption = typeof value !== 'string' ? { min: value[0], max: value[1] } : value

        this.setState({ filters: { ...this.state.filters, [term]: filteredOption } })
    }

    private async handleSearch() {
        const { filters } = this.state;

        const response = await axios.post('http://localhost:8080/api/users/filter', {
            ...filters
        })

        this.setState({ filteredUsers: response.data.users })
    }

    public render() {
        console.log('pleassssee work', this.state.filters)
        const { users, filteredUsers } = this.state;
        let userName = '';
        let userCity = '';

        if (users && users.length > 1) {
            const user: User = users[Math.floor(Math.random() * users.length)];

            userName = user.display_name
            userCity = user.city.name
        }

        // const user: any = users && users[Math.floor(Math.random() * users.length)];
        // const { display_name: userName, city: { name: userCity } } = user;

        const userProfiles = (filteredUsers && filteredUsers.length >= 1) ? filteredUsers : users;

        return (
            <React.Fragment>
                <Header user={userName} city={userCity} />
                <div className="content">
                    <Filters changed={this.handleFilterChange} searched={this.handleSearch.bind(this)} />
                    <List users={userProfiles} />
                </div>
            </React.Fragment>
        );
    }
}




