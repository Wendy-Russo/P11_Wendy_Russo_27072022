import React from 'react';
import { Link } from 'react-router-dom';
import "./Error404.scss"

function Error404() {
  return (
    <section className="error404">
      <h2 className='errorName'>
        404
      </h2>
      <p className='errorDetails'>
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" >
        Retourner sur la page d’accueil
      </Link>

    </section>
  );
}

export default Error404;