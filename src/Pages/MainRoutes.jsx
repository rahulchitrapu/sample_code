import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './HomePage';
import LogIn from './LogIn';
import MovieDetail from './MovieDetail';

const MainRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LogIn />} />
    <Route path="/movie/:id" element={<MovieDetail />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default MainRoutes;
