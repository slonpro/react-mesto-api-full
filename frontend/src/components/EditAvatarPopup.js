import PopupWithForm from "./PopupWithForm"
import React from 'react';

export default function EditAvatarPopup(props) {
  const src = React.useRef()


  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: src.current.value,
    });
  }

  React.useEffect(() => {
    src.current.value = ''
}, [props.isOpen]);

  return (
    <PopupWithForm
      onClose={props.onClose}
      isOpen={props.isOpen}
      name="avatar"
      title="Обновить аватар"
      onSubmit={handleSubmit}
      buttonText={"Сохранить"}>
      <label htmlFor="" className="popup__label">
        <input ref={src} type="url" name="src" id="urlavatar" className="popup__input popup__input_card"
          placeholder="Ссылка на аватар" required />
        <span className="popup__form-error urlavatar-error"></span>
      </label>
    </PopupWithForm>
  )
}