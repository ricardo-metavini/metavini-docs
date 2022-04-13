import React from 'react';
import clsx from 'clsx';
import styles from './HelpCards.module.css';

const CardsList = [
  {
    title: 'Documentation',
    Svg: require('/static/img/components/card/documentation.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Community',
    Svg: require('/static/img/components/card/community.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Socials',
    Svg: require('/static/img/components/card/socials.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  {
    title: 'Direct Contact',
    Svg: require('/static/img/components/card/contact.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
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
