import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine"; // Підключення бібліотеки
import L from "leaflet";
import calculatePrice from "../../utils/calculatePrice";
import OptionsSelector from "./OptionsSelector";
import ResultDisplay, { Result, TextCalc } from "./ResultDisplay";
import VehicleSelector from "./VehicleSelector";

import AOS from 'aos';
import 'aos/dist/aos.css';



const CalculatorContainer = styled.div`
background: white;
    color: #000000;
    padding: 2rem;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
    max-width: 800px;
    margin: 0 auto;
    font-family: "Orbitron", sans-serif;
    height: 147vh;
    z-index: 99999;
  
  @media(min-width: 1024px){
   height: 95vh;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: #00ffe7;
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
    width: 100%;
    padding: 0.8rem;
    margin: 1rem 0;
    border: none;
    border-radius: 10px;
    background: #ffffff;
    color: black;
    font-size: 1rem;
    box-shadow: inset 0 0 5px #00ffe7;
    outline: none;
    font-weight: 800;

  &:focus {
    box-shadow: inset 0 0 10px #00ffe7;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.8rem;
  border: none;
  text-decoration: none;
  background: linear-gradient(90deg, #007bff, #00ffe7);
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
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    z-index: -1;
    background: linear-gradient(90deg, #00ffe7, #007bff);
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
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background: #00ffe7;
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;




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
  const [startAddress, setStartAddress] = useState("");
  const [endAddress, setEndAddress] = useState("");
  const [startCoords, setStartCoords] = useState<[number, number] | null>(null);
  const [endCoords, setEndCoords] = useState<[number, number] | null>(null);
  const [distance, setDistance] = useState(0);
  const [vehicle, setVehicle] = useState("");
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
      return [parseFloat(data[0].lat), parseFloat(data[0].lon)] as [number, number];
    } else {
      alert("Address not found");
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
  };

  return (
    <CalculatorContainer  data-aos="fade-up">
      <Title>Logistics Route Calculator</Title>
      <Input
        type="text"
        placeholder="Start Address or Postal Code"
        value={startAddress}
        onChange={(e) => setStartAddress(e.target.value)}
      />
      <Input
        type="text"
        placeholder="End Address or Postal Code"
        value={endAddress}
        onChange={(e) => setEndAddress(e.target.value)}
      />
      <VehicleSelector setVehicle={setVehicle} />
      <OptionsSelector setOptions={setOptions} />
      <Button onClick={handleCalculate}>Calculate</Button>
      {distance > 0 && <TextCalc>Distance: <Result>{distance.toFixed(2)} km </Result>  </TextCalc>}
      <ResultDisplay result={result} />
      <MapContainer
        center={{ lat: 50, lng: 20 }}
        zoom={5}
        style={{ height: "200px", width: "100%", marginTop: "1rem" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {startCoords && endCoords && (
          <RoutingMachine startCoords={startCoords} endCoords={endCoords} />
        )}
      </MapContainer>
    </CalculatorContainer>
  );
};

export default Calculator;
