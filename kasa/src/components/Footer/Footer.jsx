import React from "react";
import logo from "../../data/Kasa_logo.png"
import "./Footer.scss"

function Footer() {

  return(
    <>
      <footer className="footer">
        <img alt="logo" src={logo} />
        <p>
          © 2020 Kasa. All rights reserved
        </p>
      </footer>
    </>
  )
}


export default Footer