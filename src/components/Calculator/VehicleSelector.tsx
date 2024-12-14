import React from "react";
import caddy from "../../assets/image/завантаження-caddy.jpeg"
import ford from "../../assets/image/ford-transit.webp"
import crafter from "../../assets/image/VOLKSWAGEN-CRAFTER.jpeg"
import Man from "../../assets/image/man-tgl_truck.webp"
import { ButtonSelect, ButtonWithTooltip, Tooltip } from "./Calc.styled";
import { useTranslation } from "react-i18next";
export interface VehicleSelectorProps {
  setVehicle: React.Dispatch<React.SetStateAction<string>>;
}


const VehicleSelector: React.FC<VehicleSelectorProps> = ({ setVehicle }) => {
  const { t } = useTranslation();

  const vehicles = [
    {
      id: "1-pallet",
      name: t("vehicle_1_name"),
      info: t("vehicle_1_info"),
      media: caddy,
    },
    {
      id: "4-pallet",
      name: t("vehicle_2_name"),
      info: t("vehicle_2_info"),
      media: ford,
    },
    {
      id: "10-pallet",
      name: t("vehicle_3_name"),
      info: t("vehicle_3_info"),
      media: crafter,
    },
    {
      id: "15-pallet",
      name: t("vehicle_4_name"),
      info: t("vehicle_4_info"),
      media: Man,
    },
  ];

  return (
    <div>
      <h2>{t("select_vehicle")}</h2>
      {vehicles.map((vehicle) => (
        <ButtonWithTooltip key={vehicle.id}>
          <ButtonSelect onClick={() => setVehicle(vehicle.id)}>{vehicle.name}</ButtonSelect>
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
