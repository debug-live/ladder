import React from 'react';
import { Link } from 'react-router-dom';
import { withAxios } from 'react-axios';

const Home = withAxios(class MyComponentImpl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {firstName: '', age: 0};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        this.props.axios('/api/customers/2').then(result => {
            this.setState(result.data);
        })
    }

    handleChange(event) {
        // this.state[event.target.name] = event.target.value;
        this.setState({firstName: event.target.value});
    }

    handleSubmit() {
        alert(this.state.firstName);
    }

    render() {
        return (
            <div>
                <h5>User info</h5>

                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Name:
                            <input value={this.state.firstName} onChange={this.handleChange}/>
                        </label>
                        <br/>
                        <label>
                            Age:
                            <input type="number" value={this.state.age} onChange={this.handleChange}/>
                        </label>
                        <br/>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>

                <h3><Link to='/about'>About us</Link></h3>
            </div>
        );
    }
});

export default Home;