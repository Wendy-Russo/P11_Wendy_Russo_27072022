import React from 'react';
import './PropretyHost.scss';

function PropretyHost(props) {

  const NAME = props.host.name.split(" ");
  const PICTURE = props.host.picture;

  return(
    <div className='propretyHost'>

      <p className='name'>
        {NAME[0]} <br /> {NAME[1]}
      </p>
      <img alt={NAME} className='hostPhoto' src={PICTURE}/>

    </div>
  )
}

export default PropretyHost
