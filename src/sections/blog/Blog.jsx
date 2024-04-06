import React from 'react';
import styles from './blog.module.css';

const Blog = () => {
  return (
    <section className={styles.blog}>
      <div className="container">
        <div className={styles.title}>
          <h2>Blog</h2>
          <a href="#">
            Todas as postagens{' '}
            <img src="/src/assets/icons/arrow-2.svg" alt="" />
          </a>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img src="/src/assets/images/firstImage.png" alt="" />
            <h3>
              Como começar a usar o <br /> TeslaBank para sua startup
            </h3>
            <p>
              Descubra como a sua startup pode se
              <br /> beneficiar dos serviços financeiros do <br /> TeslaBank.
              Nesta postagem, apresentamos <br /> um guia fácil para ajudá-lo a
              começar a usar <br />o TeslaBank.
            </p>
          </div>

          <div className={styles.card}>
            <img src="/src/assets/images/secondImage.png" alt="" />
            <h3>
              10 coisas que ninguém te <br /> contou sobre o TeslaBank
            </h3>
            <p>
              Você está pensando em usar o TeslaBank para <br /> gerenciar suas
              finanças pessoais? Antes de <br /> decidir, confira esta postagem
              para descobrir <br /> 10 coisas que ninguém te contou sobre o{' '}
              <br />
              TeslaBank.
            </p>
          </div>

          <div className={styles.card}>
            <img src="/src/assets/images/thirdImage.png" alt="" />
            <h3>
              7 maneiras de melhorar <br />
              seus hábitos de poupança
            </h3>
            <p>
              Você deseja economizar dinheiro, mas acha <br /> difícil manter
              bons hábitos de poupança? <br /> Confira esta postagem para
              descobrir sete <br /> maneiras eficazes de melhorar seus hábitos
              de <br />
              poupança.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
