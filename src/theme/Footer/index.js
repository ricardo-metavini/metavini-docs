import OriginalFooter from '@theme-original/Footer';
import React from 'react';

import Link from '@docusaurus/Link';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import clsx from 'clsx';

import style from './styles.module.css'

function SocialLink({ social }) {
  return (
      <div className={style.CommunityLink}>
        <Link href={social.url} target="_blank">
          <ThemedImage
            width={35}
            height={30}
            sources={{
              light: useBaseUrl(social.logoSrc),
              dark: useBaseUrl(social.logoSrcDark),
            }}
            alt={social.alt}
          />
        </Link>
      </div>
  );
}

export default function Footer(props) {
  const {siteConfig} = useDocusaurusContext();

  const logo = siteConfig.customFields.customFooter.logo;
  const socials = siteConfig.customFields.customFooter.socials;

  return (
    <>
      <div className={style.OuterContainer}>
        <div className={style.InnerContainer} >
          <div className={style.Col1}>
            <div className="logo-container">
              <Link href={logo.href}>
                <ThemedImage
                  width={40}
                  height={37}
                  sources={{
                    light: useBaseUrl(logo.src),
                    dark: useBaseUrl(logo.srcDark),
                  }}
                  alt={logo.alt}
                />
              </Link>
              <span className={style.LogoName}>Metavini</span>
            </div>
            <div className={style.DescContainer}>
              <span className={style.LogoDesc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span>
            </div>
          </div>
          <div className={clsx(style.Col2, "original-footer")}>
            <OriginalFooter {...props} />
          </div>
          <div className={style.Col3}>
            <span className={style.CommunitySecTitle}>Join the community</span>
            <div className={style.CommunityLinksContainer}>
                {socials.map((social, i) => {
                  return (
                    <SocialLink
                      social={social}
                      key={i}
                    />
                  )
                })}
            </div>
          </div>
        </div>  
      </div>
    </>
  );
}