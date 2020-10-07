import React from 'react';

import Directory from "../../components/directory/directory.component";

import './homepage.styles.scss';
/*
* Functional component - we do not need any lifecycle methods nor need to store any state yet
*/
const HomePage = () => (
    <div className='homepage'>
        <Directory />
    </div>
)

export default HomePage;