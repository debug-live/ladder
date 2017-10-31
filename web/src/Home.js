import React from 'react';
import { Link } from 'react-router-dom';
import { withAxios } from 'react-axios';

const Home = withAxios(class MyComponentImpl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {firstName: '', age: 0};

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeAge  = this.handleChangeAge.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        this.props.axios('/api/customers/2').then(result => {
            this.setState(result.data);
        })
    }

    handleChangeName(event) {
        // alert(event.target.age);
        this.setState({firstName: event.target.value});
    }

    handleChangeAge(event) {
        // alert(event.target.age);
        this.setState({age: event.target.value});
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
                            <input value={this.state.firstName} onChange={this.handleChangeName}/>
                        </label>
                        <br/>
                        <label>
                            Age:
                            <input type="number" value={this.state.age} onChange={this.handleChangeAge}/>
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