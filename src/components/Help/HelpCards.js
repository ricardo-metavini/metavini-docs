import React from 'react';
import clsx from 'clsx';
import styles from './HelpCards.module.css';

const CardsList = [
  {
    title: 'Documentation',
    Svg: require('/static/img/components/card/documentation.svg').default,
    description: (
      <>
        <p>Learn about Metavini using the <a href="/">documentation on this site</a>. In our <code>docs</code> you will find all the available information.</p>
        <p>Details about each update can be found on our <a href="/blog">blog</a>.</p>
      </>
    ),
  },
  {
    title: 'Community',
    Svg: require('/static/img/components/card/community.svg').default,
    description: (
      <>
         <p>A lot of times the fastest way to get some answers is through asking our community.</p>
         <p>Chat with the Metavini community at <a href="https://t.me/metavini">Telegram</a>.</p>
      </>
    ),
  },
  {
    title: 'Socials',
    Svg: require('/static/img/components/card/socials.svg').default,
    description: (
      <>
        <p>We are present in all the main social media platforms.</p>
        <p>The one that we will share all the news and the announcements first will be the <a href="https://twitter.com/Metavininft">Twitter</a>. Make sure to follow us.</p>
      </>
    ),
  },
  {
    title: 'Direct Contact',
    Svg: require('/static/img/components/card/contact.svg').default,
    description: (
      <>
        <p>If you don't find the info that you need in other sources feel free to direct contact us.</p>
        <p>A contact form can be found <a href="https://metavini.com/contact">here</a>.</p>
      </>
    ),
  },
];

function Card({Svg, title, description}) {
  return (
    <div className={styles.CardContainer}>
      <div className={styles.CardHeader}>
        <Svg className={styles.CardSvg} alt={title} />
      </div>
      <div className={styles.CardBody}>
        <div className={styles.CardBodyTitle}>
          <h3>{title}</h3>
        </div>
        <div className={styles.CardBodyContent}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HelpCards() {
  return (
    <section className={styles.CardsContainer}>
      <div className="container">
        <div className="row jcenter">
          {CardsList.map((props, idx) => (
            <Card key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
