import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/App.scss';
import {Navbar} from 'react-bootstrap';

export default function Footer() {
  const d = new Date().getFullYear();
  return (
    <Navbar id="footer">
      <img src="https://www.flaticon.com/svg/static/icons/svg/817/817747.svg" alt="Dino chef mascot" id="dino-chef-mascot" />
      <Navbar.Brand id="footer-text">Fork It All © {d}</Navbar.Brand>
    </Navbar>
  );
}











