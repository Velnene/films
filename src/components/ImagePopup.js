import { useState } from "react";

function ImagePopup({ isOpenImagePopup, onClose, card }) {  
  return (

    <>
      {/*popup image*/}
      <section className={"popup popup_open-image" + (isOpenImagePopup && ' popup_opened')}>
        <div className="popup__image-container">
          <button className="popup__button-close popup__image-button-close" type="button" title="закрытие карточки" onClick={onClose}></button>
          <img className="popup__image" src={card.posterUrl} alt={card.nameRu} />
          <p className="popup__subtitle">{card.nameRu}</p>
          <p className="popup__subtitle">Длительность фильма: {card.filmLength}</p>
          <p className="popup__subtitle">год: {card.year}г</p>
        </div>
      </section>
    </>
  )
}

export default ImagePopup;