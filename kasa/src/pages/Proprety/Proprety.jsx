import React from 'react';
import Header from '../../components/HeaderMenu/HeaderMenu';
import Gallery from '../../components/Gallery/Gallery';
import logements from "../../data/logements.json"
import PropretyTitle from '../../components/PropretyTitle/PropretyTitle';
import PropretyTags from '../../components/PropretyTags/PropretyTags';
import PropretyRating from '../../components/PropretyRating/PropretyRating';
import Collapse from '../../components/Collapse/Collapse';
import PropretyHost from '../../components/PropretyHost/PropretyHost';
import Footer from '../../components/Footer/Footer';
import { useParams } from 'react-router-dom';
import PageError404 from '../Error404/PageError404';
import "./Proprety.scss"

function Proprety() {
  //<PropretyTitle title={PROPRETY.title} location={PROPRETY.location} /><PropretyTags tags={PROPRETY} />
  /*
    <Collapse />
  */
  const {PROPRETYID} = useParams();
  const PROPRETY = logements[PROPRETYID];

  if(PROPRETY === undefined){
    return(
      <PageError404 />
    );
  }

  return (
    <>

      <Header/>

      <main className="proprety">

        <Gallery pictures={PROPRETY.pictures} />

        <section className='propretyInfo'>
          <div className='mainPropretyInfo'>
            <PropretyTitle title={PROPRETY.title} location={PROPRETY.location} />
            <PropretyTags tags={PROPRETY.tags} />
          </div>
          <div className='secondaryPropretyInfo'>
            <PropretyRating rating={PROPRETY.rating} />
            <PropretyHost host={PROPRETY.host} />
          </div>
        </section>

        <section className='propretyDetails'>
            <Collapse summary="Description" details={PROPRETY.description} />
            <Collapse summary="Equipments" details={PROPRETY.equipments} />
        </section>
      </main>

      <Footer/>
    </>
  );
}

export default Proprety;
