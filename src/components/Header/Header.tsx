import React, { useEffect, useState } from 'react';
import {
  Logo,
  NavbarContainer,
  NavItem,
  NavList,
  StyledNavLink,
} from './Header.styled';
import { useMediaQuery } from 'react-responsive';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import LogoIcon from "../../assets/icons/logo-seto_logistic.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 3000 });
    AOS.refresh(); 
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isMobile = useMediaQuery({ query: '(max-width: 425px)' });

  return (
    <NavbarContainer isScrolled={isScrolled}>
    <Logo to="/"><img src={LogoIcon} alt="Logo" /></Logo>
    <NavList>
      <LanguageSwitcher />
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
