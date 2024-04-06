import React from 'react';
import styles from './testimonials.module.css';

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <div className={`${styles.content} container`}>
        {' '}
        <span>#depoimentos</span>
        <h2>
          TeslaBank fora das telinhas:
          <br />{' '}
          <span
            style={{
              fontWeight: '400',
              textTransform: 'none',
              fontSize: '36px',
              color: '#333333',
            }}
          >
            Veja o que estão falam sobre nós.
          </span>
        </h2>
        <div className={styles.people}>
          <div className={styles.card}>
            <h4>NIKOLA TESLA</h4>
            <p>
              Estou realmente impressionado com a <br /> qualidade do serviço do
              TeslaBank.
              <br /> Desde que comecei a usá-lo, todas <br />
              as minhas transações financeiras <br /> ficaram mais fáceis e
              ágeis.
            </p>
          </div>
          <div className={styles.card}>
            <h4>STEVE JOBS</h4>
            <p>
              O TeslaBank é uma verdadeira revolução
              <br /> no mundo financeiro. Eu não preciso mais enfrentar filas em
              agências bancárias ou <br />
              lidar com taxas e tarifas absurdas.
            </p>
          </div>
          <div className={styles.card}>
            <h4>ALAN TURING</h4>
            <p>
              Eu era bastante cético em relação ao <br />
              banco digital, mas decidi experimentar
              <br /> por curiosidade. Fiquei surpreso com a <br />
              facilidade e segurança das transações,
              <br /> além de todas as funcionalidades
              <br /> exclusivas oferecidas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
