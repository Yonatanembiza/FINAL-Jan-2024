import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sections from './Sections';
import SectionDetails from './SectionDetails';
import UpdateSection from './UpdateSection';
import Students from './Students';
import NotFound from './NotFound';

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Sections />} />
      <Route path="/section/:id" element={<SectionDetails />} />
      <Route path="/section/:id/update" element={<UpdateSection />} />
      <Route path="/students" element={<Students />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default PageRoutes;
