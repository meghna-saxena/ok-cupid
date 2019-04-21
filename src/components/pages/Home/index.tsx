import * as React from 'react';
import { Card } from '../../common/Card';

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
            <div>
                <h1>Tinder</h1>
                <Card />
            </div>
        );
    }
}




