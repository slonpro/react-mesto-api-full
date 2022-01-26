import React from "react";
import PopupWithForm from "./PopupWithForm"

export default function AddPlacePopup(props) {
  const [title, setTitle] = React.useState('');
  const [src, setSrc] = React.useState('');

  function handleChangeTitle(e) {
    setTitle(e.target.value);
  }

  function handleChangeSrc(e) {
    setSrc(e.target.value);
  }


  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateCards({
      name: title,
      link: src
    });
    setTitle('')
    setSrc('')
  }


  return (
    <PopupWithForm
      onClose={props.onClose}
      isOpen={props.isOpen}
      name="card"
      title="Новое место"
      onSubmit={handleSubmit}>
      <fieldset className="popup__fieldset">
        <label htmlFor="" className="popup__label">
          <input type="text" value={title} onChange={handleChangeTitle} name="title" id="title" className="popup__input popup__input_card" placeholder="Название"
            minLength="2" maxLength="30" required />
          <span className="popup__form-error title-error"></span>
        </label>
        <label htmlFor="" className="popup__label">
          <input type="url" value={src} onChange={handleChangeSrc} name="src" id="src" className="popup__input popup__input_card"
            placeholder="Ссылка на картинку" required />
          <span className="popup__form-error src-error"></span>
        </label>
        <input id="submit" type="submit" className="popup__save-button" value="Создать" />
      </fieldset>
    </PopupWithForm>
  )
}