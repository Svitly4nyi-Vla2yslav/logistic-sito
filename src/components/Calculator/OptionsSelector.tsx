import React, { useState } from "react";

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
      <h2>Select Additional Options</h2>
      <div>
        <label>
          <input
            type="checkbox"
            checked={selectedOptions.refrigerator}
            onChange={() => handleOptionChange("refrigerator")}
          />
          Refrigerator (extra cooling)
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={selectedOptions.adr}
            onChange={() => handleOptionChange("adr")}
          />
          ADR (Hazardous Material)
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={selectedOptions.platform}
            onChange={() => handleOptionChange("platform")}
          />
          Special Loading Platform
        </label>
      </div>
    </div>
  );
};

export default OptionsSelector;
