<template>
  <div class="my-container" id="my-scroll">
    <div >
    <div class="bg">
<header>
  <div><i class="iconfont">&#xe64b;</i></div>
</header>
<nav>
<div>
  <span v-link="{ path: '/login' }">登录<em>|</em>注册</span>
</div>
</nav>
</div>
<section>
  <div class="booking">
    <div class="dingdan"><p><i class="iconfont">&#xe613;</i>我的订单</p></div>
      <div class="alldg"><span>查看全部订单<i class="iconfont">&#xe630;</i></span></div>
  </div>
  <div class="category">
  <ul>
    <li v-for="tab in catelist">
      <i class="iconfont">{{{tab.icon}}}</i>
        <b>{{tab.name}}</b>
    </li>
  </ul>
  </div>
  <div class="youhui">
    <ul>
      <li v-for="item in nav">
        <div><img v-bind:src="item.img" ></div>
          <b>{{item.title}}</b>
      </li>
    </ul>
    <ul>
      <li v-for="item in nav1">
        <div><img v-bind:src="item.img" ></div>
          <b>{{item.title}}</b>
      </li>
    </ul>
    <ul>
      <li v-for="item in nav2">
        <div><img v-bind:src="item.img" ></div>
          <b>{{item.title}}</b>
      </li>
    </ul>
  </div>
  <div class="contus">
    <div class="kefu"><p>客服电话</p></div>
      <div class="phone"><span>400-085-0505<i class="iconfont">&#xe630;</i></span></div>
  </div>
  </div>
</section>
</div>
  </div>
</template>
<script>
    export default {
        data() {
            return {
                catelist: [{
                    icon: '&#xe638;',
                    name: '待付款'
                }, {
                    icon: '&#xe61e;',
                    name: '待发货'
                }, {
                    icon: '&#xe603;',
                    name: '待收货'
                }, {
                    icon: '&#xe689;',
                    name: '待评价'
                }],
                nav: [{
                    "title": "\u4f18\u60e0\u5238",
                    "img": "http:\/\/cdnweb.b5m.com\/web\/cmsphp\/static_image\/e201afe4a75ee6cdfc08931e242221be.png",
                    "url": "http:\/\/bhb.b5m.com\/user\/couponList"
                }, {
                    "title": "\u6536\u85cf",
                    "img": "http:\/\/cdnweb.b5m.com\/web\/cmsphp\/static_image\/4e1830c54cfdb80e13315c4a3cb1158a.png",
                    "url": "http:\/\/bhb.b5m.com\/user\/favourite"
                }, {
                    "title": "\u5e2e\u94bb",
                    "img": "http:\/\/cdnweb.b5m.com\/web\/cmsphp\/static_image\/c566e424e8a8578a48317af2a6d89efa.png",
                    "url": "http:\/\/bhb.b5m.com\/user\/SuperBzHistory"
                }],
                nav1: [{
                    "title": "\u62fc\u56e2",
                    "img": "http:\/\/cdnweb.b5m.com\/web\/cmsphp\/static_image\/8df3725652ed177fa6762f8b795d1b2e.png",
                    "url": "b5m:\/\/groupbuying\/myGroup"
                }, {
                    "title": "\u4e00\u5143\u8d2d",
                    "img": "http:\/\/cdnweb.b5m.com\/web\/cmsphp\/static_image\/5cce9001744b1b10bfe4d37f2597c9f5.png",
                    "url": "b5m:\/\/exchange\/orderList"
                }, {
                    "title": "\u5206\u4eab\u8d5a\u7ea2\u5305",
                    "img": "http:\/\/cdnweb.b5m.com\/web\/cmsphp\/static_image\/ad980c737fca1f978746e176ecf7fef0.png",
                    "url": "b5m:\/\/hd\/giveCoupon"
                }],
                nav2: [{
                    "title": "\u6536\u8d27\u5730\u5740",
                    "img": "http:\/\/cdnweb.b5m.com\/web\/cmsphp\/static_image\/b2fbe2a5bbacaaa78167a43186ff4629.png",
                    "url": "http:\/\/bhb.b5m.com\/address\/address"
                }, {
                    "title": "\u5728\u7ebf\u5ba2\u670d",
                    "img": "http:\/\/cdnweb.b5m.com\/web\/cmsphp\/static_image\/4416e320110c98e54a53a4f1712d36b7.png",
                    "url": "http:\/\/user\/onlineservice"
                }, {
                    "title": "\u6652\u5355",
                    "img": "http:\/\/cdnweb.b5m.com\/web\/cmsphp\/static_image\/1e4ce75b48f9e6e010fc4f468847e4d0.png",
                    "url": "b5m:\/\/baskorder\/index"
                }]
            }
        },
        ready: function() {
            setTimeout(function() {
                new IScroll('#my-scroll', {
                    preventDefault: false
                });
            }, 500);
        }
    }
</script>
