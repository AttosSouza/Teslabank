import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContentGroup} container`}>
        <p>
          Copyright © 2024 Challenge by <strong>eFront.</strong>
        </p>
        <span>
          <p>
            Coded by <strong>Atos Souza</strong>
          </p>
          <img src="/src/assets/icons/brackets.svg" alt="" />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
