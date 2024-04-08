import React from 'react';
import styles from './about.module.css';
import Smartphone from '../../assets/images/smartphone.png';
import Circle from '../../assets/icons/check-circle.svg';
import Pointer from '../../assets/icons/mouse-pointer.svg';
import Heart from '../../assets/icons/heart.svg';
import Dollar from '../../assets/icons/dollar-sign.svg';
import SecondSmartphone from '../../assets/icons/smartphone.svg';
import Smile from '../../assets/icons/smile.svg';

const About = () => {
  return (
    <section className={styles.about}>
      <div className={`${styles.aboutGroup} container`}>
        <div className={styles.leftSide}>
          <img src={Smartphone} alt="smartphone" loading="lazy" />
          <img src={Circle} alt="checkCircle" loading="lazy" />
          <img src={Pointer} alt="pointer" loading="lazy" />
          <img src={Heart} alt="heart" loading="lazy" />
        </div>
        <div className={styles.rightSide}>
          <h2>
            Abra sua conta <span>gratuita!</span>
          </h2>
          <p>
            Envie e receba dinheiro de forma mais prática e rápida. Faça Pix,
            <br />
            TEDs e transferências para todos os bancos sem pagar nada.
          </p>
          <div className={styles.details}>
            <ul className={styles.list}>
              <li>
                <div className={styles.imgContainer}>
                  <img src={Dollar} alt="dollar" loading="lazy" />
                </div>
                <span>
                  <h4>Seu dinheiro rendendo mais</h4>
                  <p>Rendem mais que a poupança e você resgata quando quiser</p>
                </span>
              </li>
              <li>
                <div className={styles.imgContainer}>
                  <img
                    src={SecondSmartphone}
                    alt="secondSmartphone"
                    loading="lazy"
                  />
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
                <div className={styles.imgContainer}>
                  <img src={Smile} alt="smile" loading="lazy" />
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
