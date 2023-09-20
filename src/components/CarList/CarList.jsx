import CarCard from "../CarCard/CarCard";
import css from "./CarList.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

const CarList = ({ cars }) => {
  // const [cars, setCars] = useState([]);
  // const [itemsToShow, setItemsToShow] = useState(8);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await axios.get(
  //         "https://650afba7dfd73d1fab095a36.mockapi.io/adverts"
  //       );
  //       const data = response.data;
  //       console.log(data);
  //       setCars(data.slice(0, itemsToShow));
  //     } catch (error) {
  //       console.error("Помилка під час отримання даних:", error);
  //     }
  //   }
  //   fetchData();
  // }, [itemsToShow]);

  // const handleLoadMore = () => {
  //   setItemsToShow(itemsToShow + 8);
  // };
  return (
    <>
      <ul className={css.list}>
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </ul>
      {/* <button className={css.loadMoreBtn} onClick={handleLoadMore}>
        Load more
      </button> */}
    </>
  );
};

export default CarList;
