import React from 'react';
import './PropretyCard.scss';

function PropretyCard(props) {
    //console.log(props.residence, 1)
  return(
    <div className='propretyCard'>
      <img alt='' src={props.residence.cover}/>
      <p>{props.residence.title}</p>
    </div>
  )
}

export default PropretyCard
