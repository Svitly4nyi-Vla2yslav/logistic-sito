import { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import logo from "../../assets/image/66508ef00aae4c0624aaa216_Van.png"

// Анімація тексту
const slideInFromLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;


// Анімація зникнення
const fadeOutAnimation = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const PreloaderContainer = styled.div.attrs<{ fadeOut: boolean }>(({ fadeOut, ...rest }) => ({
    ...rest, // Передаємо решту пропсів, але виключаємо fadeOut
  }))<{ fadeOut: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0f2027;
    z-index: 9999;
  
    ${({ fadeOut }) =>
      fadeOut &&
      css`
        animation: ${fadeOutAnimation} 1s forwards;
      `}
  `;
  

const Logo = styled.img`
  width: 150px;
  height: auto;
  margin-bottom: 1rem;
`;

const AnimatedText = styled.p<{ delay: string }>`
  font-size: 1.5rem;
  color: #00ffe7;
//   padding: 5px;
  margin: 0;
  opacity: 0;

  ${({ delay }) => css`
    animation: ${slideInFromLeft} 1s ease-out forwards;
    animation-delay: ${delay};
  `}
`;

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onComplete, 1000); // Затримка перед завершенням Preloader
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <PreloaderContainer fadeOut={fadeOut}>
      <Logo src={logo} alt="Company Logo" />
      <AnimatedText delay="0.5s">Logistic-</AnimatedText> 
      <AnimatedText delay="1.5s">Sito</AnimatedText>
    </PreloaderContainer>
  );
};

export default Preloader;
