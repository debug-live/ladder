import React from 'react';
import { Link } from 'react-router-dom';
import { withAxios } from 'react-axios';
// import axios from 'axios';

class CustomerDetail extends React.Component {
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

        let id = this.props.match.params.id;
        this.url = `/api/customers/${id}`;

        this.props.axios(this.url).then(result => {
            this.setState({customer: result.data});
        })
    }

    // POST:  URL=/api/customers, DATA
    // GET:   URL=/api/customers/:id
    // PUT:   URL=/api/customers/:id DATA
    // DELETE:URL=/api/customers/:id

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

        this.props.axios.put(this.url, this.state.customer)
            .then(response => {
                this.props.history.push('/build-status');
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <h5>User info</h5>

                <div>
                    <form onSubmit={this.handleSubmit}>
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
}

export default withAxios(CustomerDetail);