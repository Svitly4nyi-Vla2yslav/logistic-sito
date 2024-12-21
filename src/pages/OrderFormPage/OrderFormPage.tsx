import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import VideoBackground from '../../components/VideoBackground/VideoBackground';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  FormContainer,
  Title,
  Description,
  Result,
  Label,
  Input,
  Button,
} from './OrderFormPage.styled';
import { useTranslation } from 'react-i18next';

const OrderFormPage: React.FC = () => {
  const { t } = useTranslation();

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

    // Перевірка обов'язкових полів
    if (!name || !email || !phone || !deliveryDate) {
      toast.error(t('error_fill_fields'), {
        position: 'top-left',
      });
      return;
    }

    if (
      !startAddress ||
      !endAddress ||
      !distance ||
      !vehicle ||
      result === undefined
    ) {
      toast.error(t('error_fill_fields'), {
        position: 'top-left',
      });
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
        toast.success(t('order_details_sent_success'), {
          position: 'top-center',
        });
        resetForm();
      } else {
        toast.warn(
          t('failed_to_send_email', { message: responseData.message }),
          {
            position: 'top-center',
          }
        );
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error(t('error_sending_email'), {
        position: 'top-center',
      });
    }
  };

  const handlePayment = async () => {
    // Перевірка полів для оплати
    if (!result) {
      toast.warn(t('total_price_missing'), {
        position: 'top-center',
      });
      return;
    }

    try {
      const response = await fetch(apiUrlPay, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: result }),
      });

      const responseData = await response.json();

      if (response.ok) {
        window.location.href = responseData.paymentLink;
      } else {
        toast.warn(
          t('failed_to_initiate_payment', {
            message: responseData?.message || 'unknown error',
          }),
          {
            position: 'top-center',
          }
        );
      }
    } catch (error) {
      console.error('Error initiating payment:', error);
      toast.error(t('error_initiating_payment'), {
        position: 'top-center',
      });
    }
  };

  return (
    <>
      {' '}
      <VideoBackground />
      <FormContainer>
        <Title>{t('order_form_title')}</Title>
        <Description>
          {t('start_address')} <Result>{startAddress}</Result>
        </Description>
        <Description>
          {t('end_address')} <Result>{endAddress}</Result>
        </Description>
        <Description>
          {t('distance')} <Result>{distance.toFixed(2)} km</Result>
        </Description>
        <Description>
          {t('vehicle')} <Result>{vehicle}</Result>
        </Description>
        <Description>
          {t('total_price')} <Result>{result.toFixed(2)} EUR</Result>
        </Description>
        <Input
          type="text"
          id="name"
          name="name"
          required
          placeholder={t('full_name_placeholder')}
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Input
          type="email"
          id="email"
          name="email"
          required
          placeholder={t('email_placeholder')}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          type="tel"
          id="phone"
          name="phone"
          required
          placeholder={t('phone_placeholder')}
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
        <Label>{t('delivery_date_label')}</Label>
        <Input
          type="date"
          id="date"
          name="date"
          required
          placeholder={t('delivery_date_placeholder')}
          value={deliveryDate}
          onChange={e => setDeliveryDate(e.target.value)}
        />
        <Button
          onClick={async e => {
            // Перевірка форми перед відправкою та оплатою
            await handleSubmit(e);
            if (name && email && phone && deliveryDate && result) {
              await handlePayment();
            }
          }}
        >
          {t('submit_and_pay')}
        </Button>
        
      </FormContainer>
      <ToastContainer />
    </>
  );
};

export default OrderFormPage;
