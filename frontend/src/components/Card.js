import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";


function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card, isLiked)
  }

  function handleDeleteClick(e) {
    props.onCardDelete(props.card)
    e.stopPropagation()
  }

  const dataUser = React.useContext(CurrentUserContext)
  const isOwn = props.card.owner === dataUser._id;
  const cardDeleteButtonClassName = (
    `${isOwn ? 'card__delete' : 'card__delete_hidden'}`
  );
  const isLiked = props.card.likes.some(i => i === dataUser._id);
  const cardLikeButtonClassName = `card__like ${isLiked ? 'card__like_active' : ''}`;

  return (
    <article className="card__item">
      <div className="card__block-img" onClick={handleClick}>
        <img className="card__img" alt={props.card.name} src={props.card.link} />
        <button onClick={handleDeleteClick} className={cardDeleteButtonClassName}></button>
      </div>
      <div className="card__signature-block">
        <h3 className="card__title">{props.card.name}</h3>
        <div className="card__block-like">
          <button type="button" onClick={handleLikeClick} className={cardLikeButtonClassName}></button>
          <p className="card__counter">{props.card.likes.length}</p>
        </div>
      </div>
    </article>
  )

}

export default Card