import React from 'react';
import { Link } from 'react-router-dom';
import { CardProps } from "../typescript/card";

export default function CardSection({ cards }: CardProps) {

  return (
    <div className='demo-section'>
      {cards?.map((card) => (
        <div className='cards' key={card.title_h3}>
          {card.title_h3 && <h3 {...card.$?.title_h3 as {}} style={{marginBottom:'15px'}}>{card.title_h3}</h3>}
          {card.description && <p {...card.$?.description as {}} style={{marginBottom:'8px'}}>{card.description}</p>}
          <div className='card-cta'>

            {card.call_to_action.href && card.call_to_action.href.toLowerCase().startsWith('http')  && (
                <a href={card.call_to_action.href} className='blogpost-readmore' {...card.call_to_action.$?.title}>
                  {card.call_to_action.title + ' -->'}
                </a>
            )}

            { card.call_to_action.href && !card.call_to_action.href.toLowerCase().startsWith('http') && (
                <Link to={card.call_to_action.href} className='blogpost-readmore' {...card.call_to_action.$?.title}>
                  {card.call_to_action.title +' -->'}
                </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
