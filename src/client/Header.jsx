import { ActionButton, Flex } from '@adobe/react-spectrum';
import React from 'react';
import useMedia from './hooks/useMedia';
import useApp from './hooks/useApp';
import { NavLink } from './components/NavLink';
import Contrast from '@spectrum-icons/workflow/Contrast';
import ShowMenu from '@spectrum-icons/workflow/ShowMenu';
import { NavLinks } from './Nav';

export const Header = () => {
  // header contents modal open state when resize
  const { isDesktopUp } = useMedia();
  const { toggleColorScheme, toggleNav } = useApp();

  return (
    <header className="pageHeader">
      <Flex
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        UNSAFE_style={{ width: '100%' }}
      >
        <Flex direction="row" alignItems="center" gap="size-100">
          {!isDesktopUp ? (
            <Flex direction="row" alignItems="center" gap="size-100">
              <ActionButton aria-label="Open Menu" onPress={() => toggleNav()}>
                <ShowMenu />
              </ActionButton>
              <h1 className="brand">S E R V O ' S</h1>
            </Flex>
          ) : null}
          {isDesktopUp ? (
            <>
              <h1 className="brand">S E R V O ' S</h1>
              <NavLinks />
            </>
          ) : null}
        </Flex>
        {isDesktopUp ? (
          <div
            className="toggle"
            // style={{
            //   position: 'absolute',
            //   display: 'flex',
            //   alignItems: 'center',
            //   gap: '5px'
            // }}
          >
            <ActionButton aria-label="Switch Theme" onClick={() => toggleColorScheme()}>
              <Contrast />
            </ActionButton>
          </div>
        ) : null}
      </Flex>
    </header>
  );
};
