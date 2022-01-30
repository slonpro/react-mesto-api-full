import './Sign.css'
import { useState } from 'react';
import auth from '../utils/Auth';
import { useHistory } from 'react-router-dom'

export default function Login(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  function handleChange(e, setter) {
    setter(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    auth.authorize(password, email)
      .then((data) => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          setPassword('')
          setEmail('')
          props.setLogin(true)
          history.push('/')
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <main className="main">
      <section className="sign">
        <h2 className="sign__title">Вход</h2>
        <form onSubmit={handleSubmit} className="sign__form" action="">
          <input placeholder="Email" value={email} onChange={(e) => handleChange(e, setEmail)} className="sign__form-input" type="email" />
          <input placeholder="Пароль" value={password} onChange={(e) => handleChange(e, setPassword)} className="sign__form-input" type="password" />
          <button className="sign__button">Войти</button>
        </form>
      </section>
    </main>
  )
}