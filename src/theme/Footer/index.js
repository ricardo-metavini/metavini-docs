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
      <div className={style.SocialsLink}>
        <Link href={social.url} target="_blank">
          <ThemedImage
            width={35}
            height={30}
            sources={{
              light: useBaseUrl(social.logo),
              dark: useBaseUrl(social.logo),
            }}
            alt={social.name}
          />
        </Link>
      </div>
  );
}

export default function Footer(props) {
  const {siteConfig} = useDocusaurusContext();

  const logo = siteConfig.customFields.customFooter.logo;
  const socials = siteConfig.customFields.customFooter.socials;
  const copyright = siteConfig.customFields.customFooter.copyright;

  return (
    <>
      <div className={style.OuterContainer}>
        <div className={style.InnerContainer} >
          <div className={style.FooterRow} >
            <div className={style.Col1}>
              <div className={style.LogoOuterContainer}>
                <div className={style.LogoContainer}>
                  <Link href={logo.href}>
                    <ThemedImage
                      width={200}
                      height={40}
                      sources={{
                        light: useBaseUrl(logo.src),
                        dark: useBaseUrl(logo.srcDark),
                      }}
                      alt={logo.alt}
                    />
                  </Link>
                </div>
                <div className={style.DescContainer}>
                  <span className={style.LogoDesc}>{logo.description}</span>
                </div>
              </div>
            </div>


            <div className={clsx(style.Col2, "original-footer")}>
              <div className={style.LinksContainer}>
                <OriginalFooter {...props} />
              </div>
            </div>


            <div className={style.Col3}>
              <div className={style.SocialsContainer}>
                <span className={style.SocialsTitle}>Stay in the loop</span>
                <span className={style.SocialsDesc}>Follow us to stay in the loop with our latest news.</span>
                <div className={style.SocialsLinksContainer}>
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
        </div>  
        <div className={style.FooterRightsBar}>
          <div className={style.FooterRights}>
                {copyright}
          </div>
        </div>
      </div>
    </>
  );
}