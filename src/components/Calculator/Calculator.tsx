import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine'; // Підключення бібліотеки
import L from 'leaflet';
import calculatePrice from '../../utils/calculatePrice';
import OptionsSelector from './OptionsSelector';
import ResultDisplay from './ResultDisplay';
import VehicleSelector from './VehicleSelector';
import { useNavigate } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';
import {
  Button,
  CalculatorContainer,
  // Input,
  Result,
  TextCalc,
  Title,
} from './Calc.styled';
import AddressAutocomplete from './Autocomplete';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RoutingMachine = ({ startCoords, endCoords }: any) => {
  const map = useMap();

  useEffect(() => {
    if (!startCoords || !endCoords) return;

    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(startCoords[0], startCoords[1]),
        L.latLng(endCoords[0], endCoords[1]),
      ],
      routeWhileDragging: true,
    }).addTo(map);

    return () => {
      map.removeControl(routingControl);
    };
  }, [startCoords, endCoords, map]);

  return null;
};

const Calculator: React.FC = () => {
  const [startAddress, setStartAddress] = useState('');
  const [endAddress, setEndAddress] = useState('');
  const [startCoords, setStartCoords] = useState<[number, number] | null>(null);
  const [endCoords, setEndCoords] = useState<[number, number] | null>(null);
  const [distance, setDistance] = useState(0);
  const [vehicle, setVehicle] = useState('');
  const [options, setOptions] = useState({});
  const [result, setResult] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  const geocodeAddress = async (address: string) => {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
        address
      )}&format=json`
    );
    const data = await response.json();
    if (data.length > 0) {
      return [parseFloat(data[0].lat), parseFloat(data[0].lon)] as [
        number,
        number,
      ];
    } else {
      toast.warn(t('address_not_found'), {
        position: 'top-center',
      });
      // alert("Address not found");
      return null;
    }
  };

  const handleCalculate = async () => {
    const start = await geocodeAddress(startAddress);
    const end = await geocodeAddress(endAddress);

    if (start && end) {
      setStartCoords(start);
      setEndCoords(end);

      const R = 6371; // Earth radius in km
      const dLat = ((end[0] - start[0]) * Math.PI) / 180;
      const dLon = ((end[1] - start[1]) * Math.PI) / 180;
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos((start[0] * Math.PI) / 180) *
          Math.cos((end[0] * Math.PI) / 180) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const calculatedDistance = R * c;

      setDistance(calculatedDistance);

      const price = calculatePrice(vehicle, calculatedDistance, options);
      setResult(price);
    }
    // const price = calculatePrice(vehicle, distance, options);
    // setResult(price);
  };

  const handleSelectStartAddress = async (address: string) => {
    setStartAddress(address);
    // Можливо, зберегти координати після вибору
  };

  const handleSelectEndAddress = async (address: string) => {
    setEndAddress(address);
    // Можливо, зберегти координати після вибору
  };
  const navigate = useNavigate();

  const handleProceedToForm = () => {
    navigate('/order-form', {
      state: {
        startAddress,
        endAddress,
        distance,
        vehicle,
        options,
        result,
      },
    });
  };
  const { t } = useTranslation();

  return (
    <CalculatorContainer id='/project' data-aos="fade-up" >
      <Title>{t('title')}</Title>
      <AddressAutocomplete
        value={startAddress}
        onChange={setStartAddress}
        onSelect={handleSelectStartAddress}
      />
      <AddressAutocomplete
        value={endAddress}
        onChange={setEndAddress}
        onSelect={handleSelectEndAddress}
      />
      <VehicleSelector setVehicle={setVehicle} />
      <OptionsSelector setOptions={setOptions} />
      <Button onClick={handleCalculate}>{t('calculate_button')}</Button>
      {distance > 0 && (
        <TextCalc>
          {t('distance_label')}: <Result>{distance.toFixed(2)} km</Result>
        </TextCalc>
      )}
      <ResultDisplay result={result} />
      {result > 0 && (
        <Button onClick={handleProceedToForm}>{t('proceed_to_payment')}</Button>
      )}
      <MapContainer
        center={{ lat: 50, lng: 20 }}
        zoom={5}
        style={{
          height: '20vh',
          width: '100%',
          marginTop: '1rem',
          borderRadius: 12,
          
        }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {startCoords && endCoords && (
          <RoutingMachine startCoords={startCoords} endCoords={endCoords} />
        )}
      </MapContainer>
      <ToastContainer />
    </CalculatorContainer>
  );
};

export default Calculator;
