import CarCard from "../CarCard/CarCard";
import css from "./CarList.module.css";
import advertsCars from "../../advertsCars.json";

const CarList = () => {
  return (
    <>
      <ul className={css.list}>
        {advertsCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </ul>
    </>
  );
};

export default CarList;
