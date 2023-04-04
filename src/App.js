import {React, useEffect, useState } from "react";
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
  },[])

  return (
    <>
    <Header />
      <Main
    films={films}
      />
  </>
  );
}

export default App;
