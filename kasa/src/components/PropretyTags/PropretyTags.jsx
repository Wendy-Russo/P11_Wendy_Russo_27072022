import React from 'react';
import './PropretyTags.scss';



function PropretyTags(props) {
  const TAGS = props.tags;
  return(
    <div className='propretyTags'>
      {TAGS.map((tag,id) => (<p key={id} className="propretyTag"> {tag} </p>))}
    </div>
  )
}

export default PropretyTags