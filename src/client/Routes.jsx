import React from 'react';
import { Routes as RouterRoutes, Route } from 'react-router-dom';

// Components
import { Home } from './pages/Home';
import { About } from './pages/About';
import { BusinessCardPage } from './pages/BusinessCardPage';
import { NotFound } from './NotFound';

// Routes ------------------------------------------------------------
export const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/business-card" element={<BusinessCardPage />} />
      {/* <Route path="unauthorized" element={<NotAuthorized />} /> */}
      <Route path="*" element={<NotFound />} />
    </RouterRoutes>
  );
};
