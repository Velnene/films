import { useState } from "react";
import api from "../utils/api";
import Card from "./Card";

function Main(props) {
  
  return (

    <>
      <section className="elements">
          {props.films.map((film) => (
            <Card 
              handleCardClick={props.handleCardClick}
              film={film}
              key={film.filmId}/>
          ))}
      </section>
    </>
  )

}
export default Main;