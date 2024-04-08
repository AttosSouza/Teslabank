import React from 'react';
import styles from './cards.module.css';
import Button from '../../components/button/Button';

const Cards = () => {
  return (
    <section className={styles.cards}>
      <div className={`${styles.cardsContentGroup} container`}>
        <span>#cartões</span>
        <h2>
          Cartão perfeito para
          <br /> suas necessidades.
        </h2>
        <p>
          Encontre o cartão perfeito para suas necessidades financeiras. Seja
          para
          <br /> viagens ou compras do dia a dia, temos uma opção que se adapta
          a você.
        </p>
        <img src="/src/assets/images/cards-2.svg" alt="" />
        <div className={styles.accessButons}>
          <Button type="primary" href="#">
            Abrir uma conta
          </Button>
          <Button href="#">Comparar cartões</Button>
        </div>
      </div>
    </section>
  );
};

export default Cards;
