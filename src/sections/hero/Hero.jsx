import React from 'react';
import styles from './hero.module.css';
import Button from '../../components/button/Button';
import firstLine from '../../assets/icons/firstLine.svg';
import secondLine from '../../assets/icons/secondLine.svg';
import cards from '../../assets/images/cards.svg';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <img src={firstLine} alt="firstLine" loading="lazy" />
      <img src={secondLine} alt="secondLine" loading="lazy" />
      <div className={`${styles.heroGroup} container`}>
        <div className={`${styles.leftSide}`}>
          <h1>
            TeslaBank <br /> Banco{' '}
            <span style={{ color: '#EB3850' }}>100%</span> digital
          </h1>
          <p>
            Com TeslaBank, você pode realizar transferências <br />
            bancárias com zero taxa e pagar suas contas.
          </p>
          <div className={styles.accessButtons}>
            <Button type="primary">Abrir uma conta</Button>
            <Button href="#">Abrir uma conta</Button>
          </div>
        </div>
        <div className={styles.rightSide}>
          <img src={cards} alt="cards" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
