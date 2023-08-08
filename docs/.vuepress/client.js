import { defineClientConfig } from '@vuepress/client';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

export default defineClientConfig({
  enhance({ app }) {
    app.use(ElementPlus);
    // 注册组件
    // app.component('BaseH1', BaseH1)
    // app.component('BaseTable', BaseTable)
  },
});
