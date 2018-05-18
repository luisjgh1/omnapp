import React from 'react'
import Card from './Card'

export default class CardList extends React.Component {
  render () {
    return (
      <div className='card-list'>
        {this.props.cards.map((card, index) =>
          <Card
            title={card.title}
            content={card.content}
            customTitleClassName={card.color === 'blue' ? 'card__title--white' : ''}
            customContentClassName={card.color === 'blue' ? 'card__content--white' : ''}
            customClassName={`card-list__card ${card.color === 'blue' ? 'card-list__card--navy' : ''}`}
          />
        )}
        <button className='card-list__btn'> + Añadir dirección</button>
      </div>
    )
  }
}
