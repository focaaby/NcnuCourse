// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import 'element-ui/lib/theme-default/index.css';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/zh-TW';
import VueFire from 'vuefire';
import App from './App';

Vue.use(ElementUI, { locale });
Vue.use(VueFire);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});
