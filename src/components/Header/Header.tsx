import React from 'react';
import {
  Logo,
  NavbarContainer,
  NavItem,
  NavList,
  StyledNavLink,
} from './Header.styled';
import { useMediaQuery } from 'react-responsive';
import { MobileMenu } from '../MobileMenu/MobileMenu';

const Header: React.FC = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 425px)' });
  return (
    <NavbarContainer>
      <Logo to="/">Logistic-Sito</Logo>
      <NavList>
        {isMobile ? (
          <MobileMenu />
        ) : (
          <>
            <NavItem>
              <StyledNavLink to="/home">Home</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="/about">About</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="/contact">Contact</StyledNavLink>
            </NavItem>
          </>
        )}
      </NavList>
    </NavbarContainer>
  );
};

export default Header;
