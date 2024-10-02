import React from 'react';
import './Card.css';
import threeDot from "../../../public/icons_FEtask/3_dot_menu.svg";

function Card({ ticket}) {
  return (
    <div className='card'>
      <div className='top-container'>
        <div className='ticket-id'>{ticket.id}</div>
      </div>
      <div className='middle-container'>
        <div className='title'>{ticket.title}</div>
      </div>
      <div className='bottom-container'>
        <div className='more-icon-container'>
          <img src={threeDot} alt="" />
        </div>
        {ticket.tag.map((t) => (
          <div key={t} className='tag-container'>
            <div className='tag-icon'></div>
            <div className='tag-text'>{t}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
