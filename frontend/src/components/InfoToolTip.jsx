import React from 'react';

export default function InfoToolTip(props) {

  return (
    <div className={`popup popup_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__window">
        <button type="button" className="popup__button-close" onClick={props.onClose}></button>
        <div className="popup__info-tool">
        <div className={`popup__info-tool_${props.classStatus}`}></div>
        <h2 className="popup__title popup__title_infotool">{props.title}</h2>
        </div>
      </div>
    </div>
  )
}