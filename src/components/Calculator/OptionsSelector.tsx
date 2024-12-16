import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { InputSelect, LabelChekbox, Titel, WrapperChekbox } from './Calc.styled';

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
  const { t } = useTranslation();
  return (
    <WrapperChekbox>
      <Titel>{t('select_additional_options')}</Titel>
      <div>
        <LabelChekbox>
          <InputSelect
            type="checkbox"
            checked={selectedOptions.refrigerator}
            onChange={() => handleOptionChange('refrigerator')}
          />
          {t('refrigerator_option')}
        </LabelChekbox>
      </div>
      <div>
        <LabelChekbox>
          <InputSelect
            type="checkbox"
            checked={selectedOptions.adr}
            onChange={() => handleOptionChange('adr')}
          />
          {t('adr_option')}
        </LabelChekbox>
      </div>
      <div>
        <LabelChekbox>
          <InputSelect
            type="checkbox"
            checked={selectedOptions.platform}
            onChange={() => handleOptionChange('platform')}
          />
          {t('platform_option')}
        </LabelChekbox>
      </div>
    </WrapperChekbox>
  );
};

export default OptionsSelector;
