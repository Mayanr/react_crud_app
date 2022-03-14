import React from 'react';

import UserItem from './UserItem';

const UserList = ({ users, removeUser }) => {
    console.log(users)
    const renderedUsers = users.map(user => {
        return <UserItem key={user.id} user={user} removeUser={removeUser}/>
    })
    return (
        <div>
            {renderedUsers}
        </div>
    )
};

export default UserList;