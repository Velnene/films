import { React, useEffect, useState } from "react";
import Header from "./components/header";
import Main from "./components/Main";
import api from "./utils/api";

function App() {
  const [films, getFilms] = useState([]);

  useEffect(() => {
    getFilm();
  }, [])

  function getFilm() {
    api.getFilm()
      .then((res) => {
        getFilms(res.films);
      }).catch((err) => {
        alert(err);
      });
  }

  function serchFilm(word) {
    if (word === '') {
      return
    }
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
          getFilm={getFilm}
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
