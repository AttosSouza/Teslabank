import React from 'react';
import styles from './navbar.module.css';
import Button from '../button/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="container">
      <div className={`${isOpen ? styles.active : ''} ${styles.content}`}>
        <a href="#" className={styles.logo}>
          <div>
            <img src="/src/assets/icons/logo.svg" alt="" />
          </div>
          Teslabank
        </a>
        <ul className={styles.list}>
          <li>
            <a href="#">Benefícios</a>
          </li>
          <li>
            <a href="#">Conta digital</a>
          </li>
          <li>
            <a href="#">Suporte</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
        <div className={styles.account}>
          <Button href="#">Entrar</Button>
          <Button type="primary">Abrir conta</Button>
        </div>
        <button
          onClick={toggleMenu}
          aria-label="Abrir Menu"
          aria-expanded="false"
          aria-haspopup="true"
          aria-controls="menu"
          className={styles.btnMobile}
        >
          <span className={styles.hamburger}></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
