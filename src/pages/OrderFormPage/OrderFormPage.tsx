import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import VideoBackground from '../../components/VideoBackground/VideoBackground';

export const FormContainer = styled.div`
  background: white;
  color: #000000;
  padding: 2rem;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
  max-width: 700px;
  margin: 0 auto;

  font-family: 'Orbitron', sans-serif;
  height: 100%;
  z-index: 9;

  @media (min-width: 1024px) {
    margin: 10% auto;
    height: 100%;
    border-radius: 10px;
  }

  @media (min-width: 1240px) {
    margin: 5% auto;

    height: 100%;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin: 1rem 0;
  border: none;
  border-radius: 10px;
  background: #ffffff;
  color: black;
  font-size: 1rem;
  box-shadow: inset 0 0 5px #8b53ff;
  outline: none;
  font-weight: 800;

  &:focus {
    box-shadow: inset 0 0 10px #8b53ff;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.8rem;
  border: none;
  text-decoration: none;
  background: linear-gradient(90deg, #007bff, #6f42c1);
  color: white;
  display: inline-block;
  position: relative;
  margin: 10px 0px;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  overflow: hidden;
  letter-spacing: 2px;
  border-radius: 10px;
  transition: 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  font-size: 1.2rem;
  font-weight: bold;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    z-index: -1;
    background: linear-gradient(90deg, #6f42c1, #007bff);
    transition: width 1.8s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  &:hover,
  &:focus {
    color: #007bff;
    background: rgba(255, 255, 255, 0);

    &:before {
      width: 100%;
    }
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background: #6f42c1;
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: #343a40;
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  display: block;
  font-weight: bold;
  margin: 10px 0 5px;
  color: #444;
`;

export const Description = styled.p`
  font-family: 'Formular', sans-serif;
  color: #444;
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 20px;
  text-align: start;
`;

export const Result = styled.span`
  color: #16f116;
  font-size: 15px;
  line-height: 1.29;
  text-align: center;
`;

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

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (
      !startAddress ||
      !endAddress ||
      !distance ||
      !vehicle ||
      result === undefined
    ) {
      alert('Please ensure all fields are filled out correctly.');
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
        alert('Order details sent successfully!');
      } else {
        alert(`Failed to send email: ${responseData.message}`);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('An error occurred while sending the email.');
    }
  };

  const handlePayment = async () => {
    if (!result) {
      alert('Total price is missing.');
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
        alert(`Failed to initiate payment: ${responseData.message}`);
      }
    } catch (error) {
      console.error('Error initiating payment:', error);
      alert('An error occurred while initiating the payment.');
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
    </>
  );
};

export default OrderFormPage;
