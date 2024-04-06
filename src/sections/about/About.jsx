import React from 'react';
import styles from './about.module.css';

const About = () => {
  return (
    <section className={styles.about}>
      <div className={`${styles.wrapper} container`}>
        <div className={styles.leftSide}>
          <img src="/src/assets/images/smartphone.png" alt="" />
          <img src="/src/assets/icons/check-circle.svg" alt="" />
          <img src="/src/assets/icons/mouse-pointer.svg" alt="" />
          <img src="/src/assets/icons/heart.svg" alt="" />
        </div>
        <div className={styles.rightSide}>
          <h2>
            Abra sua conta <span style={{ color: '#EB3850' }}>gratuita!</span>
          </h2>
          <p>
            Envie e receba dinheiro de forma mais prática e rápida. Faça Pix,
            <br />
            TEDs e transferências para todos os bancos sem pagar nada.
          </p>
          <div className={styles.details}>
            <ul className={styles.list}>
              <li>
                <div className={styles.boxImg}>
                  <img src="/src/assets/icons/dollar-sign.svg" alt="" />
                </div>
                <span>
                  <h4>Seu dinheiro rendendo mais</h4>
                  <p>Rendem mais que a poupança e você resgata quando quiser</p>
                </span>
              </li>
              <li>
                <div className={styles.boxImg}>
                  <img src="/src/assets/icons/smartphone.svg" alt="" />
                </div>
                <span>
                  <h4>Conta digital 100% grátis</h4>
                  <p>
                    Transferências, boletos de depósito e outros serviços
                    gratuitos
                  </p>
                </span>
              </li>
              <li>
                <div className={styles.boxImg}>
                  <img src="/src/assets/icons/smile.svg" alt="" />
                </div>
                <span>
                  <h4>Cartão sem anuidade</h4>
                  <p>
                    Conta digital com cartão de crédito sem anuidade e sem
                    complicação
                  </p>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
