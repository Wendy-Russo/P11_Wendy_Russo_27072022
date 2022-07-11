import React from 'react';
import './PropretyRating.scss';



function PropretyRating(props) {
    const RATING = [0,0,0,0,0].fill(1,0,props.rating)
    return(
        <div className='propretyRating'>
            {RATING.map((rating,id) => (<span key={id} className={`material-symbols-rounded ${rating ? 'full' : 'empty'}`} >grade</span>))}
        </div>
    )
}

export default PropretyRating