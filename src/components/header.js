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

  return (
    <header className="header">
      <div className='header__logo'>Header</div>
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={handleChange} type='text' placeholder='Поиск' className='header__search' />
      </form>
    </header>
  )
}
export default Header;