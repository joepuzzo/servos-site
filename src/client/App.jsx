import React from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { defaultTheme, Provider } from '@adobe/react-spectrum';

// Hooks
import useApp from './hooks/useApp';

// Components
import { Header } from './Header';
import { Footer } from './Footer';
import { Routes } from './Routes';
import { Nav } from './Nav';
import { BubbleBackground } from './components/BubbleBackground';

const AppContent = () => {
  const { colorScheme } = useApp();
  const location = useLocation();
  const isBusinessCardPage = location.pathname === '/business-card';

  return (
    <>
      <BubbleBackground />
      <Provider
        theme={defaultTheme}
        colorScheme={colorScheme}
        UNSAFE_style={{ background: 'transparent' }}
      >
        <div className="site--app">
          <div id="portal-root"></div>

          {!isBusinessCardPage && <Header />}
          {!isBusinessCardPage && <Nav />}
          <main>
            <Routes />
          </main>
          {!isBusinessCardPage && <Footer />}
        </div>
      </Provider>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
