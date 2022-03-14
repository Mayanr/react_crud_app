import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './componenets/Home';
import AddUser from './componenets/AddUser';
import EditUser from './componenets/EditUser';

import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
    return (
        <div style={{maxWidth: "30rem", margin: "4rem auto"}}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/add" element={<AddUser/>} />
                    <Route path="/edit/:id" element={<EditUser/>} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;