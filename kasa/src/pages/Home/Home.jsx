import React from 'react';
import PropretyList from '../../components/PropretyList/PropretyList';
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';
import Footer from '../../components/Footer/Footer';
import './Home.scss'
import Banner from '../../components/Banner/Banner';

function Home() {
  /*<Header/>*/
  console.log("home.jsx");
  return (
    <>
      <HeaderMenu/>
      <main className="Home">
        <Banner slogan="Chez vous, partout et ailleurs" />
        <PropretyList/>
      </main>
      <Footer/>
    </>
  );
}

export default Home;
