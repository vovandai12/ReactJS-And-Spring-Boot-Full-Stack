import React from 'react';
import '../assets/scss/App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from './admin/Layout';
import HomeAdmin from './admin/home/HomeComponent';
import ListUserAdmin from './admin/users/UserListComponent'
import RegisterAdmin from './admin/auth/RegisterComponent';
import Shop from './shop/Layout';

function App() {
    return (
        <>
            <BrowserRouter>

                <Routes>

                    <Route element={<Admin />}>
                        <Route path="/home" element={<HomeAdmin />} />
                        <Route path="/users" element={<ListUserAdmin />} />
                        <Route path="/register" element={<RegisterAdmin />} />
                    </Route>

                    <Route element={<Shop />}>
                    </Route>

                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;