import React from 'react';
import Heading from './Heading';
import UserList from './UserList';

const Home = ({ users }) => {
    return (
        <>
            <Heading />
            <UserList users={users}/>
        </>
    )
};

export default Home;