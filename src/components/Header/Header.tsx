import React, { useEffect } from 'react';
import {
  Logo,
  NavbarContainer,
  NavItem,
  NavList,
  StyledNavLink,
} from './Header.styled';
import { useMediaQuery } from 'react-responsive';
import { MobileMenu } from '../MobileMenu/MobileMenu';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Header: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  const isMobile = useMediaQuery({ query: '(max-width: 425px)' });
  return (
    <NavbarContainer  data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1500">
      <Logo
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        to="/"
      >
        Logistic-Sito
      </Logo>
      <NavList>
        {isMobile ? (
          <MobileMenu  data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"/>
        ) : (
          <>
            <NavItem>
              <StyledNavLink
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                to="/home"
              >
                Home
              </StyledNavLink>
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
