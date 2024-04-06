import React from 'react';
import styles from './faq.module.css';
import Accordion from '../../components/accordion/Accordion';

const Faq = () => {
  const data = [
    {
      id: 0,
      title: 'Como posso abrir uma conta bancária?',
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
    {
      id: 1,
      title: 'Qual é o meu saldo atual?',
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
    {
      id: 2,
      title: 'Como faço para transferir dinheiro para outra conta?',
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
  ];

  return (
    <section className={styles.faq}>
      <div className={`${styles.content} container`}>
        <span>#ajuda</span>
        <h2>Ficou alguma dúvida?</h2>
        <p>Confira nossa lista de perguntas frequentes que recebemos.</p>

        <div className={styles.accordion}>
          {data.map((item) => (
            <Accordion key={item.id} title={item.title}>
              {item.description}
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
