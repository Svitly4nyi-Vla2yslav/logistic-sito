import { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import logo from "../../assets/icons/logo-seto_logistic.png";

// Анімація обертання (rotate)
const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Анімація зникнення вправо
const slideOutToRight = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100vw);
    opacity: 0;
  }
`;

// Анімація зникнення Preloader
const fadeOutAnimation = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

// Styled-component для контейнера Preloader
const PreloaderContainer = styled.div<{ $fadeOut: boolean }>`
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

  ${({ $fadeOut }) =>
    $fadeOut &&
    css`
      animation: ${fadeOutAnimation} 1s forwards;
    `}
`;

// Styled-component для логотипу
const Logo = styled.img<{ $animate: boolean; $slideOut: boolean }>`
  width: 200px;
  height: auto;

  ${({ $animate }) =>
    $animate &&
    css`
      animation: ${rotateAnimation} 2s linear;
    `}

  ${({ $slideOut }) =>
    $slideOut &&
    css`
      animation: ${slideOutToRight} 1s forwards;
    `}
`;

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [slideOut, setSlideOut] = useState(false);

  useEffect(() => {
    // Запускаємо обертання
    setAnimate(true);

    // Зупиняємо обертання через 2 секунди
    const stopAnimationTimer = setTimeout(() => {
      setAnimate(false);

      // Починаємо "виїзд" вправо через 0.5 секунди після зупинки
      setTimeout(() => setSlideOut(true), 500);

      // Ховаємо Preloader через 1.5 секунди після "виїзду"
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(onComplete, 1000); // Завершення Preloader
      }, 1500);
    }, 2000);

    return () => clearTimeout(stopAnimationTimer);
  }, [onComplete]);

  return (
    <PreloaderContainer $fadeOut={fadeOut}>
      <Logo src={logo} alt="Company Logo" $animate={animate} $slideOut={slideOut} />
    </PreloaderContainer>
  );
};

export default Preloader;
