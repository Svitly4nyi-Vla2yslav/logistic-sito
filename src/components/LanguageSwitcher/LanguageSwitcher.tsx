import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DropdownContainer, DropdownButton, DropdownContent, DropdownItem } from './LanguageSwitcher.styled';
import LanguageIcon from '@mui/icons-material/Language';
export interface DropdownContentProps {
    isOpen: boolean;
  }
const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng: string | undefined) => {
    i18n.changeLanguage(lng);
    setIsOpen(false); // Закрити випадаючий список після вибору мови
  };

//   const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <DropdownContainer>
      <DropdownButton onClick={() => setIsOpen(!isOpen)}><LanguageIcon/></DropdownButton>
      <DropdownContent isOpen={isOpen}>
        <DropdownItem onClick={() => changeLanguage('en')}>English</DropdownItem>
        <DropdownItem onClick={() => changeLanguage('pl')}>Polski</DropdownItem>
        <DropdownItem onClick={() => changeLanguage('de')}>Deutsch</DropdownItem>
        <DropdownItem onClick={() => changeLanguage('fr')}>Français</DropdownItem>
      </DropdownContent>
    </DropdownContainer>
  );
};

export default LanguageSwitcher;
