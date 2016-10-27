<template>
  <div>
    <div class="index-container">
        <router-view></router-view>
    </div>
    <footer id="footer">
        <ul>
            <li
              v-bind:class="tabIndex == $index ? 'active' : ''"
              v-on:click="changPage($index)"
              v-for="tab in tablist"
              v-link="{path: tab.path}">
                <i class="iconfont">{{{tab.icon}}}</i>
                <b>{{tab.name}}</b>
            </li>
        </ul>
    </footer>
  </div>
</template>

<script>
  import { tabChanger } from '../vuex/actions';
  import { getTabindex } from '../vuex/getters';
  export default {
    vuex:{
      actions:{
        change:tabChanger
      },
      getters:{
        tabIndex:getTabindex
      }
    },
    data() {
      return {
        cur: 0,
        tablist: [
          {path: '/index/', icon: '&#xe6ba;', name: '首页'},
          {path: '/index/category', icon: '&#xe679;', name: '分类'},
          {path: '/index/social', icon: '&#xe7ea;', name: ''},
          {path: '/index/cart', icon: '&#xe7c3;', name: '购物车'},
          {path: '/index/my', icon: '&#xe706;', name: '我的'}
        ]
      }
    },

    methods: {
      changPage(index) {

        this.change(index);
      }
    }
  }
</script>
