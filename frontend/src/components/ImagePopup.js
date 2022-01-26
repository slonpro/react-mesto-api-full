function ImagePopup(props) {
  return (
    <div className={`popup popup_img ${props.card ? 'popup_opened' : ''}`}>
      <div className="popup__window-img">
        <img className="popup__img" src={props.card ? props.card.link : ""} alt={props.card?.name} />
        <button type="button" className="popup__button-close popup__button-close_img" onClick={props.onClose}></button>
        <figcaption className="popup__figcaption">{props.card?.name}</figcaption>
      </div>
    </div>
  )
}

export default ImagePopup