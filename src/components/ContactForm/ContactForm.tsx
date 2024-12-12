import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Button } from '../Calculator/Calculator';
import { FormContainer, Input, TextArea, Title } from '../../pages/OrderFormPage/OrderFormPage';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    contactPerson: '',
    details: '', // Додано поле details
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogisticsEmail = async () => {
    if (!formData.name || !formData.email || !formData.details) {
      toast.error("Please fill out all required fields!", {
        position: "top-center",
      });
      return;
    }

    try {
      const response = await fetch("/.netlify/functions/sendLogisticsEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (response.ok) {
        toast.success("Logistics email sent successfully!", {
          position: "top-center",
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          companyName: '',
          contactPerson: '',
          details: '', // Очистити поле details після успішної відправки
        });
      } else {
        toast.error(`Failed to send logistics email: ${responseData.message}`, {
          position: "top-center",
        });
      }
    } catch (error) {
      console.error("Error sending logistics email:", error);
      toast.error("An error occurred while sending the logistics email.", {
        position: "top-center",
      });
    }
  };

  return (
    <FormContainer>
      <Title>Contact Us</Title>
      <Input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Full Name"
        required
      />
      <Input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <Input
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone Number (optional)"
      />
      <Input
        name="companyName"
        value={formData.companyName}
        onChange={handleChange}
        placeholder="Company Name (if applicable)"
      />
      <Input
        name="contactPerson"
        value={formData.contactPerson}
        onChange={handleChange}
        placeholder="Contact Person (if different from Name)"
      />
      <TextArea
        name="details" // Додано поле details
        value={formData.details}
        onChange={handleChange}
        placeholder="Details (required)"
        required
      />
      <Button onClick={handleLogisticsEmail}>Send Inquiry</Button>
      <ToastContainer />
    </FormContainer>
  );
};

export default ContactForm;
