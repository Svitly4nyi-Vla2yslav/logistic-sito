const calculatePrice = (vehicle, distance, options) => {
    let basePrice = 0;
  
    // Базові ціни залежно від типу автомобіля
    if (vehicle === "1-pallet") basePrice = distance <= 90 ? 180 : distance * 2;
    if (vehicle === "4-pallet") basePrice = distance <= 90 ? 200 : distance * 2.1;
    if (vehicle === "10-pallet") basePrice = distance <= 90 ? 250 : distance * 2.77;
    if (vehicle === "15-pallet") basePrice = distance <= 90 ? 390 : distance * 4.23;
  
    // Додаткові опції
    if (options.refrigerator) basePrice += distance * 0.5;
    if (options.adr) basePrice += distance * 0.22;
  
    return basePrice;
  };
  
  export default calculatePrice;