import React, { useState } from "react";
import { Titel } from "./ResultDisplay";
import styled from "styled-components";

export const LabelChekbox = styled.label`
font-size: 14px;
color: rgba(18, 20, 23, 0.8);
margin-bottom: 10px;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
 display: flex;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    
`

const Input = styled.input`
 padding: 150px;
width: 100%;
margin: 10px;
color: red;
`;

interface OptionsSelectorProps {
  setOptions: (options: { [key: string]: boolean }) => void;
}

const OptionsSelector: React.FC<OptionsSelectorProps> = ({ setOptions }) => {
  const [selectedOptions, setSelectedOptions] = useState({
    refrigerator: false,
    adr: false,
    platform: false,
  });

  const handleOptionChange = (option: string) => {
    const updatedOptions = {
      ...selectedOptions,
      [option]: !selectedOptions[option],
    };
    setSelectedOptions(updatedOptions);
    setOptions(updatedOptions); // Передаємо обрані опції назад до основного компонента
  };

  return (
    <div>
      <Titel>Select Additional Options</Titel>
      <div>
        <LabelChekbox>
          <Input 
            type="checkbox"
            checked={selectedOptions.refrigerator}
            onChange={() => handleOptionChange("refrigerator")}
          />
          Refrigerator (extra cooling)
        </LabelChekbox>
      </div>
      <div>
        <LabelChekbox>
          <Input 
            type="checkbox"
            checked={selectedOptions.adr}
            onChange={() => handleOptionChange("adr")}
          />
          ADR (Hazardous Material)
        </LabelChekbox>
      </div>
      <div>
        <LabelChekbox>
          <Input 
            type="checkbox"
            checked={selectedOptions.platform}
            onChange={() => handleOptionChange("platform")}
          />
          Special Loading Platform
        </LabelChekbox>
      </div>
    </div>
  );
};

export default OptionsSelector;
