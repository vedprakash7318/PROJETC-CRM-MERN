import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './Pages/Login';
import MainPage from './Pages/MainPage';
import Profile from './Pages/Profile';
import SupperDashbaord from './Pages/SupperAdmin/SupperDashbaord';
import Country from './Pages/SupperAdmin/Country';

import ProtectedRoute from './Pages/ProtectedRoute';
import State from './Pages/SupperAdmin/State';
import City from './Pages/SupperAdmin/City';
import Leads from './Pages/Admin/Leads';


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path='/' element={<Login />} />

        {/* Protected Routes */}
        <Route
          path='/main-page'
          element={
            <ProtectedRoute>
              <MainPage />
            </ProtectedRoute>
          }
        />

        <Route
          path='/profile'
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Supper admin Routes */}
        <Route
          path='/supper-dashboard'
          element={
            <ProtectedRoute>
              <SupperDashbaord />
            </ProtectedRoute>
          }
        />



        <Route
          path='/country'
          element={
            <ProtectedRoute>
              <Country />
            </ProtectedRoute>
          }
        />

        <Route
          path='/state'
          element={
            <ProtectedRoute>
              <State />
            </ProtectedRoute>
          }
        />

        <Route
          path='/city'
          element={
            <ProtectedRoute>
              <City />
            </ProtectedRoute>
          }
        />





        {/* Admin routes */}



        <Route
          path='/leads'
          element={
            <ProtectedRoute>
              <Leads />
            </ProtectedRoute>
          }
        />


      </Routes>
    </Router>
  );
};

export default App;
