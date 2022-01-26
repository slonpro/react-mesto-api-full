import React from "react"
import { CurrentUserContext } from "../contexts/CurrentUserContext"
import Card from "./Card"

export default function Main(props) {
  const dataUser = React.useContext(CurrentUserContext)
  
  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar" onClick={props.onEditAvatar} style={{ backgroundImage: `url(${dataUser.avatar})` }}></div>
        <div className="profile__profile-info">
          <div className="profile__name-block">
            <h1 className="profile__name">{dataUser.name}</h1><button onClick={props.onEditProfile} aria-label="Редактировать" type="button"
              className="profile__edit-button"></button>
          </div>
          <p className="profile__description">{dataUser.about}</p>
        </div>

        <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
      </section>
      <section className="card">

        {props.cards.map((card) => {
          return <Card card={card} onCardDelete={props.onCardDelete} onCardLike={props.onCardLike} onCardClick={props.onCardClick} key={card._id} />
        })}
      </section>
    </main>
  )
}