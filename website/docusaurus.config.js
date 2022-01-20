const config = {
  title: "Teach Access 지침서",
  tagline: "접근 가능한 모바일 및 웹 앱을 만들기 위한 모범 사례",
  url: "https://teachaccess.mulder21c.io",
  baseUrl: "/",
  organizationName: "teachaccess",
  projectName: "지침서",
  deploymentBranch: "gh-pages",
  scripts: ["https://buttons.github.io/buttons.js", "/js/scriptHelper.js"],
  favicon: "../img/logo-teach-access.svg",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  trailingSlash: false,
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          path: "../docs",
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
        },
        theme: {
          customCss: "../src/css/customTheme.css",
        },
      },
    ],
  ],
  plugins: ["@docusaurus/theme-live-codeblock"],
  themeConfig: {
    navbar: {
      logo: {
        src: "../img/logo-teach-access.svg",
        srcDark: "../img/logo-teach-access-dark.svg",
        alt: "Teach Access",
      },
      items: [
        {
          to: "/",
          label: "지침서",
          position: "left",
        },
        {
          to: "/help",
          label: "지원",
          position: "left",
        },
        {
          to: "/translate",
          label: "번역",
          position: "left",
        },
      ],
    },
    image: "../img/undraw_online.svg",
    footer: {
      links: [],
      copyright: "Copyright © 2021 Teach Access",
      logo: {
        src: "../img/logo-teach-access.svg",
        srcDark: "../img/logo-teach-access-dark.svg",
        alt: "Teach Access",
      },
    },
  },
};

module.exports = config;
