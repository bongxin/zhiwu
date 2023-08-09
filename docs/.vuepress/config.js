import { defaultTheme } from 'vuepress';
import theme from './theme.js';
import { searchPlugin } from '@vuepress/plugin-search';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import { path } from "@vuepress/utils";

export default {
  base: '/zhiwu',
  lang: 'zh-CN',
  title: '知屋',
  description: '一个房屋管理系统',
  //   使用默认主题
  // theme: defaultTheme({
  //   // 在这里进行配置
  // }),

  //   使用hope主题
  theme: theme,
  plugins: [
    searchPlugin({
      // 配置项
    }),
    registerComponentsPlugin({
      components: {
        // 单个注册
        ClanVat: path.resolve(__dirname, './components/ClanVat.vue'),
      },
      // 批量注册
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ],
};
