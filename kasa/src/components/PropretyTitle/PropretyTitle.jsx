import React from 'react';
import './PropretyTitle.scss';

function PropretyTitle(props) {
  const TITLE = props.title;
  const LOCATION = props.location;
  return(
    <div className='propretyTitle'>
      <p className='title'>
        {TITLE}
      </p>
      <p className='location'>
        {LOCATION}
      </p>
    </div>
  )
}

export default PropretyTitle