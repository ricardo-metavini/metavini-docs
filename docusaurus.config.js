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
        alt: 'Metavini Docs Logo',
        src: 'img/logo-white.svg',
        srcDark: 'img/logo-white.svg',
        href: 'https://docs.metavini.com',
      },
      socials: [
        {
          url: 'https://twitter.com',
          logoSrc: 'img/community/twitter.svg',
          logoSrcDark: 'img/community/twitter.svg',
          alt: "Twitter",
        },
        {
          url: 'https://youtube.com',
          logoSrc: 'img/community/youtube.svg',
          logoSrcDark: 'img/community/youtube.svg',
          alt: "Youtube",
        },
        {
          url: 'https://instagram.com',
          logoSrc: 'img/community/instagram.svg',
          logoSrcDark: 'img/community/instagram.svg',
          alt: "Instagram",
        },
        
      ],
      copyright: `© ${new Date().getFullYear()} Metavini Docs. Built with Docusaurus.`,
    }
  },
  stylesheets: [
    'https://fonts.googleapis.com/css?family=Open+Sans',
    'https://fonts.googleapis.com/css?family=Julius+Sans+One',
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/metavini/metavini-docs/edit/main',
        },
        blog: false,
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
          alt: 'Metavini Docs Logo',
          src: 'img/logo-main-dark.svg',
          srcDark: 'img/logo-main-light.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {
            type: 'doc',
            docId: 'overview/introduction',
            position: 'left',
            label: 'Overview',
          },
          {
            type: 'doc',
            docId: 'guides/become-partner',
            position: 'left',
            label: 'Guides',
          },
          {
            type: 'doc',
            docId: 'help/faqs',
            position: 'left',
            label: 'Help',
          },
          {
            href: 'https://medium.com/',
            label: 'Blog',
            position: 'right',
          },
          {
            href: 'https://discord.com/',
            label: 'Contact',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
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
