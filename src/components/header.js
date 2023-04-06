import { Link, Route, Routes } from 'react-router-dom';
import api from '../utils/api';
import { useEffect, useState } from 'react';
function Header(props) {
  const [value, getValue] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    props.getSerchFilm(value)
  }

  useEffect(() => {
    props.getSerchFilm(value)
  }, [value])

  function handleChange(e) {
    getValue(e.target.value)
  }

  function getFilm() {
    getValue('');
    props.getFilm();
  }

  return (
    <header className="header">
      <div className='header__logo'>Films</div>
      <form className='header__form' onSubmit={handleSubmit}>
        <input value={value} onChange={handleChange} type='text' placeholder='Поиск' className='header__search' />
        <button onClick={getFilm} className='header__top-films'>Топ 20 фильмов</button>
      </form>
    </header>
  )
}
export default Header;