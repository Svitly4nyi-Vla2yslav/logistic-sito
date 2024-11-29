import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavbarContainer = styled.header<{ isScrolled: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: ${({ isScrolled }) =>
    isScrolled ? 'rgba(28, 28, 28, 0.9)' : 'transparent'};
  box-shadow: ${({ isScrolled }) =>
    isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.5)' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: background 0.3s ease, box-shadow 0.3s ease;
  z-index: 9999999;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Logo = styled(NavLink)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #00d1ff;
  text-decoration: none;

  &:hover,
  &:focus,
  &.active {
    color: #00ffe7;
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  a {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.8);
    font-size: 1rem;
    transition: color 0.3s ease;

    &:hover,
    &.active {
      color: #00d1ff;
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease-in-out;
  position: relative;

  &:hover {
    color: #00d1ff;
    transform: scale(1.1);
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0;
    height: 2px;
    background-color: #00d1ff;
    transition: width 0.3s ease-in-out;
  }

  &.active {
    color: #00d1ff;
    &::after {
      width: 100%;
    }
  }

  &:hover::after {
    width: 100%;
  }
`;
