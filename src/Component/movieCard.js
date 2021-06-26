import React from "react";
import RenderCard from "./renderCard";
import "./MovieCard.css";
import img1 from "./mulan.jpg";
import img2 from "./pocahontas.jpg";
import img3 from "./snowFiction.jpg";
import img4 from "./tarazan.jpg";
import img5 from "./fantasia.jpg";
import img6 from "./enchanted.jpg";

const MovieCard = (props) => {
  const cardInfo = [
    {
      id: Math.random(),
      Image: img1,
      Title: "Mulan",
      Text: " Action/Aventure",
      Date:1989,
      Rating: 4,
    },
    {
      id: Math.random(),
      Image: img2,
      Title: "Pocahontas",
      Text: "Action/Aventure",
      Date:1900,
      Rating: 3,
    },
    {
      id: Math.random(),
      Image: img3,
      Title: "Snow Fiction",
      Text: "Action/Aventure",
      Date:2010,
      Rating: 2,
    },
    {
      id: Math.random(),
      Image: img4,
      Title: "Tarazan",
      Text: "Action/Aventure",
      Date:2012,
      Rating: 5,
    },
    {
      id: Math.random(),
      Image: img5,
      Title: "Fantasia",
      Text: "Action/Aventure",
      Date:2020,
      Rating: 1,
    },
    {
      id: Math.random(),
      Image: img6,
      Title: "Enchanted",
      Text: "Action/Aventure",
      Date:2002,
      Rating: 3,
    },
  ];

  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "auto auto auto auto" }}
    >
      {cardInfo.map(RenderCard)}
    </div>
  );
};
export default MovieCard;
