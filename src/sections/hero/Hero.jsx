import React from 'react';
import styles from './hero.module.css';
import Button from '../../components/button/Button';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <img src="/src/assets/icons/firstLine.svg" alt="firstLine" />
      <img src="/src/assets/icons/secondLine.svg" alt="secondLine" />
      <div className={`${styles.heroWrapper} container`}>
        <div className={`${styles.leftSide}`}>
          <h1>
            TeslaBank <br /> Banco{' '}
            <span style={{ color: '#EB3850' }}>100%</span> digital
          </h1>
          <p>
            Com TeslaBank, você pode realizar transferências <br />
            bancárias com zero taxa e pagar suas contas.
          </p>
          <div className={styles.buttonControl}>
            <Button type="primary">Abrir uma conta</Button>
            <Button href="#">Abrir uma conta</Button>
          </div>
        </div>
        <div className={styles.rightSide}>
          <img src="/src/assets/images/cards.svg" alt="cards" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
