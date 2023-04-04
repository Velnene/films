import { Link, Route, Routes } from 'react-router-dom';
import api from '../utils/api';
function Header() {

  

  return (
    <header className="header">

      <div className='header__logo'>Header</div>
      <form>
       
        <input type='text' placeholder='Поиск' className='header__search' />
      </form>
    </header>
  )
}
export default Header;