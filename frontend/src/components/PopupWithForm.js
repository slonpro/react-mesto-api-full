function PopupWithForm(props) {
  return (
    <div className={`popup popup_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__window">
        <button type="button" className="popup__button-close" onClick={props.onClose}></button>
        {props.imgStatus && <h2>все ок</h2>}
        <h2 className="popup__title">{props.title}</h2>
        <form onSubmit={props.onSubmit} name={`popup_form-${props.name}`} action="#" className={`popup__form popup__${props.name}`} >
          <fieldset className="popup__fieldset">
            {props.children}
            <input type="submit" className="popup__save-button" value={props.buttonText} />
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm