import React from 'react';
import './Collapse.scss';



function Collapse (props) {
  const SUMMARY = props.summary;
  const DETAILS = props.details;

  if(Array.isArray(DETAILS)){
    return(
      <details className='collapse'>
        <summary >
          {SUMMARY}
          <span className="material-symbols-rounded arrow-down">
            expand_more
          </span>
          <span className="material-symbols-rounded arrow-up">
            expand_less
          </span>
        </summary>
        <ul>
          {DETAILS.map((item,id) => (<li key={id}> {item} </li> ))}
        </ul>
      </details>
    )
  }
  return(
    <details className='collapse'>
      <summary >
        {SUMMARY}
        <span className="material-symbols-rounded arrow-down">
          expand_more
        </span>
        <span className="material-symbols-rounded arrow-up">
          expand_less
        </span>
      </summary>
      <p>
        {DETAILS}
      </p>
    </details>
  )

}

export default Collapse