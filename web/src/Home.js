import React from 'react';
import { Link } from 'react-router-dom';
import { withAxios } from 'react-axios';
import axios from 'axios';

const Home = withAxios(class MyComponentImpl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {customer: { // fixme
            firstName: '',
            age: 0
        }};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        this.props.axios('/api/customers/5').then(result => {
            this.setState({customer: result.data});
        })
    }

    // bad performance
    handleChange(event) {
        let customer = Object.assign({}, this.state.customer);
        customer[event.target.name] = event.target.value;
        // alert(event.target);
        this.setState({customer: customer});
    }

    handleSubmit(event) {
        event.preventDefault();

        // var f = document.querySelector('form');
        // let fd = new FormData();
        // fd.append('aa', 11);
        // console.log(f);
        //
        // fetch("/api/customers", {
        //     method: 'POST',
        //     // headers: {'Content-Type':'application/json'},
        //     body: new FormData(f)
        // }).then(response => response.json())
        //     .then(data => console.log(data))
        //     .catch(e => console.log("Oops, error", e));

        axios.put('/api/customers/5', this.state.customer)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <h5>User info</h5>

                <div>
                    <form id='xxx' onSubmit={this.handleSubmit}>
                        <label>
                            Name:
                            <input type="text" name='firstName' value={this.state.customer.firstName} onChange={this.handleChange}/>
                        </label>
                        <br/>
                        <label>
                            Age:
                            <input type="number" name='age' value={this.state.customer.age} onChange={this.handleChange}/>
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