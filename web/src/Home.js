import React from 'react';
import { Link } from 'react-router-dom';
import { Get, withAxios } from 'react-axios';

const Home = withAxios(class MyComponentImpl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {firstName: ''};

        this.handleChangeName = this.handleChangeName.bind(this);
        // this.handleChangeAge  = this.handleChangeAge.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        this.props.axios('/api/customers/2').then(result => {
            this.setState(result.data);
        })
    }

    handleChangeName(event) {
        // alert(event.target.age);
        this.setState({firstName: event.target.firstName});
    }

    // handleChangeAge(event) {
    //     // alert(event.target.age);
    //     this.setState({age: event.target.age});
    // }

    handleSubmit() {
        alert(this.state.firstName);
    }

    render() {
        return (
            <div>
                <h5>User info</h5>
                <div>
                    <Get url="/api/customers/2">
                        {(error, response, isLoading) => {
                            if (error) {
                                return (<div>Something bad happened: {error.message}</div>)
                            }
                            else if (isLoading) {
                                return (<div>Loading...</div>)
                            }
                            else if (response !== null) {
                                return (
                                    <div>
                                        <form onSubmit={this.handleSubmit}>
                                            <label>
                                                Name:
                                                <input type="text" value={this.state.firstName} onChange={this.handleChangeName}/>
                                            </label>
                                            <br/>
                                            {/*<label>*/}
                                                {/*Age:*/}
                                                {/*<input type="text" value={this.state.age} onChange={this.handleChangeAge}/>*/}
                                            {/*</label>*/}
                                            <br/>
                                            <input type="submit" value="Submit"/>
                                        </form>
                                    </div>)
                            }
                            return (<div>Default message before request is made.</div>)
                        }}
                    </Get>
                </div>

                <h3><Link to='/about'>About us</Link></h3>
            </div>
        );
    }
});


export default Home;