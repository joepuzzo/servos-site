import React, { useRef } from 'react';
import { Flex, ActionButton } from '@adobe/react-spectrum';
import Contrast from '@spectrum-icons/workflow/Contrast';

// Hooks
import useApp from './hooks/useApp';
import useOutsideAlerter from './hooks/useOutsideAlerter';
import { NavLink } from './components/NavLink';

export const NavLinks = () => {
  return (
    <>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/product-info">Product Info</NavLink>
      <NavLink href="/about">About</NavLink>
    </>
  );
};

export const Nav = () => {
  const { toggleColorScheme, navOpen, closeNav } = useApp();

  const navRef = useRef();

  useOutsideAlerter(() => closeNav(), navRef);

  return (
    <nav className={navOpen ? 'sidenav sidenav-visible' : 'sidenav'} ref={navRef}>
      <Flex direction="row" justifyContent="space-between" alignItems="center" gap="size-100">
        <h3
          style={{
            fontSize: '30px',
            letterSpacing: '10px',
            padding: '5px',
            margin: '0px'
          }}
        >
          SERVO'S
        </h3>
        <ActionButton aria-label="Switch Theme" onClick={() => toggleColorScheme()}>
          <Contrast />
        </ActionButton>
      </Flex>
      <NavLinks />
    </nav>
  );
};
