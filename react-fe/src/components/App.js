import React from 'react';
import '../assets/scss/App.scss';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from './admin/Layout';
import HomeAdmin from './admin/home/HomeComponent';
import ListUserAdmin from './admin/users/UserListComponent'
import RegisterAdmin from './admin/auth/RegisterComponent';
import ChangeInformationComponent from './admin/auth/ChangeInformationComponent';
import Shop from './shop/Layout';

function App() {
    return (
        <>
            <BrowserRouter>

                <Routes>

                    <Route element={<Admin />}>
                        <Route path="" element={<HomeAdmin />} />
                        <Route path="/users" element={<ListUserAdmin />} />
                        <Route path="/register" element={<RegisterAdmin />} />
                        <Route path="/change-information" element={<ChangeInformationComponent />} />
                    </Route>

                    <Route element={<Shop />}>
                    </Route>

                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;