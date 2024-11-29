import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavbarContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: transparent;
  transition: background 1.5s ease-in-out;
  margin-bottom: 30px;

  &:hover,
  &:focus,
  &.active {
    background: linear-gradient(90deg, #1c1c1c, #2a2a2a);
  }

  @media (min-width: 1023px) {
    margin-bottom: 10px;
    position : fixed;
    margin-bottom: 30px;
width: 100%;
  }

  @media (max-width: 768px) {
    // flex-direction: column;
    padding: 1rem;
  }

  a {
    color: #ffffff;
    text-decoration: none;

    &:hover {
      color: #00ffe7;
    }
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
    color: linear-gradient(90deg, #1c1c1c, #2a2a2a);
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
  animation: 500ms ease-in-out 0s 1 normal none running buttonAnimationOut;
  
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