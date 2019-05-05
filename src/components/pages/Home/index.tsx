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
    users: any,
    filteredUsers: any
}

export default class Home extends React.Component<HomeProps, HomeState> {
    constructor(props: HomeProps) {
        super(props);

        this.state = {
            users: [],
            filteredUsers: []
        }
    }

    public async componentDidMount() {
        const response = await axios.get('http://localhost:8080/api/users')
        this.setState({ users: response.data.users })
    }

    private handleChange = (value: any, term: string) => {
        console.log('VALUE', value)
        console.log('TERM', term)

        // if (term === 'photo' && value === 'Yes') {
        //     const withPhoto = this.state.users.filter((el: any) => {
        //         return el.main_photo
        //     });
        //     this.setState({ filteredUsers: withPhoto })
        // } else if (term === 'photo' && value === 'No') {
        //     const withoutPhoto = this.state.users.filter((el: any) => {
        //         return el.main_photo == undefined
        //     });
        //     this.setState({ filteredUsers: withoutPhoto })
        // }
    }

    public render() {
        const { users, filteredUsers } = this.state;

        const user = data.matches[Math.floor(Math.random() * data.matches.length)];
        const { display_name: userName, city: { name: userCity } } = user;

        return (
            <React.Fragment>
                <Header user={userName} city={userCity} />
                <div className="content">
                    <Filters changed={this.handleChange} />
                    <List users={(filteredUsers && filteredUsers.length > 1) ? filteredUsers : users} />
                </div>
            </React.Fragment>
        );
    }
}




