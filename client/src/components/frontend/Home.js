import React from 'react';
import { Redirect } from 'react-router-dom';

import './Home.css';

const Home = () => {
    return <Redirect to="/appellant/login"></Redirect>;
};

export default Home;
