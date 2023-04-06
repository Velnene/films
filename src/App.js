import { React, useEffect, useState } from "react";
import Header from "./components/header";
import Main from "./components/Main";
import api from "./utils/api";
import ImagePopup from "./components/ImagePopup";

function App() {
  const [films, getFilms] = useState([]);
  const [openImagePopup, isOpenImagePopup] = useState(false);
  const [dataCard, getDataCard] = useState({});

  function handleCardClick(card) {
    isOpenImagePopup(true)
    getDataCard(card)
  }

  function onClose() {
    isOpenImagePopup(false)
  }

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
          handleCardClick={handleCardClick}
          films={films}
        />
        <ImagePopup
          card={dataCard}
          onClose={onClose}
          isOpenImagePopup={openImagePopup}
        />
      </div>
    </div>
  );
}

export default App;
