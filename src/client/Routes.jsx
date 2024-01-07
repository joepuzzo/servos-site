import React from 'react';
import { Routes as RouterRoutes, Route } from 'react-router-dom';

// Components
import { Home } from './pages/Home';
import { About } from './pages/About';

// Routes ------------------------------------------------------------
export const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="unauthorized" element={<NotAuthorized />} />
      <Route path="*" element={<NotFound />} /> */}
    </RouterRoutes>
  );
};
