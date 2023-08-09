import { defineClientConfig } from '@vuepress/client';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import 'element-plus/theme-chalk/dark/css-vars.css'
import './styles/dark/css-vars.css'

export default defineClientConfig({
  enhance({ app }) {
    app.use(ElementPlus);
    // 注册组件
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
});
