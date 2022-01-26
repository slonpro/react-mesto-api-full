import './Sign.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';

export default function Register(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  function handleChange(e, setter) {
    setter(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.isRegistration({
      email: email,
      password: password
    })

  }


  return (
    <main className="main">
      <section className="sign">
        <h2 className="sign__title">Регистрация</h2>
        <form onSubmit={handleSubmit} className="sign__form">
          <input placeholder="Email" value={email} onChange={(e) => handleChange(e, setEmail)} className="sign__form-input" type="email" />
          <input placeholder="Пароль" value={password} onChange={(e) => handleChange(e, setPassword)} className="sign__form-input" type="password" />
          <button className="sign__button">Зарегистрироваться</button>
        </form>
        <Link to="/sign-in" className="sign__signin">Уже зарегестрировались? Войти</Link>
      </section>
    </main>
  )
}