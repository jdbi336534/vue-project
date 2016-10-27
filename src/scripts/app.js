import "../styles/usage/page/app.scss";
import "../styles/usage/page/app-category.scss";
import "../styles/usage/page/app-social.scss";
import "../styles/usage/page/app-list.scss";
import commonUtil from "./utils/common.util.js";
// views
import guide from "./components/guide.vue";
import index from "./components/index.vue";
import main from "./components/main.vue";
import category from "./components/category.vue";
import social from "./components/social.vue";
import cart from "./components/cart.vue";
import list from "./components/list.vue";
import my from "./components/my.vue";
import login from "./components/login.vue";
import register from "./components/register.vue";
import details from "./components/details.vue";
// router
//因为子啊全局里引入了这几个文件。所以此处不需要引入
// import Vue from "./libs/vue.js";
// import VueRouter from "./libs/vue-router.js";
import store from './vuex/store';
//Vue.use(VueRouter);
let App = Vue.extend({
  store:store
});
let router = new VueRouter();





router.map({

    '/':{
      component:guide
    },
    '/index': {
      component: index,
      subRoutes: {
        '/': {
          component: main
        },
        '/category': {
          component: category
        },
        '/social': {
          component: social
        },
        '/cart': {
          component: cart
        },
        '/my': {
          component: my
        },
        '/backmy': {
          component: my
        },



      }
    },
  '/detail/:id': {
    name: 'detail',
    component: details
  },
  '/login': {
    component: login
  },

  '/backlogin': {
    component: login
    },
    '/goreg': {
    component: register
  },
  '/golist': {
  component: list
},
  '/godetails': {
        component: details
    },
  '/list/:id':{
    name:'list',
    component:list
  }

});

router.start(App, 'body');
