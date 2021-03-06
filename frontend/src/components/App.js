import React, { useCallback, useState } from 'react';
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
import { Route, Switch, useHistory } from 'react-router-dom'
import Login from './Login';
import Register from './Register';
import ProtectedRoute from './ProtectedRoute';
import auth from '../utils/Auth';
import InfoToolTip from './InfoToolTip';



function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [selectCard, setSelectCard] = useState(null)
  const [currentUser, setCurrentUser] = useState({})
  const [cards, setCards] = React.useState([])
  const [loginIn, setLoginIn] = React.useState(null)
  const [isStatusRegister, setIsStatusRegister] = useState(false)
  const [isTitleModal, setIsTitleModal] = useState('')
  const [isClassStatus, setIsClassStatus] = useState('')
  const history = useHistory();

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setSelectCard(false)
    setSelectCard(null)
  }

  const handleSetLogin = (status) => {
    setLoginIn(status)
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

  const handleCheckToken = useCallback(() => {
    const jwt = document.cookie.valueOf("jwt");
    const token = localStorage.getItem("token")
    if (jwt || token) {
      auth.checkToken()
        .then((res) => {
          setTimeout(() => {
            setLoginIn(true)
          }, 1000)
          
          history.push('/')
          localStorage.setItem('email', res.email)

        })
        .catch(err => console.log(`???????????? ???????????????? ????????????: ${err}`))
    } else { 
      setLoginIn(false)
    }
  }, [history])

  React.useEffect(() => {
    const token = localStorage.getItem("token")
    if (loginIn) {
      api.getUserInfo(token)
      .then((result) => {
        setCurrentUser(result)
      })
      .catch(err => console.log(`???????????? ???????????????? ????????????: ${err}`))

    api.getInitialCards(token)
      .then(result => setCards(result.reverse()))
      .catch(err => console.log(`???????????? ???????????????? ????????????: ${err}`))

    }

    handleCheckToken()
  }, [loginIn, handleCheckToken])

/*   React.useEffect(() => {
    loginIn ? history.push('/') : history.push('/sign-in')
  }, [loginIn]) */

  function handleCardLike(card, isLiked) {

    api.toogleLike(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
      .catch(err => console.log(`???????????? ?????????????????? ??????????: ${err}`));

  }

  function handleCardDelete(card) {

    api.deleteCard(card._id)
      .then((result) => {
        setCards(cards.filter((c) => c._id !== card._id))
      })
      .catch(err => console.log(`???????????? ???????????????? ????????????????: ${err}`));
  }

  React.useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        closeAllPopups();
      }
    }

    document.addEventListener('keydown', closeByEscape)

    return () => document.removeEventListener('keydown', closeByEscape)
  }, [])

  function updateDataUser(result) {
    setCurrentUser(result)
    closeAllPopups()
  }

  function handleUpdateUser(newDataUser) {
    api.setUserInfo(newDataUser)
      .then(result => {
        updateDataUser(result)
      })
      .catch(err => console.log(`???????????? ???????????????? ???????????? ??????????????????????: ${err}`));
  }

  function handleUpdateAvatar(src) {
    api.setUserAvatar(src)
      .then(result => {
        updateDataUser(result)
      })
      .catch(err => console.log(`???????????? ???????????????? ????????????: ${err}`));
  }

  function handleUpdateCards(card) {
    api.addCard(card)
      .then(newCard => {
        setCards([newCard, ...cards])
        closeAllPopups()
      })
      .catch(err => console.log(`???????????? ???????????????????? ????????????????: ${err}`));

  }

  function handleSubmitRegister(dataUser) {
    auth.register(dataUser)
      .then((res) => {
        setIsTitleModal('???? ?????????????? ????????????????????????????????????!')
        setIsClassStatus('accept-status')
      })
      .catch((error) => {
        setIsTitleModal(error)
        setIsClassStatus('error-status')
      })
      .finally(() => {
        setIsStatusRegister(true)
      })
  }

  function signOut() {
    auth.logout()
      .then(() => {
        localStorage.removeItem("token")
        history.push('/sign-in');
        handleSetLogin(false)
      })

  }

  return (

    <div className="root__page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header logout={signOut} />
        <Switch>
          <ProtectedRoute exact path="/"
            loginIn={loginIn}
            component={Main}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete} />
          <Route path="/sign-in">
            <Login
              setLogin={handleSetLogin}
            />
          </Route>
          <Route path="/sign-up">
            <Register
              isRegistration={handleSubmitRegister}
            />
          </Route>

        </Switch>
        <Footer />
        <EditProfilePopup onUpdateUser={handleUpdateUser} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
        <AddPlacePopup onUpdateCards={handleUpdateCards} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
        <EditAvatarPopup onUpdateAvatar={handleUpdateAvatar} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
        <InfoToolTip
          name="infotool"
          onClose={() => { setIsStatusRegister(false) }}
          isOpen={isStatusRegister}
          title={isTitleModal}
          classStatus={isClassStatus}

        />
        <PopupWithForm
          name="delete-card"
          title="???? ???????????????"
          buttonText={'????'}>
        </PopupWithForm>
        <ImagePopup card={selectCard} onClose={closeAllPopups} />
      </CurrentUserContext.Provider>
    </div >
  );
}

export default App;
