import React from 'react';
import styles from './innovation.module.css';

const Innovation = () => {
  const navigation = [
    {
      id: '0',
      img: '/src/assets/icons/credit-card.svg',
      title: 'Cartão TeslaBank',
      text: 'O Cartão TeslaBank é um cartão de crédito exclusivo para clientes da TeslaBank, uma instituição financeira líder em inovação e tecnologia.',
      url: '#',
      textLink: 'Veja as opções',
    },
    {
      id: '1',
      img: '/src/assets/icons/shopping-cart.svg',
      title: 'Investimentos',
      text: 'O cartão também oferece diversos benefícios, como descontos em taxas de corretagem, acesso a fundos de investimento e cashback',
      url: '#',
      textLink: 'Conheça agora',
    },
    {
      id: '2',
      img: '/src/assets/icons/clock.svg',
      title: 'Atendimento 24h',
      text: 'No TeslaBank, os usuários têm acesso a um atendimento ao cliente sempre disponível, 24 horas por dia, 7 dias por semana.',
      url: '#',
      textLink: 'Veja as opções',
    },
    {
      id: '3',
      title: '',
      url: '#',
    },
    {
      id: '4',
      title: '',
      url: '#',
    },
    {
      id: '5',
      img: '/src/assets/icons/shield.svg',
      title: 'Conheça as seguranças',
      text: 'Os usuários contam com sistemas avançados de segurança, como verificação de identidade, monitoramento de transações e notificações de uso não autorizado.',
      url: '#',
      textLink: 'Conheça agora',
    },
    {
      id: '6',
      img: '/src/assets/icons/percent.svg',
      title: 'Sem taxas',
      text: 'Com o cartão TeslaBank, os usuários podem aproveitar ao máximo seus recursos financeiros, sem se preocupar com custos adicionais ou taxas escondidas.',
      url: '#',
      textLink: 'Como funciona',
    },
    {
      id: '7',
      img: '/src/assets/icons/gift.svg',
      title: 'Receba prêmios',
      text: 'Os usuários têm acesso a um programa de recompensas que oferece pontos a cada transação realizada com o cartão, que podem ser trocados por diversos prêmios.',
      url: '#',
      textLink: 'Veja como',
    },
  ];

  return (
    <section className={styles.innovation}>
      <div className={`${styles.innovationContentGroup} container`}>
        <span>#inovação</span>
        <h2>
          Quais as vantagens <br /> de usar <span>TeslaBank?</span>
        </h2>

        <div className={styles.cards}>
          {navigation.map((item) => (
            <div key={item.id} className={styles.card}>
              <img src={item.img} alt="" />
              <h4>{item.title}</h4>
              <p>{item.text}</p>
              <a href={item.url}>{item.textLink}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Innovation;
