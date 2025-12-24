import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import VenuesPage from './components/VenuesPage';
import CakePage from './components/CakePage';
import DJ from './components/DJ';
import DecorPage from './components/DecorPage';
import PhotographersPage from './components/PhotographersPage';
import VenueOwnerPage from './components/VenueOwnerPage';
import AdminPage from './components/AdminPage';


AdminPage

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/VenuesPage" element={<VenuesPage />} />
      <Route path="/CakePage" element={<CakePage />} />
      <Route path="/DJ" element={<DJ />} />
      <Route path="/DecorPage" element={<DecorPage />} /> 
      <Route path="/PhotographersPage" element={<PhotographersPage />} /> 
      <Route path="/VenueOwnerPage" element={<VenueOwnerPage />} /> 


    </Routes>
  );
}
export default App;
