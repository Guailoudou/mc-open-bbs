import { defineConfig } from 'vitepress'
import { genFeed } from './theme/genFeed'
import { head } from './theme/head';
import type { ThemeConfig } from './theme/types';
export default defineConfig<ThemeConfig>({
    title: 'APP比比',
    base: '/',
    head,
    description: 'github开源作品，开源小程序作品，vueJS项目作品，vue3+ts+vite构建项目教学',
    ignoreDeadLinks: true,
    themeConfig: {
        beecodeurl: 'https://www.appbeebee.com/',
        sidebar:[{}],
        nav: [
            { text: '公众号', link: 'https://mp.weixin.qq.com/s/iCf-QOnKk2WPjVqL6jJ8WA' },
            { text: '比比原创小程序', link: 'https://beebee.work/' }
        ],
        search: {
            provider: 'local',
            options: {
                locales: {
                    root: {
                        translations: {
                            button: {
                                buttonText: '搜索文档',
                                buttonAriaLabel: '搜索文档'
                            },
                            modal: {
                                noResultsText: '无法找到相关结果',
                                resetButtonTitle: '清除查询条件',
                                footer: {
                                    selectText: '选择',
                                    navigateText: '切换',
                                    closeText: '关闭'
                                }
                            }
                        }
                    }
                }
            }
        },
        outlineTitle: '目录',
        socialLinks: [
            { icon: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.6734 7.22198C10.7974 7.22198 9.44138 6.22598 8.01338 6.26198C6.12938 6.28598 4.40138 7.35397 3.42938 9.04597C1.47338 12.442 2.92538 17.458 4.83338 20.218C5.76938 21.562 6.87338 23.074 8.33738 23.026C9.74138 22.966 10.2694 22.114 11.9734 22.114C13.6654 22.114 14.1454 23.026 15.6334 22.99C17.1454 22.966 18.1054 21.622 19.0294 20.266C20.0974 18.706 20.5414 17.194 20.5654 17.11C20.5294 17.098 17.6254 15.982 17.5894 12.622C17.5654 9.81397 19.8814 8.46998 19.9894 8.40998C18.6694 6.47798 16.6414 6.26198 15.9334 6.21398C14.0854 6.06998 12.5374 7.22198 11.6734 7.22198ZM14.7934 4.38998C15.5734 3.45398 16.0894 2.14598 15.9454 0.849976C14.8294 0.897976 13.4854 1.59398 12.6814 2.52998C11.9614 3.35798 11.3374 4.68998 11.5054 5.96198C12.7414 6.05798 14.0134 5.32598 14.7934 4.38998Z"></path></svg>'
              }, link: 'https://pan.baidu.com/s/1YfXTXXZ5atHj1lL5T8Y9yg?pwd=sn4s' },
            { icon: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.00098 5.47902L10.3778 4.4625V11.5902H3.00098V5.47902ZM3.00098 18.521L10.3778 19.5375V12.4982H3.00098V18.521ZM11.1894 19.646L21.001 21V12.4982H11.1894V19.646ZM11.1894 4.35402V11.5902H21.001V3L11.1894 4.35402Z"></path></svg>'
              }, link: 'https://pan.baidu.com/s/1vcA0Pgx25WPHfrAmSWlaiQ?pwd=ice5' }
        ],
        docFooter: {
            prev: '上一篇',
            next: '下一篇'
        },
        darkModeSwitchLabel:'暗黑切换',
        sidebarMenuLabel:'菜单',
        returnToTopLabel:'返回顶部',
        articlecc: {
            author: '小鱼哥',
            authorLink: 'https://appbeebee.com/',
            license: '署名-相同方式共享 4.0 国际 (CC BY-SA 4.0)',
            licenseLink: 'http://creativecommons.org/licenses/by-sa/4.0/'
        },
        website: {
            showFooter: true,
            icpRecordCode: '鄂ICP备2022014994号-1',
            publicSecurityRecordCode: '鄂公网安备42282202000143号',
            link:'https://appbeebee.com/',
            copyright: `Copyright © 2019-${new Date().getFullYear()} Charles7c`
        },
        logo: {
            light: '/logo.png',
            dark: '/logo.png'
          }
    },
    srcExclude: ['README.md'],
    vite: {
        server: { port: 5000,
            host: '0.0.0.0' }
    },
    buildEnd: genFeed
})
