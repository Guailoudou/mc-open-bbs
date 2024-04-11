import type { HeadConfig } from 'vitepress';

// console.log('dddddd',frontmatter.value)
export const head: HeadConfig[] = [
  ['link', { rel: 'icon', href: '/favicon.ico' }],
  ['link', { rel: 'icon', href: '/logo.png' }],
  ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/logo.png' }], //全局控制图片放大样式
  ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' }],
  ['meta', { property: 'og:image', content: '/logo.png' }],
  ['meta', { name: 'referrer', content: 'no-referrer' }],
  ['script', { src: '/_vercel/insights/script.js' }],
  [
    'script',
    {},
    `(function() {function signalGooglefcPresent() {if (!window.frames['googlefcPresent']) {if (document.body) {const iframe = document.createElement('iframe'); iframe.style = 'width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;'; iframe.style.display = 'none'; iframe.name = 'googlefcPresent'; document.body.appendChild(iframe);} else {setTimeout(signalGooglefcPresent, 0);}}}signalGooglefcPresent();})();`
  ],
  [
    "link",
    { rel: "stylesheet", href: "/static/css/fancybox.css" },   //全局控制图片放大样式
  ],
  ["script", { src: "/static/js/fancybox.umd.js" }],  //全局控制图片放大交互
];
