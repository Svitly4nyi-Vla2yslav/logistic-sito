import styled from 'styled-components';

export const FooterContainer = styled.footer`
text-align: center;
padding: 1rem 0;
background: #1c1c1c;
color: rgba(255, 255, 255, 0.8);
border-radius:18px;
margin-top: 30px;
 @media(min-width: 1023px){
        display: flex;
        justify-content: space-between;
        align-items: stretch;
        flex-direction: column;
        margin: 0;
        margin-top: 1%;
        
  }
`;

export const FooterText = styled.p`
font-size: 0.9rem;
margin: 0;
`;