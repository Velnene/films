import { React, useEffect, useState } from "react";
import Header from "./components/header";
import Main from "./components/Main";
import api from "./utils/api";

function App() {
  const [films, getFilms] = useState([]);


  useEffect(() => {
    api.getFilm()
      .then((res) => {
        getFilms(res.films);
      }).catch((err) => {
        alert(err);
      });
  }, [])

  function serchFilm(word) {
    api.serchFilm(word)
      .then((res) => {
        getFilms(res.films)
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="page">
      <div className="page__container">
        <Header
          getSerchFilm={serchFilm}
        />
        <Main
         
          films={films}
        />
      </div>
    </div>
  );
}

export default App;
