import React from 'react';
import Header from "../components/Header/Header.jsx";
import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.jsx";

const Root = () => {
    return (
        <>
            <Navbar/>
            <Header/>
            <Outlet/>
        </>
    );
};

export default Root;