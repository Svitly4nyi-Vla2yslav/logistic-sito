import { Container } from "@mui/material";
import React from "react";
import { Titel, Result, TextCalc } from "./Calc.styled";
import { useTranslation } from "react-i18next";

interface ResultDisplayProps {
  result: number;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result }) => {
  const { t } = useTranslation();

  return (
    <Container>
      <Titel>{t("total_price")}</Titel>
      <Result>{result.toFixed(2)} EUR</Result>
      <TextCalc>{t("net_price_note")}</TextCalc>
    </Container>
  );
};

export default ResultDisplay;
