export class Api {
  constructor() {
    this._cardUrl = 'https://mesto.nomoreparties.co/v1/cohort-59/cards/';
    this._userUrl = 'https://nomoreparties.co/v1/cohort-59/users/me/';
    this._token = '4d30e00f-4868-4e38-a672-84cd476f7f32';
  }

  getFilm() {
    return fetch("https://kinopoiskapiunofficial.tech/api/v2.1/films/top", {
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": "8c8e1a50-6322-4135-8875-5d40a5420d86"
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        else {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
      })
  }

  serchFilm(keyword) {
    return fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${keyword}`, {
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": "8c8e1a50-6322-4135-8875-5d40a5420d86"
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        else {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
      })
  }
}

const api = new Api();
export default api;