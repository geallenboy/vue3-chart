const path = require('path');

module.exports = {
  head: [
    [
      'meta',
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
      },
    ],
    ['meta', { name: 'keywords', content: 'vite vui' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  title: 'vue3 chart',
  base: '/',
  description: 'vue3 chart',
  dest: 'public',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '图表', link: '/plots/' },
      { text: 'Github', link: 'https://github.com/geallenboy/vue3-chart.git' }
    ],
    sidebar:{
      '/':[
        {
          text:'plots',
          children: [
           
            { text: 'area', link: 'plots/area/' },
            { text: 'bar', link: 'plots/bar/' },
           
          ],
        }
      ]
    }
  }
};
