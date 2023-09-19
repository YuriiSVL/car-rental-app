import css from "./CarCard.module.css";

const CarCard = ({ car }) => {
  return (
    <li className={css.item}>
      <img
        className={css.img}
        src={car.img || car.photoLink}
        alt={car.description}
      />
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
      <button className={css.btn} type="button">
        Learn more
      </button>
    </li>
  );
};

export default CarCard;
