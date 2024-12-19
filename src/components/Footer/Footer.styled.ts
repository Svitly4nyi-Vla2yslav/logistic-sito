import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FooterContainer = styled.footer<{ isScrolled: boolean }>`
 background: ${({ isScrolled }) =>
    isScrolled ? 'transparent' : 'rgba(28, 28, 28, 0.7)'};
  box-shadow: ${({ isScrolled }) =>
    isScrolled ? 'none'  : '0 4px 15px rgba(0, 0, 0, 0.4)'};
left: 50%;
text-align: center;
padding: 1rem 1rem;
  background: transparent;
color: rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
margin-top: 30px;
 @media(min-width: 1023px){
        // display: flex;
        justify-content: space-between;
        align-items: stretch;
        flex-direction: column;
        margin: 0;
        margin-top: 1%;
        
  }

   &:hover,
  &:focus,
  &.active {
   background-color: rgba(28, 28, 28, 0.9);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
    transition: all 0.4s ease-in-out;
  }
`;

export const FooterText = styled.p`
font-size: 0.9rem;
margin: 0;
`;

export const WrapperSocialLink = styled.div`
margin-bottom: 30px;
display: flex;
justify-content: center;
`;

export const SocialLink = styled.a`
  margin: 5px;
  padding: 15px;
  transition: transform 0.3s ease, opacity 0.3s ease;
  color: inherit; /* Забезпечте спадковий колір */

  &:focus,
  &:hover {
    transform: scale(1.8); /* Невелике збільшення */
    opacity: 0.8; /* Легка прозорість */
  }
`;

  export const FooterItemText = styled.p`
text-align: center;
  font-weight: bold;

  padding-bottom: 10px;
`;

export const FooterList = styled.div`
padding: 20px 20px 50px 20px; 

`;

export const FooterItemTitel = styled.h2`
font-family: 'Roboto';
font-size: 20px;
text-align: start;
font-weight: bold;
  font-weight: bold;
transition: shadow 0.9s ease,
  color 0.9s,
text-shadow 0.9s;

 &:hover,
  &:focus {
  shadow: 0 0 20px #00baff;
  color: #00baff;
    text-shadow:
      0 0 5px #00baff,
      0 0 10px #ff7f50,
      0 0 20px #ff7f50,
      0 0 40px #ff7f50,
      0 0 80px #ff7f50;
  }
`;


export const FooterLink = styled(Link)`
  font-family: 'Roboto';
  font-size: 12px;
  text-align: start;
  padding: 5px 5px;
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  text-decoration: none; /* Забезпечте відсутність підкреслення */
  color: inherit; /* Використовуйте колір із теми чи стилю */

  transition: shadow 0.9s ease, color 0.9s, text-shadow 0.9s;

  &:hover,
  &:focus {
    shadow: 0 0 20px #00baff;
    color: #00baff;
    text-shadow:
      0 0 5px #00baff,
      0 0 10px #ff7f50,
      0 0 20px #ff7f50,
      0 0 40px #ff7f50,
      0 0 80px #ff7f50;
  }
`;