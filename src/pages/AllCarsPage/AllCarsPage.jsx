import { useEffect, useState } from "react";
import CarList from "../../components/CarList/CarList";
import axios from "axios";

const AllCarsPage = () => {
  const [cars, setCars] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(8);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://650afba7dfd73d1fab095a36.mockapi.io/adverts"
        );
        const data = response.data;
        console.log(data);
        setCars(data.slice(0, itemsToShow));
      } catch (error) {
        console.error("Помилка під час отримання даних:", error);
      }
    }
    fetchData();
  }, [itemsToShow]);

  const handleLoadMore = () => {
    setItemsToShow(itemsToShow + 8);
  };

  return (
    <section>
      <CarList cars={cars} />
      <button onClick={handleLoadMore}>Load more</button>
    </section>
  );
};

export default AllCarsPage;
