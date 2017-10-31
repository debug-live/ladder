import React from 'react';
import { Link } from 'react-router-dom';
import { Get } from 'react-axios';

const Home = () => (
    <div>
        <h1>Home</h1>
        <div>
            <Get url="/api/customers/2">
            {(error, response, isLoading) => {
                if(error) {
                    return (<div>Something bad happened: {error.message}</div>)
                }
                else if(isLoading) {
                    return (<div>Loading...</div>)
                }
                else if(response !== null) {
                    const customer = response.data;
                    return (
                        <div>
                        Name: {customer.firstName} <br/>
                        Age: {customer.age}
                        </div>)
                }
                return (<div>Default message before request is made.</div>)
            }}
            </Get>
        </div>
        <h3><Link to='/about'>About us</Link></h3>
    </div>
);

export default Home;