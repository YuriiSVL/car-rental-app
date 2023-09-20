import { useState } from "react";
import css from "./CarCard.module.css";
import ModalWindow from "../ModalWindow/ModalWindow";
import toFavoriteIcon from "../../icons/toFavoriteIcon.svg";
import inFavoriteIcon from "../../icons/inFavoriteIcon.svg";
const CarCard = ({ car }) => {
  const favoriteCars = JSON.parse(localStorage.getItem("favoriteCars")) || [];
  const isInFavorite = favoriteCars.some((item) => item.id === car.id);

  const [isModalOpen, setModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(isInFavorite || false);

  const onLearnMoreBtnClick = () => {
    setModalOpen(true);
  };

  const onToFavoriteBtnClick = () => {
    const existingFavoriteCars =
      JSON.parse(localStorage.getItem("favoriteCars")) || [];

    if (isFavorite) {
      setIsFavorite(false);
      const updatedFavoriteCars = existingFavoriteCars.filter(
        (item) => item.id !== car.id
      );
      localStorage.setItem("favoriteCars", JSON.stringify(updatedFavoriteCars));
    } else {
      const updatedFavoriteCars = [...existingFavoriteCars, car];
      localStorage.setItem("favoriteCars", JSON.stringify(updatedFavoriteCars));
    }
    setIsFavorite(!isFavorite);
  };
  return (
    <li className={css.item}>
      <img
        className={css.img}
        src={car.img || car.photoLink}
        alt={car.description}
      />
      <button
        type="button"
        className={css.toFavoriteBtn}
        onClick={onToFavoriteBtnClick}
      >
        <img
          src={isFavorite ? inFavoriteIcon : toFavoriteIcon}
          alt="to favorite button"
        />
      </button>
      <h2 className={css.title}>
        {car.make}&nbsp;<span className={css.model}>{car.model}</span>,{" "}
        {car.year}
        <span className={css.price}>{car.rentalPrice}</span>
      </h2>
      <div className={css.description}>
        <p>
          <span>{car.address.split(",")[1]}</span>
          <span>{car.address.split(",")[2]}</span>
          <span>{car.rentalCompany}</span>
        </p>
        <p>
          <span>{car.type}</span>
          <span>{car.make}</span>
          <span>{car.id}</span>
          <span>{car.accessories[0]}</span>
        </p>
      </div>
      <button className={css.btn} type="button" onClick={onLearnMoreBtnClick}>
        Learn more
      </button>
      {isModalOpen && (
        <ModalWindow
          onClick={onToFavoriteBtnClick}
          id={car.id}
          img={car.img || car.photoLink}
          description={car.description}
          make={car.make}
          model={car.model}
          year={car.year}
          city={car.address.split(",")[1]}
          country={car.address.split(",")[2]}
          type={car.type}
          fuel={car.fuelConsumption}
          engine={car.engineSize}
          accessories={car.accessories}
          functionalities={car.functionalities}
          conditions={car.rentalConditions}
          price={car.rentalPrice}
          mileage={car.mileage}
        />
      )}
    </li>
  );
};

export default CarCard;
