import React from "react";
import styled from "styled-components";
import caddy from "../../assets/image/завантаження-caddy.jpeg"
import ford from "../../assets/image/ford-transit.webp"
import crafter from "../../assets/image/VOLKSWAGEN-CRAFTER.jpeg"
import Man from "../../assets/image/man-tgl_truck.webp"
interface VehicleSelectorProps {
  setVehicle: React.Dispatch<React.SetStateAction<string>>;
}

const ButtonContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const Button = styled.button`
  color: white;
  border: none;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  font-size: 1rem;
  font-family: 'Orbitron', sans-serif;
  text-decoration: none;
  background: linear-gradient(90deg, #007bff, #6f42c1);
  color: white;
  display: inline-block;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  overflow: hidden;
  letter-spacing: 2px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  &:hover,
  &:focus {
    color: #007bff;
    background: rgba(255, 255, 255, 0);

    &:before {
      width: 100%;
    }
  }
`;

const Tooltip = styled.div`
  visibility: hidden;
  width: 250px;
  background-color: #fff;
  color: #333;
  text-align: center;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s;

  img {
    max-width: 100%;
    border-radius: 5px;
  }

  p {
    margin-top: 10px;
    font-size: 0.9rem;
  }
`;

const ButtonWithTooltip = styled(ButtonContainer)`
  &:hover ${Tooltip} {
    visibility: visible;
    opacity: 1;
  }
`;

const VehicleSelector: React.FC<VehicleSelectorProps> = ({ setVehicle }) => {
  const vehicles = [
    {
      id: "1-pallet",
      name: "1 Euro Pallet",
      info: "Розмір палети: 1200x800 мм. Площа в машині: 160x100x120.  Підходить для дрібних перевезень. Функціонал машини: Завантаження можливе тільки ззаду. Автомобіль не має висоти пандуса.  У автомобіля немає підйомної платформи",
      media: caddy,
    },
    {
      id: "4-pallet",
      name: "4 Euro Pallets",
      info: "Площа в машині: 3.84 м². Машина може взяти 3,7x150x170. Підходить для дрібних перевезень. Функціонал машини: Завантаження можливе тільки ззаду ",
      media: ford,
    },
    {
      id: "10-pallet",
      name: "10 Euro Pallets",
      info: "Оптимально для середніх партій. Машина може взяти 480x220x230. Загальна площа: 9.6 м². Функціонал машини: Можливе завантаження збоку і ззаду. Автомобіль не має висоти пандуса. Автомобіль має додаткову підйомну платформу та візок із піддонами",
      media: crafter,
    },
    {
      id: "15-pallet",
      name: "15 Euro Pallets",
      info: "Ідеально для великих вантажів. Максимальна площа в машині: 14.4 м² (610x245x250)  до 2150 кг. Функціонал машини: Можливе завантаження збоку і ззаду і (зверху). Автомобіль  має висоту пандуса. Автомобіль має додаткову підйомну платформу та візок із піддонами",
      media: Man,
    },
  ];

  return (
    <div>
      <h2>Select Vehicle</h2>
      {vehicles.map((vehicle) => (
        <ButtonWithTooltip key={vehicle.id}>
          <Button onClick={() => setVehicle(vehicle.id)}>{vehicle.name}</Button>
          <Tooltip>
            <img src={vehicle.media} alt={vehicle.name} />
            <p>{vehicle.info}</p>
          </Tooltip>
        </ButtonWithTooltip>
      ))}
    </div>
  );
};

export default VehicleSelector;
