import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Componenet/Header/Header';

const Mani = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Mani;