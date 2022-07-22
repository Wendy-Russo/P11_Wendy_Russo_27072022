import React from 'react';
import './Banner.scss';
import IMG from "../../data/banner.png"

function Banner(props) {

  const SLOGAN = props.slogan;
  const SLOGAN_ELEM = SLOGAN !== undefined ? <p>{SLOGAN}</p> : "" ;

  return(
    <div className='banner'>
      {SLOGAN_ELEM}
      <img alt="banner" src={IMG} />
    </div>
  )
}

export default Banner
