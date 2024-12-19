// ContactForm.tsx
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FormContainer, Input, TextArea, Title } from '../../pages/OrderFormPage/OrderFormPage.styled';
import { Button } from '../Calculator/Calc.styled';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
const ContactForm = () => {

    useEffect(() => {
      AOS.init({ duration: 3000 });
    }, []);
    
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    contactPerson: '',
    details: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useTranslation();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogisticsEmail = async () => {
    if (!formData.name || !formData.email || !formData.details) {
      toast.error(t('required_fields_error'), { position: 'top-center' });
      return;
    }

    if (!emailRegex.test(formData.email)) {
      toast.error(t('invalid_email_message'), { position: 'top-center' });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/.netlify/functions/sendLogisticsEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const responseData = (await response.json()) as { message: string };

      if (response.ok) {
        toast.success(t('email_sent_success'), { position: 'top-center' });
        setFormData({
          name: '',
          email: '',
          phone: '',
          companyName: '',
          contactPerson: '',
          details: '',
        });
      } else {
        toast.error(`${t('email_sent_failure')}: ${responseData.message}`, {
          position: 'top-center',
        });
      }
    } catch (error) {
      console.error('Error sending logistics email:', error);
      toast.error(t('email_sent_error'), { position: 'top-center' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fields = [
    { name: 'name', placeholder: t('full_name_placeholder'), required: true },
    { name: 'email', placeholder: t('email_placeholder'), required: true },
    { name: 'phone', placeholder: t('phone_placeholder') },
    { name: 'companyName', placeholder: t('company_name_placeholder') },
    { name: 'contactPerson', placeholder: t('contact_person_placeholder') },
    { name: 'details', placeholder: t('details_placeholder'), required: true, isTextArea: true },
  ];

  return (
    <FormContainer data-aos="fade-right"
    data-aos-offset="100"
    data-aos-easing="ease-in-sine">
      <Title>{t('contact_us')}</Title>
      {fields.map(({ name, placeholder, required, isTextArea }) =>
        isTextArea ? (
          <TextArea
            key={name}
            name={name}
            value={formData[name as keyof typeof formData]}
            onChange={handleChange}
            placeholder={placeholder}
            required={required}
          />
        ) : (
          <Input
            key={name}
            name={name}
            value={formData[name as keyof typeof formData]}
            onChange={handleChange}
            placeholder={placeholder}
            required={required}
          />
        )
      )}
      <Button onClick={handleLogisticsEmail} disabled={isSubmitting}>
        {t('send_inquiry_button')}
      </Button>
      <ToastContainer />
    </FormContainer>
  );
};

export default ContactForm;
