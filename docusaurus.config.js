// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const config = {
  title: 'Metavini Docs',
  tagline: 'Here you can find all info regarding Metavini',
  url: 'https://docs.metavini.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'metavini', // Usually your GitHub org/user name.
  projectName: 'metavini-docs', // Usually your repo name.
  noIndex: false, // Defaults to `false`
  customFields: {
    metadataTitle: 'Metavini Docs',
    metadataDescription: 'Here you can find all info regarding Metavini',
    customFooter: {
      logo: {
        alt: 'Metavini Docs',
        description: 'A new decentralized ecosystem that connects wine producers,consumers and collectors.',
        src: 'img/logos/logo-docs-main-full-white.svg',
        srcDark: 'img/logos/logo-docs-main-full-white.svg',
        href: '/',
      },
      socials: [
        {
          name: "twitter",
          logo: "img/socials/twitter.svg",
          handle: "@Metavininft",
          url: "https://twitter.com/Metavininft",
        },
        {
          name: "instagram",
          logo: "img/socials/instagram.svg",
          handle: "metavini.nft",
          url: "https://www.instagram.com/metavini.nft",
        },
        {
          name: "facebook",
          logo: "img/socials/facebook.svg",
          handle: "@metavini.nft",
          url: "https://www.facebook.com/metavini.nft",
        },
        {
          name: "telegram",
          logo: "img/socials/telegram.svg",
          handle: "MetaVini",
          url: "https://t.me/metavini",
        },
      ],
      copyright: `© ${new Date().getFullYear()} Metavini Docs. Built with Docusaurus.`,
    }
  },
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap'
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/metavini/metavini-docs/edit/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/metavini/metavini-docs/edit/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        // "light" | "dark"
        defaultMode: 'dark',
  
        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: false,
  
        // Should we use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded defaultMode
        respectPrefersColorScheme: false,

      },
      navbar: {
        hideOnScroll: false,
        logo: {
          alt: 'Metavini Docs',
          src: 'img/logos/logo-docs-main-dark.svg',
          srcDark: 'img/logos/logo-docs-main-light.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'Documentation',
          },
          {to: 'blog', label: 'Blog', position: 'right'},
          {to: 'help', label: 'Help', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'About',
            items: [
              {
                label: 'About Metavini',
                to: '/',
              },
            ],
          },
          {
            title: 'Guides',
            items: [
              {
                label: 'Become a Partner',
                to: '/guides/become-partner',
              },
            ],
          },
          {
            title: 'Company',
            items: [
              {
                label: 'About Us',
                href: 'https://metavini.com/about',
              },
              {
                label: 'Contact',
                href: 'https://metavini.com/contact',
              },
              {
                label: 'Community',
                href: 'https://t.me/metavini',
              },
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'Metavini',
                href: 'https://metavini.com/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/metavini/metavini-docs',
              },
            ],
          },
        ]
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    plugins: [
      [
        require.resolve("@cmfcmf/docusaurus-search-local"),
        {
          // whether to index docs pages
          indexDocs: true,
        
          // Whether to also index the titles of the parent categories in the sidebar of a doc page.
          // 0 disables this feature.
          // 1 indexes the direct parent category in the sidebar of a doc page
          // 2 indexes up to two nested parent categories of a doc page
          // 3...
          //
          // Do _not_ use Infinity, the value must be a JSON-serializable integer.
          indexDocSidebarParentCategories: 0,
        
          // whether to index blog pages
          indexBlog: false,
        
          // whether to index static pages
          // /404.html is never indexed
          indexPages: false,
        
          // language of your documentation, see next section
          language: "en",
        
          // setting this to "none" will prevent the default CSS to be included. The default CSS
          // comes from autocomplete-theme-classic, which you can read more about here:
          // https://www.algolia.com/doc/ui-libraries/autocomplete/api-reference/autocomplete-theme-classic/
          style: undefined,
        
          // lunr.js-specific settings
          lunr: {
            // When indexing your documents, their content is split into "tokens".
            // Text entered into the search box is also tokenized.
            // This setting configures the separator used to determine where to split the text into tokens.
            // By default, it splits the text at whitespace and dashes.
            //
            // Note: Does not work for "ja" and "th" languages, since these use a different tokenizer.
            tokenizerSeparator: /[\s\-]+/,
            // https://lunrjs.com/guides/customising.html#similarity-tuning
            //
            // This parameter controls the importance given to the length of a document and its fields. This
            // value must be between 0 and 1, and by default it has a value of 0.75. Reducing this value
            // reduces the effect of different length documents on a term’s importance to that document.
            b: 0.75,
            // This controls how quickly the boost given by a common word reaches saturation. Increasing it
            // will slow down the rate of saturation and lower values result in quicker saturation. The
            // default value is 1.2. If the collection of documents being indexed have high occurrences
            // of words that are not covered by a stop word filter, these words can quickly dominate any
            // similarity calculation. In these cases, this value can be reduced to get more balanced results.
            k1: 1.2,
            // By default, we rank pages where the search term appears in the title higher than pages where
            // the search term appears in just the text. This is done by "boosting" title matches with a
            // higher value than content matches. The concrete boosting behavior can be controlled by changing
            // the following settings.
            titleBoost: 5,
            contentBoost: 1,
            parentCategoriesBoost: 2, // Only used when indexDocSidebarParentCategories > 0
          }
        }
      ],
    ],
};

module.exports = config;
