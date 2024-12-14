import styled from 'styled-components';
import { DropdownContentProps } from './LanguageSwitcher';

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;
export const DropdownMenu = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;
export const DropdownButton = styled.button`
  width: 100%;
  padding: 8px;
  border: none;
  text-decoration: none;
  background: linear-gradient(90deg, #007bff, #6f42c1);
  color: white;
  position: relative;
  margin: 0 auto;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  overflow: hidden;
  // letter-spacing: 2px;
  border-radius: 50% 50%;
  transition: 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
display: flex;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    z-index: -1;
    background: linear-gradient(90deg, #6f42c1, #007bff);
    transition: width 1.8s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  &:hover,
  &:focus {
    color: #007bff;
    background: rgba(255, 255, 255, 0);

    &:before {
      width: 100%;
    }
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background: #6f42c1;
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }

  
`;

export const DropdownContent = styled.div<DropdownContentProps>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  background-color: white;
  min-width: 160px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 5px;
`;

export const DropdownItem = styled.div`
  padding: 8px 16px;
  cursor: pointer;
  color: black;

  &:hover {
    background-color: #f1f1f1;
  }
`;