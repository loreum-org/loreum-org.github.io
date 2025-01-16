// Docusaurus configuration for docs.loreum.org
// This file initializes the categories and structure for the documentation site.

module.exports = {
  title: 'Loreum Docs',
  tagline: 'Documentation for the Loreum Network',
  url: 'https://docs.loreum.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Loreum',
  projectName: 'docs',

  themeConfig: {
    navbar: {
      title: 'Loreum',
      logo: {
        alt: 'Loreum Logo',
        src: 'https://cdn.loreum.org/logos/white.svg',
      },
      items: [
        {to: '/docs/intro', label: 'Docs', position: 'left'},
        {href: 'https://github.com/Loreum', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {label: 'Introduction', to: '/docs/intro'},
            {label: 'Get Started', to: '/docs/getting-started'},
          ],
        },
        {
          title: 'Community',
          items: [
            {label: 'Discord', href: 'https://discord.gg/loreumdao'},
            {label: 'Twitter', href: 'https://twitter.com/loreumdao'},
          ],
        },
        {
          title: 'More',
          items: [
            {label: 'GitHub', href: 'https://github.com/loreum-org'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Loreum DAO LLC`,
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/loreum-org/docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/loreum-org/docs/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};