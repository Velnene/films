import { useState } from "react";
import api from "../utils/api";
import Card from "./Card";

function Main(props) {
  
  return (

    <>
      <section className="elements">
        <button />
        <section className="element">
          {props.films.map((film) => (
            <Card 
            film={film}/>
          ))}
        </section>
      </section>
    </>
  )

}
export default Main;