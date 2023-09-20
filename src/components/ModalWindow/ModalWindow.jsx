import { useState } from "react";
import { Box, Modal, Backdrop } from "@mui/material";
import css from "./ModalWindow.module.css";
import iconClose from "../../icons/closeModalIcon.svg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "541px",
  padding: "40px",
  bgcolor: "background.paper",
  borderRadius: "24px",
  boxShadow: 24,
  alightItems: "center",
  justifyContent: "center",
};

export default function ModalWindow({
  onClick,
  id,
  img,
  description,
  make,
  model,
  year,
  city,
  country,
  type,
  fuel,
  engine,
  accessories,
  functionalities,
  conditions,
  price,
  mileage,
}) {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };

  const formatedMileage = mileage.toLocaleString("en-US");

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={() => {
          handleClose();
          onClick();
        }}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 300,
          },
        }}
      >
        <Box sx={style}>
          <button type="button" onClick={handleClose} className={css.closeBtn}>
            <img src={iconClose} alt="close modal window" />
          </button>
          <img src={img} alt={description} className={css.img} />
          <h2 className={css.title}>
            {make} <span className={css.model}>{model}</span>, {year}
          </h2>

          <div className={css.summary}>
            <p>
              <span>{city}</span>
              <span> {country}</span>
              <span> Id: {id}</span>
              <span> Year: {year}</span>
              <span> Type: {type}</span>
            </p>
            <p>
              <span> Fuel Consumption: {fuel}</span>
              <span> Engine Size: {engine} </span>
            </p>
          </div>
          <p className={css.description}>{description}</p>

          <h3 className={css.subtitle}>
            Accessories and functionalitiestionalities:
          </h3>

          <div className={css.summary}>
            <p>
              <span>{accessories[0]}</span>
              <span>{accessories[1]}</span>
              <span>{accessories[2]}</span>
            </p>
            <p>
              <span>{functionalities[0]}</span>
              <span>{functionalities[1]}</span>
              <span>{functionalities[2]}</span>
            </p>
          </div>
          <h3 className={css.subtitle}>Rental conditions:</h3>
          <div className={css.conditions}>
            <span className={css.condition}>
              Minimum age:{" "}
              <span className={css.conditionValue}>
                {conditions.split("\n")[0].match(/\d+/)}
              </span>
            </span>
            <span className={css.condition}>{conditions.split("\n")[1]}</span>
            <span className={css.condition}>{conditions.split("\n")[2]}</span>
            <span className={css.condition}>
              Mileage:{" "}
              <span className={css.conditionValue}>{formatedMileage}</span>
            </span>
            <span className={css.condition}>
              Price: <span className={css.conditionValue}>{price}</span>
            </span>
          </div>
          <a href="tel:380730000000" className={css.rentalCarBtn}>
            Rental car
          </a>
        </Box>
      </Modal>
    </div>
  );
}
