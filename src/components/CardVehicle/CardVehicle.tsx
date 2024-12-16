import React from 'react';

import { useTranslation } from 'react-i18next';

import {
  SectionTitle,
  CardContainer,
  CardImage,
  CardTitle,
  CardDescription,
  AdditionalOptions,
  Disclaimer,
  Card,
  Link,
} from './CardVehicle.styled';

import caddy from '../../assets/image/завантаження-caddy.jpeg';
import ford from '../../assets/image/ford-transit.webp';
import crafter from '../../assets/image/VOLKSWAGEN-CRAFTER.jpeg';
import Man from '../../assets/image/man-tgl_truck.webp';
import { Button } from '../Calculator/Calc.styled';

// Vehicle data structure
const vehicles = [
  {
    id: 1,
    title: 'vehicle_1_name',
    image: caddy,
    description: 'vehicle_1_info',
    options: [
      'refrigerator_option',
      'Additional distance: 2 EUR/km (91-200 km), 1.50 EUR/km (201-500 km)',
    ],
    disclaimer: 'net_price_note',
  },
  {
    id: 2,
    title: 'vehicle_2_name',
    image: ford,
    description: 'vehicle_2_info',
    options: ['refrigerator_option', 'adr_option'],
    disclaimer: 'net_price_note',
  },
  {
    id: 3,
    title: 'vehicle_3_name',
    image: crafter,
    description: 'vehicle_3_info',
    options: ['adr_option', 'Extended cargo length (+0.30 EUR/km)'],
    disclaimer: 'net_price_note',
  },
  {
    id: 4,
    title: 'vehicle_4_name',
    image: Man,
    description: 'vehicle_4_info',
    options: ['adr_option', 'Extended cargo height (+0.35 EUR/km)'],
    disclaimer: 'net_price_note',
  },
];

const VehicleCards: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <SectionTitle>{t('select_vehicle')}</SectionTitle>
      <CardContainer>
        {vehicles.map(vehicle => (
          <Card key={vehicle.id}  data-aos="zoom-in">
            <CardImage src={vehicle.image} alt={t(vehicle.title)} />
            <CardTitle>{t(vehicle.title)}</CardTitle>
            <CardDescription>{t(vehicle.description)}</CardDescription>
            <AdditionalOptions>
              {vehicle.options.map((option, index) => (
                <li key={index}>{t(option)}</li>
              ))}
            </AdditionalOptions>
            <Link to="/project"><Button>
              {' '}
              {t('calculate_button')}
            </Button></Link>
            <Disclaimer>{t(vehicle.disclaimer)}</Disclaimer>
          </Card>
        ))}
      </CardContainer>
    </div>
  );
};

export default VehicleCards;
