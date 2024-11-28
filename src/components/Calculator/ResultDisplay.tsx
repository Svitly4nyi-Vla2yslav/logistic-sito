import { Container } from "@mui/material";
import React from "react";
import styled from "styled-components";

export const Titel = styled.h2`
font-size: 16px;
line-height: 1.37;
color: rgba(18, 20, 23, 0.8);
margin-bottom: 10px;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  text-align: center;
`;

export const Result = styled.p`
color: #16f116;
font-size: 25px;
line-height: 1.29;
text-align: center;
`;

export const TextCalc = styled.p`
font-size: 14px;
color: rgba(18, 20, 23, 0.8);
margin-bottom: 10px;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  text-align: center;

`;

interface ResultDisplayProps {
    result: number;
  }
  
  const ResultDisplay: React.FC<ResultDisplayProps> = ({ result }) => {
  return (
    <Container>
      <Titel>Total Price</Titel>
      <Result>{result.toFixed(2)} EUR</Result>
      <TextCalc>(Net price. Additional charges may apply.)</TextCalc>
    </Container>
  );
};

export default ResultDisplay;
