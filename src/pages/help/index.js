import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

import HelpCards from '../../components/Help/HelpCards';

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
        <HelpCards />
      </main>
    </Layout>
  );
}
