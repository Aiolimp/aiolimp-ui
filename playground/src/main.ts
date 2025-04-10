import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// 👉 引入组件库（假设构建后放在外层项目 dist 下）
import MyUILib from '../../dist/index.es.js';

const app = createApp(App);
app.use(MyUILib);
app.use(router);
app.mount('#app');
``;
