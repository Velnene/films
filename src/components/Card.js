import React from 'react';

function Card(props) {
  console.log(props.film)
  return (
    <div id="element-template">
      <article className="element">
        <img className="element__image" alt={props.film.posterUrl} src={props.film.posterUrl} />
        <div className="element__footer">
          <p className="element__name">{props.film.nameRu}</p>
          <p className="element__like-count">{props.film.rating}</p>
        </div>
      </article>
    </div>
  )
}

export default Card;