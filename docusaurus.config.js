// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CoronaHUB',
  tagline: 'Dossier técnico del TFG',
  favicon: 'img/favicom.png',

  future: {
    v4: true,
  },

  url: 'https://coronahub.local',
  baseUrl: '/',

  organizationName: 'gerardocorona',
  projectName: 'coronahub-docs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'CoronaHUB',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Documentación',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentación',
            items: [
              {
                label: 'Resumen',
                to: '/docs/intro',
              },
              {
                label: 'Objetivos',
                to: '/docs/proyecto/objetivos',
              },
            ],
          },
          {
            title: 'Técnica',
            items: [
              {
                label: 'Arquitectura',
                to: '/docs/arquitectura/arquitectura-general',
              },
              {
                label: 'Backend y API',
                to: '/docs/aplicacion/backend-api',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CoronaHUB. Documentación técnica del TFG.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
