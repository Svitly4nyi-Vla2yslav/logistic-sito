import React from "react";

interface ResultDisplayProps {
    result: number;
  }
  
  const ResultDisplay: React.FC<ResultDisplayProps> = ({ result }) => {
  return (
    <div>
      <h2>Total Price</h2>
      <p>{result.toFixed(2)} EUR</p>
      <p>(Net price. Additional charges may apply.)</p>
    </div>
  );
};

export default ResultDisplay;
