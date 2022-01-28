import logo from '../img/logo.svg';
import { Link, useLocation } from 'react-router-dom';

const Header = ({logout}) => {
  const location = useLocation();


  function navRight(currentUrl) {
    if (currentUrl.pathname === "/sign-in") {
      return <Link to="/sign-up" className="header__sign">Регистрация</Link>
    }
    if (currentUrl.pathname === "/sign-up") {
      return <Link to="/sign-in" className="header__sign">Вход</Link>
    }
    if (currentUrl.pathname === "/") {
      return (
        <div>
        <Link to="" className="header__sign">{localStorage.getItem('email')}</Link>
        <Link to="/sign-up" onClick={logout} className="header__sign header__sign_exit">Выйти</Link>
        </div>
      )
    }
  }

  return (
    <header className="header">
      <Link to="/"><img src={logo} alt="Логотип сайта" className="header__logo" /></Link>
      {navRight(location)}
    </header>
  )
}

export default Header