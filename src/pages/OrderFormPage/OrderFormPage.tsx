import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import VideoBackground from '../../components/VideoBackground/VideoBackground';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { FormContainer, Title, Description, Result, Label, Input, Button } from './OrderFormPage.styled';


const OrderFormPage: React.FC = () => {
  const location = useLocation();
  const { state } = location || {};
  const { startAddress, endAddress, distance, vehicle, options, result } =
    state || {};

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');

  const apiUrl =
    process.env.NODE_ENV === 'production'
      ? '/.netlify/functions/sendEmail'
      : 'http://localhost:8888/.netlify/functions/sendEmail';

  const apiUrlPay =
    process.env.NODE_ENV === 'production'
      ? '/.netlify/functions/createPayment'
      : 'http://localhost:8888/.netlify/functions/createPayment';


      const resetForm = () => {
        setName('');
        setEmail('');
        setPhone('');
        setDeliveryDate('');
      };   

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (
      !startAddress ||
      !endAddress ||
      !distance ||
      !vehicle ||
      result === undefined
    ) {
      toast.error("Please ensure all fields are filled out correctly.", {
        position: "top-left"
      });
      // alert('Please ensure all fields are filled out correctly.');
      return;
    }

    const orderDetails = {
      name,
      email,
      phone,
      deliveryDate,
      startAddress,
      endAddress,
      distance,
      vehicle,
      options,
      totalPrice: result,
    };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderDetails),
      });

      const responseData = await response.json();

      if (response.ok) {
        toast.success("Order details sent successfully!", {
          position: "top-center"
        });
        resetForm();
        // alert('Order details sent successfully!');
      } else {
        toast.warn(`Failed to send email: ${responseData.message}`, {
           position: "top-center"
        });
        // alert(`Failed to send email: ${responseData.message}`);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error("An error occurred while sending the email.", {
         position: "top-center"
      });
      // alert('An error occurred while sending the email.');
    }
  };

  const handlePayment = async () => {
    if (!result) {
      toast.warn('Total price is missing.', {
        position: "top-center"
     });
      // alert('Total price is missing.');
      return;
    }

    try {
      const response = await fetch(apiUrlPay, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: result }), // Передача суми
      });

      const responseData = await response.json();

      if (response.ok) {
        // Відкриття сторінки оплати
        window.location.href = responseData.paymentLink;
      } else {
        toast.warn(`Failed to initiate payment: ${responseData.message}`, {
          position: "top-center"
       });
        // alert(`Failed to initiate payment: ${responseData.message}`);
      }
    } catch (error) {
      console.error('Error initiating payment:', error);
      toast.error("An error occurred while initiating the payment.", {
        position: "top-center"
     });
      // alert('An error occurred while initiating the payment.');
    }
  };

  return (
    <>
      {' '}
      <VideoBackground />
      <FormContainer>
        <Title>Order Form</Title>
        <Description>
          Start Address: <Result>{startAddress}</Result>{' '}
        </Description>
        <Description>
          End Address: <Result>{endAddress}</Result>
        </Description>
        <Description>
          Distance: <Result>{distance.toFixed(2)} km</Result>{' '}
        </Description>
        <Description>
          Vehicle: <Result>{vehicle}</Result>
        </Description>
        <Description>
          Total Price: <Result>{result.toFixed(2)} EUR</Result>
        </Description>

        <Input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Full Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Input
          type="email"
          id="email"
          name="email"
          required
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          type="tel"
          id="phone"
          name="phone"
          required
          placeholder="Phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
        <Label>Delivery date</Label>
        <Input
          type="date"
          id="date"
          name="date"
          required
          placeholder="Delivery Date"
          value={deliveryDate}
          onChange={e => setDeliveryDate(e.target.value)}
        />
        <Button
          onClick={async e => {
            await handleSubmit(e);
            await handlePayment();
          }}
        >
          Submit and Pay
        </Button>
      </FormContainer>
      <ToastContainer />
    </>
  );
};

export default OrderFormPage;
