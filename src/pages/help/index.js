import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Need some help?</h1>
        <p className="hero__subtitle">Here are the available options</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.customFields.metadataTitle}
      description={siteConfig.customFields.metadataDescription}>
      <HomepageHeader />
      <main>
          <section className={styles.helpSection}>
          <div className="container">
            <div className="row">
              <p className="hero__subtitle">Documentation</p>
            </div>
            <div className="row">
              <p className="hero__subtitle">Community</p>
            </div>
            <div className="row">
              <p className="hero__subtitle">Socials</p>
            </div>
            <div className="row">
              <p className="hero__subtitle">Direct Contact</p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
