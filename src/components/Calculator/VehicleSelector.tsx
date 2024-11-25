import React from "react";
import styled from "styled-components";

interface VehicleSelectorProps {
  setVehicle: React.Dispatch<React.SetStateAction<string>>;
}

const Button = styled.button`
  background: linear-gradient(90deg, #007bff, #00ffe7);
  color: white;
  border: none;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  font-size: 1rem;
  font-family: 'Orbitron', sans-serif;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 15px #00ffe7, 0 0 25px #007bff;
  }
`;

const VehicleSelector: React.FC<VehicleSelectorProps> = ({ setVehicle }) => {
  const vehicles = [
    { id: "1-pallet", name: "1 Euro Pallet" },
    { id: "4-pallet", name: "4 Euro Pallets" },
    { id: "10-pallet", name: "10 Euro Pallets" },
    { id: "15-pallet", name: "15 Euro Pallets" },
  ];

  return (
    <div>
      <h2>Select Vehicle</h2>
      {vehicles.map((vehicle) => (
        <Button key={vehicle.id} onClick={() => setVehicle(vehicle.id)}>
          {vehicle.name}
        </Button>
      ))}
    </div>
  );
};

export default VehicleSelector;
