import React from 'react';
import { Link } from 'react-router-dom';
import { withAxios } from 'react-axios';

class CustomerList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {customer: []};
    }

    componentWillMount() {
        this.props.axios('/api/customers').then(result => {
            this.setState({customer: result.data});
        })
    }

    render() {
        let customers = this.state.customer;

        return (
            <div>
                <h3>User List</h3>
                <ol>
                {
                    customers.map(x => (
                        <li key={x.id}><Link to={`/customer/${x.id}`}>{x.firstName}</Link></li>
                    ))
                }
                </ol>
                <h5><Link to='/about'>About us</Link></h5>
            </div>
        );
    }
}

export default withAxios(CustomerList);