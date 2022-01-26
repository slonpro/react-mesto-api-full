import PopupWithForm from "./PopupWithForm"
import React from 'react';

export default function EditAvatarPopup(props) {
  const src = React.useRef()


  function handleSubmit(e) {
    e.preventDefault();
  
    props.onUpdateAvatar({
      avatar: src.current.value,
    });
    src.current.value = ''
  } 

  return (
    <PopupWithForm
    onClose={props.onClose}
    isOpen={props.isOpen}
    name="avatar"
    title="Обновить аватар"
    onSubmit={handleSubmit}>
    <fieldset className="popup__fieldset">
      <label htmlFor="" className="popup__label">
        <input ref={src} type="url" name="src" id="urlavatar" className="popup__input popup__input_card"
          placeholder="Ссылка на аватар" required />
        <span className="popup__form-error urlavatar-error"></span>
      </label>
      <input type="submit" className="popup__save-button" value="Сохранить" />
    </fieldset>
  </PopupWithForm>
  )
}