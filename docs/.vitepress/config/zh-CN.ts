import type { DefaultTheme, LocaleConfig } from 'vitepress'

export const zhCN: LocaleConfig<DefaultTheme.Config>[0] = {
  label: '简体中文',
  lang: 'zh-CN',
  themeConfig: {
    nav: [
      {
        text: '指南',
        link: '/zh-CN/guide/introduction',
      },
      {
        text: '原子化',
        items: [
          {
            text: '显示',
            link: '/zh-CN/atomization/display/avatar',
          },
          {
            text: '交互',
            link: '/zh-CN/atomization/interaction/button',
          },
          {
            text: '表单',
            link: '/zh-CN/atomization/form/input',
          },
        ],
      },
      {
        text: 'Vue',
        items: [
          {
            text: '显示',
            link: '/zh-CN/vue/display/avatar',
          },
        ],
      },
      {
        text: '更新日志',
        link: 'https://github.com/litingyes/coolui/blob/main/CHANGELOG.md',
        target: '_blank',
      },
    ],
    sidebar: {
      '/zh-CN/guide/': [
        {
          text: '指南',
          items: [
            {
              text: '介绍',
              link: '/zh-CN/guide/introduction',
            },
            {
              text: '快速开始',
              link: '/zh-CN/guide/getting-start',
            },
            {
              text: '预设',
              link: '/zh-CN/guide/preset',
            },
          ],
        },
      ],
      '/zh-CN/atomization/': [
        {
          text: '原子化',
          items: [
            {
              text: '显示',
              items: [
                {
                  text: '头像 Avatar',
                  link: '/zh-CN/atomization/display/avatar',
                },
                {
                  text: '徽章 Badge',
                  link: '/zh-CN/atomization/display/badge',
                },
              ],
            },
            {
              text: '交互',
              items: [
                {
                  text: '按钮 Button',
                  link: '/zh-CN/atomization/interaction/button',
                },
              ],
            },
            {
              text: '表单',
              items: [
                {
                  text: '复选框 Checkbox',
                  link: '/zh-CN/atomization/form/checkbox',
                },
                {
                  text: '输入框 Input',
                  link: '/zh-CN/atomization/form/input',
                },
                {
                  text: '单选框 Radio',
                  link: '/zh-CN/atomization/form/radio',
                },
                {
                  text: '开关 Toggle',
                  link: '/zh-CN/atomization/form/toggle',
                },
              ],
            },
          ],
        },
      ],
      '/zh-CN/vue/': [
        {
          text: '显示',
          items: [
            {
              text: '头像 Avatar',
              link: '/zh-CN/vue/display/avatar',
            },
          ],
        },
      ],
    },
    outline: {
      label: '目录',
      level: [2, 3],
    },
    footer: {
      message: '基于 MIT 许可发布',
      copyright: '版权所有 © 2024-至今 Liting',
    },
  },
}
