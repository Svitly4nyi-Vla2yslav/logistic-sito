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
 transition: all 0.5s ease-in-out;
  font-size: 1rem;
  font-family: 'Orbitron', sans-serif;

  border: none;
  text-decoration: none;
  background: linear-gradient(90deg, #007bff, #00ffe7);
  color: white;
  display: inline-block;
  position: relative;
  // margin: 10px 0px;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  overflow: hidden;
  letter-spacing: 2px;
  border-radius: 10px;
  transition: 1.8s cubic-bezier(0.165, 0.84, 0.44, 1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  

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
