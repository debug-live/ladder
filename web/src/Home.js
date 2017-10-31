import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div>
        <h1>Home</h1>
        <b><Link to='/about'>about us</Link></b>
    </div>
);

export default Home;