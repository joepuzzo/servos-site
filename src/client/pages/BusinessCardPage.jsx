import React from 'react';
import { BusinessCard3D } from '../components/BusinessCard3D';

export const BusinessCardPage = () => {
  return (
    <div 
      className="business-card-page"
      style={{ 
        width: '100vw', 
        height: '100vh', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        overflow: 'hidden',
        margin: 0,
        padding: 0,
        position: 'fixed',
        top: 0,
        left: 0
      }}
    >
      <div style={{ width: '100%', height: '100%' }}>
        <BusinessCard3D />
      </div>
    </div>
  );
};

