import React from 'react';
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';
import Footer from '../../components/Footer/Footer';
import './PageError404.scss'
import CompError404 from '../../components/Error404/Error404';

function PageError404() {
  return (
    <>
      <HeaderMenu/>
      <main className="pageError404">
        <CompError404 />
      </main>
      <Footer />
    </>
  );
}

export default PageError404;
