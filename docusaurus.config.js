// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Affiliate Magnet',
  tagline: 'Replace Unity Assetstore links with your affiliate',
  url: 'https://affiliate-magnet.deathvenom.me',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'DeathVenom54', // Usually your GitHub org/user name.
  projectName: 'affiliate-magnet-docs', // Usually your repo name.
  plugins: ['docusaurus-plugin-sass'],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      hideableSidebar: true,
      metadata: [{
        name: 'keywords',
        content: 'discord, bot, discord bot, affiliate, unity, magnet'
      }],
      navbar: {
        title: 'Affiliate Magnet',
        items: [
          {
            href: '/docs/invite',
            position: 'left',
            label: 'Invite',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {
            type: 'doc',
            docId: 'faq',
            position: 'left',
            label: 'FAQ'
          },
          {
            href: 'https://discord.gg/qJnrRvt7wW',
            position: 'right',
            label: 'Support Server',
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
                label: 'Getting Started',
                to: '/docs/intro',
              },
              {
                label: 'Commands',
                to: '/docs/commands',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/qJnrRvt7wW',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Source',
                href: 'https://github.com/DeathVenom54/affiliate-magnet-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Deathvenom. Built with Docusaurus. Art by <a href="https://faesu.carrd.co/">Faesu</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
