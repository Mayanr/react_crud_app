import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './componenets/Home';
import AddUser from './componenets/AddUser';
import EditUser from './componenets/EditUser';

import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {
    state = { 
        users: [
            { id: 1, name: 'Shelly' },
            { id: 2, name: 'Dave' },
            { id: 3, name: 'Niki' }
        ]
    };

    removeUser = id => {
        console.log('remove the user', id)
    }

    onEditUser = () => {
        console.log('update user');
    };

    onAddUser = name => {
        console.log('add user', name);
        const newUser = {
            id: Math.floor(Math.random()),
            name: name
        };
        const users = this.state.users;
        users.push(newUser);
        this.setState(users);
        console.log(this.state);
    };

    render () {
        return (
            <div style={{maxWidth: "30rem", margin: "4rem auto"}}>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home users={this.state.users} removeUser={this.removeUser} />}/>
                        <Route path="/add" element={<AddUser onAddUser={this.onAddUser} />} />
                        <Route path="/edit/:id" element={<EditUser onEditUser={this.onEditUser} />} />
                    </Routes>
                </Router>
            </div>
        );
    }
};

export default App;