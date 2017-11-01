import React from 'react';
import { Link } from 'react-router-dom';
import { withAxios } from 'react-axios';

const Home = withAxios(class MyComponentImpl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        this.props.axios('/api/customers').then(result => {
            this.setState({customer: result.data});
        })
    }

    render() {
        return (
            <div>
                <h3>User List</h3>
                <h5><Link to='/customer/6'>customer 6</Link></h5>
                <h5><Link to='/about'>About us</Link></h5>
            </div>
        );
    }
});

export default Home;