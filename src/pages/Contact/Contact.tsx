import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactInfa from '../../components/ContactInfa/ContactInfa';

const Contact: React.FC = () => {
  return (
    <div>
      <ContactInfa />
      <ContactForm />
    </div>
  );
};

export default Contact;
