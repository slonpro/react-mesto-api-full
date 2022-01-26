function PopupWithForm(props) {
  return (
    <div className={`popup popup_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__window">
        <button type="button" className="popup__button-close" onClick={props.onClose}></button>
        <h2 className="popup__title">{props.title}</h2>
        <form onSubmit={props.onSubmit} name="popup_form" action="#" className={`popup__form popup__${props.name}`} noValidate>
          {props.children}
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm