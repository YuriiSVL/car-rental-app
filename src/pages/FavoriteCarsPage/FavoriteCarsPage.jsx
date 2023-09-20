import CarList from "../../components/CarList/CarList";

const FavoriteCarsPage = () => {
  // const [favoriteCars, setFavoriteCars] = useState([]);

  const favoriteCars = JSON.parse(localStorage.getItem("favoriteCars")) || [];

  // useEffect(() => {
  //   const existingFavoriteCars =
  //     JSON.parse(localStorage.getItem("favoriteCars")) || [];
  //   setFavoriteCars(existingFavoriteCars);
  // }, []);

  return (
    // <div>
    //   <h2>Favorite Cars</h2>
    //   <ul>
    //     {favoriteCars.map((car) => (
    //       <li key={car.id}>
    //         {car.make} - {car.model}
    //       </li>
    //     ))}
    //   </ul>
    // </div>

    <CarList cars={favoriteCars} />
  );
};

export default FavoriteCarsPage;
