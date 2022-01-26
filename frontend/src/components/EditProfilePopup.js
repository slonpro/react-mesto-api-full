import PopupWithForm from "./PopupWithForm"
import React from 'react';
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function EditProfilePopup(props) {
  const dataUser = React.useContext(CurrentUserContext)
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  React.useEffect(() => {
    setName(dataUser.name);
    setDescription(dataUser.about);
  }, [dataUser, props.isOpen]); 

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name,
      about: description,
    });
  } 

  return (
    <PopupWithForm
      onClose={props.onClose}
      isOpen={props.isOpen}
      name="profile"
      title="Редактировать профиль"
      onSubmit={handleSubmit}
      buttonText={'Сохранить'}>
        <label htmlFor="" className="popup__label">
          <input type="text" value={name || ''} onChange={handleChangeName} name="name" id="name" className="popup__input" placeholder="Имя" minLength="2" maxLength="40"
            required />
          <span className="popup__form-error name-error"></span>
        </label>
        <label htmlFor="" className="popup__label">
          <input type="text" value={description || ''} onChange={handleChangeDescription} name="description" id="description" className="popup__input" placeholder="О себе"
            minLength="2" maxLength="200" required />
          <span className="popup__form-error description-error"></span>
        </label>
    </PopupWithForm>
  )
}