import { createApp } from 'vue';
import App from './App.vue';
import './index.css';

// vue2
// const app = new Vue()
// app.$mount("#app")

// vue3
// 不存在构造函数 Vue
createApp(App).mount('#app');
