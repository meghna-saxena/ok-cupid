import * as React from 'react';
import Home from './components/pages/Home';
import './App.css';

export default class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}