<template>
  <div class="cart-container">
    <header>
      购物车
    </header>
    <section class="cartbody" id="cart-scroll">
      <div class="cart">
        <ul>
          <li v-for="item in cartlist">
            <div class="head">
              <span>
                {{item.source}}
              </span>
              <span>编辑</span>
            </div>
            <p class="cartleft">
            <input type="checkbox"  v-model="checkedNames" value="{{$index}}" v-on:click="test">
              {{item.isf}}
              <img v-bind:src="item.minipicture" alt="" />
            </p>
            <div class="cartright">
              <p>
                {{item.title}}
              </p>
              <p class="hide sx">
                <span>{{item.sku}}</span>
              </p>
              <p class="pricecart">
                <span class="newprice">￥{{item.price}}</span>
                <span class="number">X{{item.number}}</span>
              </p>
              <p class="show bj">
                <span>
                  <b v-on:click="njj($index)">-</b>
                  <b>{{item.number}}</b>
                  <b v-on:click="nadd($index)">+</b>
                </span>
                <span class="debtn" v-on:click="removeCookie($index)">
                  删除
                </span>
              </p>
            </div>
          </li>


        </ul>
        <div class="sub">
          <div class="right">
            <p>
              <span>商品总计</span>
              <span>￥{{numzj}}</span>
            </p>
            <p>
              <span>活动优惠</span>
              <span>￥5</span>
            </p>
            <p>
              <span>总价（不含运费）</span>
              <span>￥{{sumzj}}</span>
            </p>
          </div>
        </div>



        <div class="js">
          <span>已选商品<b>{{numzj}}</b>件</span>
          <span v-on:click="sign">结算</span>

          <!-- <button type="button" name="button" v-on:click="getzj">得到cookie</button> -->
        </div>
      </div>
    </section>

    <div class="yo-dialog yo-dialog-test"  v-bind:class="divshhi==1 ? 'show':'hide'">

      <div class="bd">
        <p>请先登录</p>
      </div>
      <footer class="ft">
        <button class="yo-btn yo-btn-dialog yo-btn-l" v-on:click="setdiv" v-link="{path:'/login'}">点此登录</button>
        <button class="yo-btn yo-btn-dialog yo-btn-l" v-on:click="setdiv">下次再来</button>
      </footer>
    </div>
    <div class="yo-mask" v-bind:class="divshhi==1 ? 'show':'hide'"></div>

  </div>

</template>
<script>
    // var Vue = require('../libs/vue.js');
    // var VueResource = require('../libs/vue-resource.js');
    // Vue.use(VueResource);
    import {
        tabChanger
    } from '../vuex/actions';
    export default {
        vuex: {
            actions: {
                change: tabChanger
            }
        },
        data() {
            return {
                styleclass: 1,
                checkedNames: [],
                sumzj: 0,
                numzj: 0,
                divshhi: 0,
                yhlist: [],
                cartlist: [{
                    id: 2654180,
                    minipicture: 'http://upm01.b5m.com/70b7b27fe8342834bc1ea52e95fbaada',
                    title: '日本 Mitsuei 三津荣洗洁精橘子味270ml/瓶',
                    sku: '颜色分类:白椿化妆品净含量:洗发水500ml+护发素500ml',
                    price: 120,
                    number: 1,
                    source: '帮海贝',
                    isf: true
                }, {
                    id: 2654180,
                    minipicture: 'http://upm01.b5m.com/70b7b27fe8342834bc1ea52e95fbaada',
                    title: '日本 Mitsuei 三津荣洗洁精橘子味270ml/瓶',
                    sku: '颜色分类:白椿化妆品净含量:洗发水500ml+护发素500ml',
                    price: 120,
                    number: 1,
                    source: '帮海贝',
                    isf: true
                }, {
                    id: 2654180,
                    minipicture: 'http://upm01.b5m.com/70b7b27fe8342834bc1ea52e95fbaada',
                    title: '日本 Mitsuei 三津荣洗洁精橘子味270ml/瓶',
                    sku: '颜色分类:白椿化妆品净含量:洗发水500ml+护发素500ml',
                    price: 120,
                    number: 1,
                    source: '帮海贝',
                    isf: true
                }, {
                    id: 2654180,
                    minipicture: 'http://upm01.b5m.com/70b7b27fe8342834bc1ea52e95fbaada',
                    title: '日本 Mitsuei 三津荣洗洁精橘子味270ml/瓶',
                    sku: '颜色分类:白椿化妆品净含量:洗发水500ml+护发素500ml',
                    price: 120,
                    number: 1,
                    source: '日本直邮',
                    isf: true
                }]

            }
        },
        ready: function() {
            this.change(3);
            this.getshop();
            var that = this;
            this.$http.get('/rest/yhlists')
                .then((res) => {
                    console.log("通过代理得到mock数据");
                    console.log(res);
                }, function() {
                    console.log("err");
                });
            new IScroll('#cart-scroll', {
                mouseWheel: true, //PC端的鼠标事件也监听，方便PC端调试
                click: true //允许点击事件

            });
        },

        methods: {
            sign: function() {
                this.divshhi = 1;
            },
            setdiv: function() {
                this.divshhi = 0;
            },
            setCookie: function(name, value, days) {
                var date = new Date();
                date.setDate(date.getDate() + days);
                document.cookie = name + "=" + value + ";expires=" + date;
            },
            getCookie: function(cookieName) {
                var cookieValue = "";
                var strCookies = document.cookie;
                var arrCookies = strCookies.split("; ");
                for (var i = 0; i < arrCookies.length; i++) {
                    var arrItem = arrCookies[i].split("=");
                    if (arrItem[0] == cookieName) {
                        cookieValue = arrItem[1];
                    }
                }
                return cookieValue;
            },
            njj: function(e) {
                if (this.cartlist[e].number == 0) {
                    this.cartlist.splice(e, 1);
                } else {
                    this.cartlist[e].number--;
                }
                console.log(JSON.stringify(this.cartlist));
                var datavalue = JSON.stringify(this.cartlist);
                this.setCookie("cartshop", datavalue, 30);
            },
            nadd: function(i) {
                this.cartlist[i].number++;
                var datavalue = JSON.stringify(this.cartlist);
                this.setCookie("cartshop", datavalue, 30);

            },
            removeCookie: function(j) {
                console.log("remove");
                this.cartlist.splice(j, 1);
                var datavalue = JSON.stringify(this.cartlist);
                this.setCookie("cartshop", datavalue, 30);
            },
            getshop: function() {
                var products = this.getCookie("cartshop");
                var arrProducts = [];
                if (products.length > 0) {
                    arrProducts = JSON.parse(products); //把字符串转化成数组，每个数组元素为productInfo=new Object()，这样一个对象
                }
                this.cartlist = arrProducts;
            },
            test: function() {
                this.getzj();
            },

            getzj: function() {
                var that = this;
                var sum = 0;
                var num = 0;
                setTimeout(function() {
                    console.log(that.checkedNames.length);
                    for (var j = 0; j < that.checkedNames.length; j++) {
                        var y = that.checkedNames[j];
                        num += that.cartlist[y].number;
                        sum += (that.cartlist[y].price) * (that.cartlist[y].number);

                    }
                    that.numzj = num;
                    that.sumzj = sum;
                    console.log(num);
                    console.log(sum);

                }, 500);

            }

        }
    }
</script>
