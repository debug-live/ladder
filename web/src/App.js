import React, { Component } from 'react';
import './App.css';
import FormComp from './formComp';

class App extends Component {
  render() {
    return (
        <div>
            <div className="App">
                <header className="App-header">
                  <h1 className="App-title">Welcome to xx</h1>
                </header>
            </div>
            <div>
                <FormComp/>
            </div>
        </div>
    );
  }
}

export default App;
