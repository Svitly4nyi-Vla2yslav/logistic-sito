import React, { useState } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { Input } from './Calc.styled';
import { useTranslation } from 'react-i18next';

const InputContainer = styled.div`
    position: relative;
    width: 100%;
`;

const SuggestionsList = styled.ul`
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 4px;
    max-height: 200px;
    overflow-y: auto;
    z-index: 10;
    list-style: none;
    padding: 0;
    margin: 0;

  li {
    padding: 10px;
    cursor: pointer;
    &:hover {
      background-color: #f0f0f0;
    }
  }
`;

interface AddressAutocompleteProps {
  value: string;
  onChange: (value: string) => void;
  onSelect: (value: string) => void;
}

const AddressAutocomplete: React.FC<AddressAutocompleteProps> = ({
  value,
  onChange,
  onSelect,
}) => {
    const { i18n } = useTranslation();
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const fetchSuggestions = async (query: string) => {
    if (!query) {
      setSuggestions([]);
      return;
    }

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
          query
        )}&format=json&addressdetails=1&limit=5&accept-language=${i18n.language}`
      );
      const data = await response.json();
      const suggestions = data.map((item: any) => item.display_name);
      setSuggestions(suggestions);
    } catch (error) {
      toast.error('Failed to fetch suggestions');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
    fetchSuggestions(newValue);
  };

  const handleSuggestionClick = (suggestion: string) => {
    onChange(suggestion);
    onSelect(suggestion);
    setSuggestions([]);
  };
  const { t } = useTranslation();
  return (
    <InputContainer>
      <Input
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder={t('start_address_placeholder')}
        style={
          {
            //   width: '100%',
            //   padding: '0.8rem',
            //   borderRadius: '10px',
            //   border: '1px solid #ccc',
          }
        }
      />
      {suggestions.length > 0 && (
        <SuggestionsList>
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </SuggestionsList>
      )}
    </InputContainer>
  );
};

export default AddressAutocomplete;
