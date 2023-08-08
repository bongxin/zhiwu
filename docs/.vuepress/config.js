import { defaultTheme } from 'vuepress';
import theme from './theme.js';
import { searchPlugin } from '@vuepress/plugin-search';

export default {
  base: '/zhiwu',
  lang: 'zh-CN',
  title: '知屋',
  description: '一个房屋管理系统',
  //   使用默认主题
  //   theme: defaultTheme({
  //     // 在这里进行配置
  //   }),

  //   使用hope主题
  theme: theme,
  plugins: [
    searchPlugin({
      // 配置项
    }),
  ],
};
