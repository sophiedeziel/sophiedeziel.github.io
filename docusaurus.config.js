// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Code & Chaos',
  tagline: 'A journey through my mind. In all directions. All at once.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://sophiedeziel.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sophiedeziel', // Usually your GitHub org/user name.
  projectName: 'sophiedeziel.github.io', // Usually your repo name.
  deploymentBranch: 'main', // Branch to deploy to for user sites
  trailingSlash: false, // Recommended for GitHub Pages

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          // Enable blog sidebar for category navigation
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          // Group posts by tags (categories)
          blogListComponent: '@theme/BlogListPage',
          blogTagsListComponent: '@theme/BlogTagsListPage',
          blogTagsPostsComponent: '@theme/BlogTagsPostsPage',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Code & Chaos',
        logo: {
          alt: 'Code & Chaos Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/blog/tags/til', label: 'TIL', position: 'left'},
          {to: '/blog/tags/plog', label: 'Project Logs', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Content',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Documentation',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Connect',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/sophiedeziel',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/sophiedeziel/',
              },
              {
                label: 'Bluesky',
                href: 'https://bsky.app/profile/sophie.dopamine.builders',
              },
              {
                label: 'Twitch',
                href: 'https://twitch.tv/sophiediy',
              },
              {
                label: 'TikTok',
                href: 'https://tiktok.com/@sophiediy.twitch',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'TIL',
                to: '/blog/tags/til',
              },
              {
                label: 'Project Logs',
                to: '/blog/tags/plog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Sophie Déziel. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.okaidia,
      },
    }),
};

export default config;
