import React from 'react';
import Home from '../pages/home/home';
import { Route, Routes } from 'react-router-dom';

export default function RouterConfig()
{
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
        </Routes>
    );
}