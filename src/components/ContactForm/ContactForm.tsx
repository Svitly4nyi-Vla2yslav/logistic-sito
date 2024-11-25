import React, { useState } from "react";
import { saveFormData } from "../../firestore";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await saveFormData(formData);
    alert("Form submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" onChange={handleChange} placeholder="Name" required />
      <input name="email" onChange={handleChange} placeholder="Email" required />
      <textarea name="message" onChange={handleChange} placeholder="Message" required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
