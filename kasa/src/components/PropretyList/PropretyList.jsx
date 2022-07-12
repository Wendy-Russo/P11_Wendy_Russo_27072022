import React from 'react';
import './PropretyList.scss';
import PropretyCard from '../../components/PropretyCard/PropretyCard.jsx';
import Logements from '../../data/logements.json';
import { Link } from 'react-router-dom'


function PropretyList(props) {

  return(
    <div className='PropretyList'>
      {Logements.map((res,id) => (<Link to={"/proprety/"+id} key={id}><PropretyCard  residence={res} /></Link>))}
    </div>
  )
}

export default PropretyList