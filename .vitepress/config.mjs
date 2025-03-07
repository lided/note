import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig(withSidebar({
  title: "首页",
  base: '/note',
  themeConfig: {
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Readme', link: '/readme' },
    ],

    sidebar: [],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lided' },
    ]
  },
}, [
  quickSidebar('linux'),
  quickSidebar('docker'),
  quickSidebar('java'),
  quickSidebar('vue3'),
  quickSidebar('database'),
]
))

function quickSidebar(path) {
  return {
    documentRootPath: '/',
    scanStartPath: path,
    resolvePath: `/${path}/`,
    useFolderLinkFromIndexFile: true,
    collapsed: true,
    capitalizeFirst: true,
    useTitleFromFileHeading: false,
    sortFolderTo: 'top',
  }
}