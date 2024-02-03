import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Communities from './Communities';
import Community from './Community';
import Properties from './Properties';
import Property from './Property';
import AddProperty from './AddProperty';
import NotFound from './NotFound';
// import Communities from './components/Communities';
// import Community from './components/Community';
// import Properties from './components/Properties';
// import Property from './components/Property';
// import AddProperty from './components/AddProperty';
// import NotFound from './components/NotFound';

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Communities />} />
      <Route path="/communities" element={<Communities />} />
      <Route path="/community/:id" element={<Community />} />
      <Route path="/community/:id/properties" element={<Properties />} />
      <Route path="/property/:id" element={<Property />} />
      <Route path="/add-property" element={<AddProperty />} />
      <Route path="/community/:id/add-property" element={<AddProperty />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default PageRoutes;
