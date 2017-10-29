import React, { Component } from 'react';
import './App.css';
import Checkbox from 'react-form';

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
                <form>
                    <Checkbox name="name1" label="name1"></Checkbox>
                    <Checkbox name="name1" label="name1"></Checkbox>
                    <Checkbox name="name1" label="name1"></Checkbox>
                </form>

            </div>
        </div>
    );
  }
}

export default App;
