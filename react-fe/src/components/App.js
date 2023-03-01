import React from 'react';
import '../assets/scss/App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from './admin/Layout';
import Home from './admin/home/HomeComponent';
import ListUser from './admin/users/UserListComponent'
import Shop from './shop/Layout';

function App() {
    return (
        <>
            <BrowserRouter>

                <Routes>

                    <Route element={<Admin />}>
                        <Route path="/home" element={<Home />} />
                        <Route path="/users" element={<ListUser />} />
                    </Route>

                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;