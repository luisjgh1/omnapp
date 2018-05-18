import React from 'react'
import ArrowRight from '../../assets/icon-arrow-right.svg'

const Card = ({
  title,
  content,
  customClassName = '',
  customTitleClassName = '',
  customContentClassName = '',
  isActive = false
}) =>
  <div className={`card ${customClassName}`}>
    {
      isActive
        ? <div className='card__arrow-icon'>
          <img src={ArrowRight} width='30' />
        </div>
        : null
    }
    <h3 className={`card__title ${customTitleClassName}`}>{title}</h3>
    <h5 className={`card__content ${customContentClassName}`}>{content}</h5>
  </div>

export default Card
