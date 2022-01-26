import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [selectCard, setSelectCard] = useState(null)
  const [currentUser, setCurrentUser] = useState({})
  const [cards, setCards] = React.useState([])


  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setSelectCard(false)
    setSelectCard(null)
  }

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true)
  }

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true)
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true)
  }

  const handleCardClick = (card) => {
    setSelectCard(card)
  }

  React.useEffect(() => {
    api.getUserInfo()
      .then((result) => {
        setCurrentUser(result)
      })
      .catch(err => console.log(`Ошибка загрузки данных: ${err}`))

    api.getInitialCards()
      .then(result => setCards(result))
      .catch(err => console.log(`Ошибка загрузки данных: ${err}`))
  }, [])

  function handleCardLike(card, isLiked) {

    api.toogleLike(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
      .catch(err => console.log(`Ошибка установки лайка: ${err}`));

  }

  function handleCardDelete(card) {

    api.deleteCard(card._id)
      .then((result) => {
        setCards(cards.filter((c) => c._id !== card._id))
      })
      .catch(err => console.log(`Ошибка удаление карточки: ${err}`));
  }

  function updateDataUser(result) {
    setCurrentUser(result)
    closeAllPopups()
  }

  function handleUpdateUser(newDataUser) {
    api.setUserInfo(newDataUser)
      .then(result => {
        updateDataUser(result)
      })
      .catch(err => console.log(`Ошибка загрузка данных пользоветял: ${err}`));
  }

  function handleUpdateAvatar(src) {
    api.setUserAvatar(src)
      .then(result => {
        updateDataUser(result)
      })
      .catch(err => console.log(`Ошибка загрузка аватар: ${err}`));
  }

  function handleUpdateCards(card) {
    api.addCard(card)
      .then(newCard => {
        setCards([newCard, ...cards])
        closeAllPopups()
      })
      .catch(err => console.log(`Ошибка добавление карточки: ${err}`));

  }

  return (

    <div className="root__page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete} />
        <Footer />
        <EditProfilePopup onUpdateUser={handleUpdateUser} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
        <AddPlacePopup onUpdateCards={handleUpdateCards} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
        <EditAvatarPopup onUpdateAvatar={handleUpdateAvatar} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
        <PopupWithForm
          name="delete-card"
          title="Вы уверены?">
          <fieldset className="popup__fieldset">
            <input type="submit" className="popup__save-button" value="Да" />
          </fieldset>
        </PopupWithForm>
        <ImagePopup card={selectCard} onClose={closeAllPopups} />
      </CurrentUserContext.Provider>
    </div >
  );
}

export default App;
