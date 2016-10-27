/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";__webpack_require__(1);__webpack_require__(5);__webpack_require__(7);__webpack_require__(9);var _commonUtil=__webpack_require__(11);var _commonUtil2=_interopRequireDefault(_commonUtil);var _guide=__webpack_require__(12);var _guide2=_interopRequireDefault(_guide);var _index=__webpack_require__(15);var _index2=_interopRequireDefault(_index);var _main=__webpack_require__(20);var _main2=_interopRequireDefault(_main);var _category=__webpack_require__(23);var _category2=_interopRequireDefault(_category);var _social=__webpack_require__(26);var _social2=_interopRequireDefault(_social);var _cart=__webpack_require__(29);var _cart2=_interopRequireDefault(_cart);var _list=__webpack_require__(32);var _list2=_interopRequireDefault(_list);var _my=__webpack_require__(35);var _my2=_interopRequireDefault(_my);var _login=__webpack_require__(38);var _login2=_interopRequireDefault(_login);var _register=__webpack_require__(40);var _register2=_interopRequireDefault(_register);var _details=__webpack_require__(43);var _details2=_interopRequireDefault(_details);var _store=__webpack_require__(47);var _store2=_interopRequireDefault(_store);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}//Vue.use(VueRouter);
	// views
	var App=Vue.extend({store:_store2.default});// router
	//因为子啊全局里引入了这几个文件。所以此处不需要引入
	// import Vue from "./libs/vue.js";
	// import VueRouter from "./libs/vue-router.js";
	var router=new VueRouter();router.map({'/':{component:_guide2.default},'/index':{component:_index2.default,subRoutes:{'/':{component:_main2.default},'/category':{component:_category2.default},'/social':{component:_social2.default},'/cart':{component:_cart2.default},'/my':{component:_my2.default},'/backmy':{component:_my2.default}}},'/detail/:id':{name:'detail',component:_details2.default},'/login':{component:_login2.default},'/backlogin':{component:_login2.default},'/goreg':{component:_register2.default},'/golist':{component:_list2.default},'/godetails':{component:_details2.default},'/list/:id':{name:'list',component:_list2.default}});router.start(App,'body');

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 6 */,
/* 7 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 8 */,
/* 9 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 10 */,
/* 11 */
/***/ function(module, exports) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var commonUtil={isAllLoaded:function isAllLoaded(scope,cb){var t_img;// 定时器
	var isLoad=true;// 控制变量
	// 判断图片加载状况，加载完成后回调
	return isImgLoad(cb);// 判断图片加载的函数
	function isImgLoad(callback){// 查找所有图片，迭代处理
	$(scope).find('img').each(function(){// 找到为0就将isLoad设为false，并退出each
	if(this.height===0){isLoad=false;return false;}});// 为true，没有发现为0的。加载完毕
	if(isLoad){clearTimeout(t_img);// 清除定时器
	// 回调函数
	callback();// 为false，因为找到了没有加载完成的图，将调用定时器递归
	}else{isLoad=true;t_img=setTimeout(function(){isImgLoad(callback);// 递归扫描
	},500);// 我这里设置的是500毫秒就扫描一次，可以自己调整
	}}}};exports.default=commonUtil;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(13)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\guide.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(14)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-4d8a2b09/guide.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});// <template>
	//   <div class="m-guide">
	//     <div class="swiper-container" id="guide-swiper">
	//       <div class="swiper-wrapper">
	//         <div class="swiper-slide" v-for="img in imgList">
	//           <img v-if="$index==3" v-link="{path: '/index'}" :src="img" />
	//           <img v-else :src="img" />
	//         </div>
	//       </div>
	//     </div>
	//   </div>
	// </template>
	// <script>
	exports.default={data:function data(){return{imgList:['/images/g1.png','/images/g2.png','/images/g3.png','/images/g4.png']};},ready:function ready(){new Swiper('#guide-swiper');}};// </script>
	/* generated by vue-loader */

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"m-guide\">\n  <div class=\"swiper-container\" id=\"guide-swiper\">\n    <div class=\"swiper-wrapper\">\n      <div class=\"swiper-slide\" v-for=\"img in imgList\">\n        <img v-if=\"$index==3\" v-link=\"{path: '/index'}\" :src=\"img\" />\n        <img v-else :src=\"img\" />\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(16)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(19)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-cda78442/index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _actions=__webpack_require__(17);var _getters=__webpack_require__(18);// <template>
	//   <div>
	//     <div class="index-container">
	//         <router-view></router-view>
	//     </div>
	//     <footer id="footer">
	//         <ul>
	//             <li
	//               v-bind:class="tabIndex == $index ? 'active' : ''"
	//               v-on:click="changPage($index)"
	//               v-for="tab in tablist"
	//               v-link="{path: tab.path}">
	//                 <i class="iconfont">{{{tab.icon}}}</i>
	//                 <b>{{tab.name}}</b>
	//             </li>
	//         </ul>
	//     </footer>
	//   </div>
	// </template>
	//
	// <script>
	exports.default={vuex:{actions:{change:_actions.tabChanger},getters:{tabIndex:_getters.getTabindex}},data:function data(){return{cur:0,tablist:[{path:'/index/',icon:'&#xe6ba;',name:'首页'},{path:'/index/category',icon:'&#xe679;',name:'分类'},{path:'/index/social',icon:'&#xe7ea;',name:''},{path:'/index/cart',icon:'&#xe7c3;',name:'购物车'},{path:'/index/my',icon:'&#xe706;',name:'我的'}]};},methods:{changPage:function changPage(index){this.change(index);}}};// </script>
	/* generated by vue-loader */

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var tabChanger=exports.tabChanger=function tabChanger(_ref,tabIndex){var dispatch=_ref.dispatch,state=_ref.state;dispatch('CHANGETAB',tabIndex);};

/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});var getTabindex=exports.getTabindex=function getTabindex(state){return state.tabIndex;};

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n  <div class=\"index-container\">\n      <router-view></router-view>\n  </div>\n  <footer id=\"footer\">\n      <ul>\n          <li\n            v-bind:class=\"tabIndex == $index ? 'active' : ''\"\n            v-on:click=\"changPage($index)\"\n            v-for=\"tab in tablist\"\n            v-link=\"{path: tab.path}\">\n              <i class=\"iconfont\">{{{tab.icon}}}</i>\n              <b>{{tab.name}}</b>\n          </li>\n      </ul>\n  </footer>\n</div>\n";

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(21)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\main.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(22)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-1eb355bc/main.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _commonUtil=__webpack_require__(11);var _commonUtil2=_interopRequireDefault(_commonUtil);var _actions=__webpack_require__(17);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var mySwiper=null;// <template>
	//   <div class="main-container">
	//       <header>
	//         <div class="searchleft">
	//           <span><img src="/images/sousu.png" alt="" /></span>
	//           <input type="text" name="name" value=""  class="seachtext" placeholder="你要的，就在这里~">
	//         </div>
	//        <div class="searchright">
	//          <img src="/images/M-saoyisao.png" alt="" />
	//        </div>
	//       </header>
	//       <nav id="wrapper">
	//           <ul id="swiper-nav headernav scroll">
	//               <li v-for="nav in indexNav" v-on:click="switchSwiper($index)" v-bind:class="curIndex == $index ? 'active': ''">{{nav}}</li>
	//           </ul>
	//       </nav>
	//       <section>
	//         <div class="swiper-container" id="index-swiper">
	//           <div class="swiper-wrapper">
	//             <div class="swiper-slide">
	//               <section id="index-scroll" class="scrollbox">
	//
	//                 <div class="bodybox">
	//                   <div class="headzkf">
	//                     <img v-bind:src="imgArrow"/>
	//                     <span>下拉刷新...</span>
	//                 </div>
	//                   <div class="bannerbox swiper-container">
	//                     <ul class="swiper-wrapper" id="styleul">
	//
	//                       <li class="swiper-slide" v-for="imgb in firstlist.home_banner.floorData.picList">
	//                         <img v-bind:src="imgb.picUrl" alt="" />
	//                       </li>
	//                     </ul>
	//                   </div>
	//
	//                   <nav class="bannernav">
	//                     <ul>
	//                       <li v-for="bnav in firstlist.home_fast.floorData.picList">
	//                         <img v-bind:src="bnav.picUrl" alt="" />
	//                         <span>{{bnav.name}}</span>
	//                       </li>
	//                     </ul>
	//                   </nav>
	//                    <div class="sec1">
	//                     <div class="headshop">
	//                         <img v-bind:src="firstlist.home_activitybanner.floorData.picList[0].picUrl" alt="" />
	//                     </div>
	//                     <div class="shops1">
	//                       <header class="shop1head">
	//                         <span>图片</span>
	//                         <span>今日活动</span>
	//                       </header>
	//                       <ul>
	//                         <li>
	//                           <img v-bind:src="firstlist.app_activity.floorData.intoDataList.first.imgUrl" alt="" />
	//                         </li>
	//                         <li v-for="acnav in firstlist.app_activity.floorData.intoDataList.other"  v-link="{name: 'detail', params: {id: acnav.product_id}}">
	//                           <img v-bind:src="acnav.imgUrl" alt="" />
	//                         </li>
	//
	//                       </ul>
	//                     </div>
	//                   </div>
	//
	//                   <div class="sec2">
	//                     <div v-for="ptnav in firstlist.app_pintuan.floorData.intoDataList" v-link="{name: 'detail', params: {id: acnav.product_id}}">
	//                       <img v-bind:src="ptnav.tuan_pic" alt="" />
	//                       <p>
	//                         {{ptnav.title}}
	//                       </p>
	//                       <div class="xqbottom">
	//                         <span class="newprice">￥{{ptnav.tuan_price_buy}}</span>
	//                         <span class="oldprice">单买价￥{{ptnav.tuan_price_tax}}</span>
	//                         <button type="button" name="button" value="">去拼团</button>
	//                       </div>
	//                     </div>
	//
	//                   </div>
	//                   <div class="sec3">
	//                     <div class="se3head">
	//                       今日专场
	//                     </div>
	//                     <div class="sec3box" v-for="jrzcnav in firstlist.app_spetoday.floorData.intoDataList.first">
	//                       <div class="shopsec3head">
	//                         <img v-bind:src="jrzcnav.imgUrl" alt="" />
	//                       </div>
	//                       <div class="sec3body" v-bind:class="jrzcnav.other_products.length==0 ? 'hide' : 'show'">
	//                         <nav class="sec3shopnav">
	//                           <ul id="wlscroll">
	//                             <li v-for="shopnav in jrzcnav.other_products" v-link="{name: 'detail', params: {id: acnav.product_id}}">
	//                               <img v-bind:src="shopnav.photourl" alt="" />
	//                               <p class="sec3p1">
	//                                 {{shopnav.copyWriter}}
	//                               </p>
	//                               <p class="sec3p2">
	//                                 <span class="newprice">￥{{shopnav.salePrice}}</span>
	//                                   <span class="oldprice">￥{{shopnav.high_price}}</span>
	//                               </p>
	//                             </li>
	//                           </ul>
	//                         </nav>
	//                       </div>
	//                     </div>
	//
	//                   </div>
	//                    <div class="fltm">
	//                      <div class="se4head">
	//                        返利特卖
	//                      </div>
	//                      <ul>
	//                        <li v-for="flnav in firstlist.app_fanlitemai.floorData.productList" v-link="{name: 'detail', params: {id: acnav.product_id}}">
	//                          <div class="fltmleft">
	//                            <img v-bind:src="flnav.productImg" alt="" />
	//                          </div>
	//                          <div class="fltmright">
	//                            <p class="txtp">
	//                              {{flnav.productTitle}}
	//                            </p>
	//                            <p class="pricep">
	//                              <span class="newprice">￥{{flnav.salePrice}}</span>
	//                              <span class="oldprice">￥{{flnav.productPrice}}</span>
	//                              <span class="sm">返帮钻{{flnav.rebate_num}}</span>
	//                            </p>
	//                          </div>
	//                        </li>
	//                      </ul>
	//                    </div>
	//                    <div class="rmph">
	//                      <div class="rmphead">
	//                        热卖排行
	//                      </div>
	//                      <ul>
	//                        <li v-for="rm in firstlist.app_beautyhotsale.floorData.intoDataList" v-link="{name: 'detail', params: {id: acnav.product_id}}">
	//                          <p class="pimg">
	//                            <img v-bind:src="rm.photourl" alt="" />
	//                          </p>
	//                          <p class="xxpp">
	//                           <span>{{rm.copyWriter}}</span>
	//                            <span>
	//                              {{rm.title}}
	//                            </span>
	//                          </p>
	//                          <p class="pprice">
	//                            <span class="newprice">￥{{rm.low_price}}</span>
	//                             <span class="oldprice">￥{{rm.high_price}}</span>
	//                           <span class="rmphsm">{{rm.price_discount}}</span>
	//                          </p>
	//                        </li>
	//                      </ul>
	//                    </div>
	//                    <div class="xpsj">
	//                      <div class="xpsjhead">
	//                        新品上架
	//                      </div>
	//                      <ul>
	//                        <li v-for="new in app_newup" v-link="{name: 'detail', params: {id: acnav.product_id}}">
	//                          <p>
	//                            <img v-bind:src="new.photourl" alt="" />
	//                          </p>
	//                          <p class="smm">
	//                            <span>{{new.title}}</span>
	//                            <span class="pricem">￥{{new.salePrice}}</span>
	//                          </p>
	//                        </li>
	//                      </ul>
	//                    </div>
	//                    <div class="footzkf">
	//                   <img v-bind:src="imgArrow"/>
	//                   <span>上拉加载更多...</span>
	//                 </div>
	//                 </div>
	//
	//               </section>
	//             </div>
	//             <div class="swiper-slide">
	//
	//               <section id="index-scroll2" class="scrollbox">
	//
	//                 <div class="bodybox">
	//                   <div class="bannerbox swiper-container">
	//                     <ul class="swiper-wrapper" id="styleul">
	//
	//                       <li class="swiper-slide" v-for="imgb2 in homehaiwaibanner2">
	//                         <img v-bind:src="imgb2.picUrl" alt="" />
	//                       </li>
	//                     </ul>
	//                   </div>
	//
	//                   <nav class="bannernav">
	//                     <ul>
	//                       <li v-for="bnav2 in homehaiwaifast2">
	//                         <img v-bind:src="bnav2.picUrl" alt="" />
	//                         <span>{{bnav2.name}}</span>
	//                       </li>
	//                     </ul>
	//                   </nav>
	//
	//                    <div class="xpsj2">
	//                      <div class="xpsjhead">
	//                        <img v-bind:src="homehaiwaigoodsnav_12.picUrl" alt="" />
	//                      </div>
	//                      <ul>
	//                        <li v-for="new2 in homehaiwaigoodslist_12">
	//                          <p>
	//                            <img v-bind:src="new2.productImg" alt="" />
	//                          </p>
	//                          <p class="smm">
	//                            <span>{{new2.productTitle}}</span>
	//                            <span class="pricem">￥{{new2.salePrice}}</span>
	//                          </p>
	//                        </li>
	//                      </ul>
	//                    </div>
	//                    <div class="xpsj2">
	//                      <div class="xpsjhead">
	//                        <img v-bind:src="homehaiwaigoodsnav_22.picUrl" alt="" />
	//                      </div>
	//                      <ul>
	//                        <li v-for="new2 in ahomehaiwaigoodslist_22">
	//                          <p>
	//                            <img v-bind:src="new2.productImg" alt="" />
	//                          </p>
	//                          <p class="smm">
	//                            <span>{{new2.productTitle}}</span>
	//                            <span class="pricem">￥{{new2.salePrice}}</span>
	//                          </p>
	//                        </li>
	//                      </ul>
	//                    </div>
	//                    <div class="xpsj2">
	//                      <div class="xpsjhead">
	//                        <img v-bind:src="homehaiwaigoodsnav_32.picUrl" alt="" />
	//                      </div>
	//                      <ul>
	//                        <li v-for="new2 in homehaiwaigoodslist_32">
	//                          <p>
	//                            <img v-bind:src="new2.productImg" alt="" />
	//                          </p>
	//                          <p class="smm">
	//                            <span>{{new2.productTitle}}</span>
	//                            <span class="pricem">￥{{new2.salePrice}}</span>
	//                          </p>
	//                        </li>
	//                      </ul>
	//                    </div>
	//                    <div class="xpsj2">
	//                      <div class="xpsjhead">
	//                        <img v-bind:src="homehaiwaigoodsnav_42.picUrl" alt="" />
	//                      </div>
	//                      <ul>
	//                        <li v-for="new2 in homehaiwaigoodslist_42">
	//                          <p>
	//                            <img v-bind:src="new2.productImg" alt="" />
	//                          </p>
	//                          <p class="smm">
	//                            <span>{{new2.productTitle}}</span>
	//                            <span class="pricem">￥{{new2.salePrice}}</span>
	//                          </p>
	//                        </li>
	//                      </ul>
	//                    </div>
	//                    <div class="xpsj2">
	//                      <div class="xpsjhead">
	//                        <img v-bind:src="homehaiwaigoodsnav_52.picUrl" alt="" />
	//                      </div>
	//                      <ul>
	//                        <li v-for="new2 in homehaiwaigoodslist_52">
	//                          <p>
	//                            <img v-bind:src="new2.productImg" alt="" />
	//                          </p>
	//                          <p class="smm">
	//                            <span>{{new2.productTitle}}</span>
	//                            <span class="pricem">￥{{new2.salePrice}}</span>
	//                          </p>
	//                        </li>
	//                      </ul>
	//                    </div>
	//                 </div>
	//
	//               </section>
	//             </div>
	//             <div class="swiper-slide">
	//               <section id="index-scroll3" class="scrollbox">
	//
	//                 <div class="bodybox">
	//                   <div class="faxian">
	//                     <ul>
	//                       <li v-for="new3 in homefaxian3">
	//                         <p>
	//                           <img v-bind:src="new3.productImg" alt="" />
	//                         </p>
	//                         <p class="smm">
	//                           <span>{{new3.descriptionTitle}}</span>
	//                           <span>{{new3.description}}</span>
	//                           <span class="pricem">
	//                             <b>￥{{new3.productPrice}}</b>
	//                             <b>我要买></b>
	//                           </span>
	//                         </p>
	//                       </li>
	//                     </ul>
	//                   </div>
	//
	//
	//                 </div>
	//
	//               </section>
	//             </div>
	//             <div class="swiper-slide">
	//
	//               <section id="index-scroll4" class="scrollbox">
	//
	//                 <div class="bodybox">
	//                   <div class="bannerbox swiper-container">
	//                     <ul class="swiper-wrapper" id="styleul">
	//
	//                       <li class="swiper-slide" v-for="imgb4 in homemeizhuangbanner4">
	//                         <img v-bind:src="imgb4.picUrl" alt="" />
	//                       </li>
	//                     </ul>
	//                   </div>
	//
	//                   <nav class="bannernav">
	//                     <ul>
	//                       <li v-for="bnav4 in homemeizhuangfast4">
	//                         <img v-bind:src="bnav4.picUrl" alt="" />
	//                         <span>{{bnav4.name}}</span>
	//                       </li>
	//                     </ul>
	//                   </nav>
	//
	//                    <div class="xpsj2  cdymeizhuang">
	//                      <div class="xpsjhead">
	//                        <img v-bind:src="homemeizhuangnewpart4.picUrl" alt="" />
	//                      </div>
	//                      <ul>
	//                        <li v-for="new4 in homemeizhuangbrandshow4">
	//                          <p>
	//                            <img v-bind:src="new4.picUrl" alt="" />
	//                          </p>
	//
	//                        </li>
	//                      </ul>
	//                    </div>
	//                    <div class="xpsj2">
	//                      <div class="xpsjhead">
	//                        <img v-bind:src="homemeizhuangsalepart4.picUrl" alt="" />
	//                      </div>
	//                      <ul>
	//                        <li v-for="new4 in homemeizhuangsalelist4">
	//                          <p>
	//                            <img v-bind:src="new4.productImg" alt="" />
	//                          </p>
	//                          <p class="smm">
	//                            <span>{{new4.productTitle}}</span>
	//                            <span class="pricem">￥{{new4.salePrice}}</span>
	//                          </p>
	//                        </li>
	//                      </ul>
	//                    </div>
	//                    <div class="xpsj2">
	//                      <div class="xpsjhead">
	//                        <img v-bind:src="homemeizhuangsalepart4.picUrl" alt="" />
	//                      </div>
	//                      <ul>
	//                        <li v-for="new4 in homemeizhuangnewlist4">
	//                          <p>
	//                            <img v-bind:src="new4.productImg" alt="" />
	//                          </p>
	//                          <p class="smm">
	//                            <span>{{new4.productTitle}}</span>
	//                            <span class="pricem">￥{{new4.salePrice}}</span>
	//                          </p>
	//                        </li>
	//                      </ul>
	//                    </div>
	//
	//
	//
	//
	//                 </div>
	//
	//               </section>
	//             </div>
	//           </div>
	//         </div>
	//       </section>
	//   </div>
	// </template>
	//
	// <script>
	exports.default={vuex:{actions:{change:_actions.tabChanger}},data:function data(){return{page:3,firstlist:{},app_newup:[],list:[],homehaiwaibanner2:'',homehaiwaifast2:'',homehaiwaigoodslist_12:'',ahomehaiwaigoodslist_22:'',homehaiwaigoodslist_32:'',homehaiwaigoodslist_42:'',homehaiwaigoodslist_52:'',homehaiwaigoodsnav_12:'',homehaiwaigoodsnav_22:'',homehaiwaigoodsnav_32:'',homehaiwaigoodsnav_42:'',homehaiwaigoodsnav_52:'',homefaxian3:'',homemeizhuangbanner4:'',homemeizhuangbrand4:'',homemeizhuangbrandshow4:'',homemeizhuangfast4:'',homemeizhuangnewlist4:'',homemeizhuangnewpart4:'',homemeizhuangsalelist4:'',homemeizhuangsalepart4:'',imgArrow:'./images/arrow.png',curIndex:0,indexNav:['推荐','海外直购','发现','美妆','母婴','健康生活','家居生活','服饰鞋包']};},ready:function ready(){var _this=this;this.change(0);var myscroll2=new IScroll("#wrapper",{hScrollbar:false,vScrollbar:false,mouseWheel:true,//PC端的鼠标事件也监听，方便PC端调试
	click:true,//允许点击事件
	eventPassthrough:true,//纵向滚动整个页面，横向滚动iscroll区域
	scrollX:true});var that=this;this.$http.jsonp('http://bhb.b5m.com/api/korea?action=ActivityListFloor&activitySign=home_page_haiwai&is_assoc=1').then(function(res){console.log(res);_this.homehaiwaibanner2=res.data.val.homehaiwaibanner.floorData.picList;console.log(_this.homehaiwaibanner2);_this.homehaiwaifast2=res.data.val.homehaiwaifast.floorData.picList;_this.homehaiwaigoodslist_12=res.data.val.homehaiwaigoodslist_1.floorData.productList;_this.ahomehaiwaigoodslist_22=res.data.val.homehaiwaigoodslist_2.floorData.productList;_this.homehaiwaigoodslist_32=res.data.val.homehaiwaigoodslist_3.floorData.productList;_this.homehaiwaigoodslist_42=res.data.val.homehaiwaigoodslist_4.floorData.productList;_this.homehaiwaigoodslist_52=res.data.val.homehaiwaigoodslist_5.floorData.productList;_this.homehaiwaigoodsnav_12=res.data.val.homehaiwaigoodsnav_1.floorData;_this.homehaiwaigoodsnav_22=res.data.val.homehaiwaigoodsnav_2.floorData;_this.homehaiwaigoodsnav_32=res.data.val.homehaiwaigoodsnav_3.floorData;_this.homehaiwaigoodsnav_42=res.data.val.homehaiwaigoodsnav_4.floorData;_this.homehaiwaigoodsnav_52=res.data.val.homehaiwaigoodsnav_5.floorData;});this.$http.jsonp('http://bhb.b5m.com/api/korea?action=ActivityListFloor&activitySign=home_page_faxian&is_assoc=1').then(function(res){_this.homefaxian3=res.data.val.homefaxian.floorData.intoDataList;console.log(_this.homefaxian3);});this.$http.jsonp('http://bhb.b5m.com/api/korea?action=ActivityListFloor&activitySign=home_page_meizhuang&is_assoc=1').then(function(res){_this.homemeizhuangbanner4=res.data.val.homemeizhuangbanner.floorData.picList;_this.homemeizhuangbrand4=res.data.val.homemeizhuangbrand.floorData;_this.homemeizhuangbrandshow4=res.data.val.homemeizhuangbrandshow.floorData.picList;_this.homemeizhuangfast4=res.data.val.homemeizhuangfast.floorData.picList;_this.homemeizhuangnewlist4=res.data.val.homemeizhuangnewlist.floorData.productList;_this.homemeizhuangnewpart4=res.data.val.homemeizhuangnewpart.floorData;_this.homemeizhuangsalelist4=res.data.val.homemeizhuangsalelist.floorData.productList;_this.homemeizhuangsalepart4=res.data.val.homemeizhuangsalepart.floorData;});this.$http.jsonp('http://bhb.b5m.com/api/korea?action=ActivityListFloor&activitySign=home_page&is_assoc=1').then(function(res){console.log("----");console.log(res.data);console.log("----");_this.firstlist=res.data.val;for(var xx=0;xx<res.data.val.home_banner.floorData.picList.length;xx++){console.log(res.data.val.home_banner.floorData.picList[xx].picUrl);}_this.app_newup=res.data.val.app_newup.floorData.intoDataList;//DOM更新后，图片加载完，实例化IScroll
	Vue.nextTick(function(){_commonUtil2.default.isAllLoaded('#index-scroll',function(){var mySwiper2=new Swiper('.bannerbox',{autoplay:1000,//可选选项，自动滑动
	loop:true});var myScroll=new IScroll('#index-scroll',{probeType:3,mouseWheel:true,click:true,onBeforeScrollStart:null,disableMouse:true,disablePointer:true,freeScroll:true});myScroll.scrollTo(0,-35);var head=$('.headzkf img'),topImgHasClass=head.hasClass('up');var foot=$('.footzkf img'),bottomImgHasClass=head.hasClass('down');myScroll.on('scroll',function(){var y=this.y,maxY=this.maxScrolly-y;if(y>=0){!topImgHasClass&&head.addClass('up');return'';}if(maxY>=0){!bottomImgHasClass&&foot.addClass('down');return'';}});myScroll.on('scrollEnd',function(){if(this.y>=-35&&this.y<0){myScroll.scrollTo(0,-35);head.removeClass('up');}else if(this.y>=0){head.attr('src','./images/ajax-loader.gif');};var self=this;var maxY=this.maxScrollY-this.y;if(maxY>-35&&maxY<0){myScroll.scrollTo(0,self.maxScrollY+35);foot.removeClass('down');}else if(maxY>=0){foot.attr('src','./images/ajax-loader.gif');that.$http.jsonp('http://bhb.b5m.com/api/korea?action=ActivityModuleFloor&is_assoc=1&floorCode=app_newup&page='+that.page).then(function(res){console.log(1);console.log(res);console.log(res.data.val.app_newup);that.app_newup=that.app_newup.concat(res.data.val.app_newup.floorData.intoDataList);that.page=that.page+1;foot.removeClass('down');foot.attr('src','./images/arrow.png');Vue.nextTick(function(){myScroll.refresh();myScroll.scrollTo(0,self.maxScrollY+35);});});}});new IScroll('#index-scroll2');new IScroll('#index-scroll3');new IScroll('#index-scroll4');});});mySwiper=new Swiper("#index-swiper",{onSlideChangeStart:function onSlideChangeStart(){that.curIndex=mySwiper.activeIndex;}});var myscroll3=new IScroll("#wlscroll",{hScrollbar:false,vScrollbar:false,mouseWheel:true,//PC端的鼠标事件也监听，方便PC端调试
	click:true,//允许点击事件
	eventPassthrough:true,//纵向滚动整个页面，横向滚动iscroll区域
	scrollX:true,//默认是纵向，横向需要设置scrollX
	freeScroll:true});});},methods:{switchSwiper:function switchSwiper(index){this.curIndex=index;mySwiper.slideTo(index);}}};// </script>
	/* generated by vue-loader */

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"main-container\">\n    <header>\n      <div class=\"searchleft\">\n        <span><img src=\"/images/sousu.png\" alt=\"\" /></span>\n        <input type=\"text\" name=\"name\" value=\"\"  class=\"seachtext\" placeholder=\"你要的，就在这里~\">\n      </div>\n     <div class=\"searchright\">\n       <img src=\"/images/M-saoyisao.png\" alt=\"\" />\n     </div>\n    </header>\n    <nav id=\"wrapper\">\n        <ul id=\"swiper-nav headernav scroll\">\n            <li v-for=\"nav in indexNav\" v-on:click=\"switchSwiper($index)\" v-bind:class=\"curIndex == $index ? 'active': ''\">{{nav}}</li>\n        </ul>\n    </nav>\n    <section>\n      <div class=\"swiper-container\" id=\"index-swiper\">\n        <div class=\"swiper-wrapper\">\n          <div class=\"swiper-slide\">\n            <section id=\"index-scroll\" class=\"scrollbox\">\n\n              <div class=\"bodybox\">\n                <div class=\"headzkf\">\n                  <img v-bind:src=\"imgArrow\"/>\n                  <span>下拉刷新...</span>\n              </div>\n                <div class=\"bannerbox swiper-container\">\n                  <ul class=\"swiper-wrapper\" id=\"styleul\">\n\n                    <li class=\"swiper-slide\" v-for=\"imgb in firstlist.home_banner.floorData.picList\">\n                      <img v-bind:src=\"imgb.picUrl\" alt=\"\" />\n                    </li>\n                  </ul>\n                </div>\n\n                <nav class=\"bannernav\">\n                  <ul>\n                    <li v-for=\"bnav in firstlist.home_fast.floorData.picList\">\n                      <img v-bind:src=\"bnav.picUrl\" alt=\"\" />\n                      <span>{{bnav.name}}</span>\n                    </li>\n                  </ul>\n                </nav>\n                 <div class=\"sec1\">\n                  <div class=\"headshop\">\n                      <img v-bind:src=\"firstlist.home_activitybanner.floorData.picList[0].picUrl\" alt=\"\" />\n                  </div>\n                  <div class=\"shops1\">\n                    <header class=\"shop1head\">\n                      <span>图片</span>\n                      <span>今日活动</span>\n                    </header>\n                    <ul>\n                      <li>\n                        <img v-bind:src=\"firstlist.app_activity.floorData.intoDataList.first.imgUrl\" alt=\"\" />\n                      </li>\n                      <li v-for=\"acnav in firstlist.app_activity.floorData.intoDataList.other\"  v-link=\"{name: 'detail', params: {id: acnav.product_id}}\">\n                        <img v-bind:src=\"acnav.imgUrl\" alt=\"\" />\n                      </li>\n\n                    </ul>\n                  </div>\n                </div>\n\n                <div class=\"sec2\">\n                  <div v-for=\"ptnav in firstlist.app_pintuan.floorData.intoDataList\" v-link=\"{name: 'detail', params: {id: acnav.product_id}}\">\n                    <img v-bind:src=\"ptnav.tuan_pic\" alt=\"\" />\n                    <p>\n                      {{ptnav.title}}\n                    </p>\n                    <div class=\"xqbottom\">\n                      <span class=\"newprice\">￥{{ptnav.tuan_price_buy}}</span>\n                      <span class=\"oldprice\">单买价￥{{ptnav.tuan_price_tax}}</span>\n                      <button type=\"button\" name=\"button\" value=\"\">去拼团</button>\n                    </div>\n                  </div>\n\n                </div>\n                <div class=\"sec3\">\n                  <div class=\"se3head\">\n                    今日专场\n                  </div>\n                  <div class=\"sec3box\" v-for=\"jrzcnav in firstlist.app_spetoday.floorData.intoDataList.first\">\n                    <div class=\"shopsec3head\">\n                      <img v-bind:src=\"jrzcnav.imgUrl\" alt=\"\" />\n                    </div>\n                    <div class=\"sec3body\" v-bind:class=\"jrzcnav.other_products.length==0 ? 'hide' : 'show'\">\n                      <nav class=\"sec3shopnav\">\n                        <ul id=\"wlscroll\">\n                          <li v-for=\"shopnav in jrzcnav.other_products\" v-link=\"{name: 'detail', params: {id: acnav.product_id}}\">\n                            <img v-bind:src=\"shopnav.photourl\" alt=\"\" />\n                            <p class=\"sec3p1\">\n                              {{shopnav.copyWriter}}\n                            </p>\n                            <p class=\"sec3p2\">\n                              <span class=\"newprice\">￥{{shopnav.salePrice}}</span>\n                                <span class=\"oldprice\">￥{{shopnav.high_price}}</span>\n                            </p>\n                          </li>\n                        </ul>\n                      </nav>\n                    </div>\n                  </div>\n\n                </div>\n                 <div class=\"fltm\">\n                   <div class=\"se4head\">\n                     返利特卖\n                   </div>\n                   <ul>\n                     <li v-for=\"flnav in firstlist.app_fanlitemai.floorData.productList\" v-link=\"{name: 'detail', params: {id: acnav.product_id}}\">\n                       <div class=\"fltmleft\">\n                         <img v-bind:src=\"flnav.productImg\" alt=\"\" />\n                       </div>\n                       <div class=\"fltmright\">\n                         <p class=\"txtp\">\n                           {{flnav.productTitle}}\n                         </p>\n                         <p class=\"pricep\">\n                           <span class=\"newprice\">￥{{flnav.salePrice}}</span>\n                           <span class=\"oldprice\">￥{{flnav.productPrice}}</span>\n                           <span class=\"sm\">返帮钻{{flnav.rebate_num}}</span>\n                         </p>\n                       </div>\n                     </li>\n                   </ul>\n                 </div>\n                 <div class=\"rmph\">\n                   <div class=\"rmphead\">\n                     热卖排行\n                   </div>\n                   <ul>\n                     <li v-for=\"rm in firstlist.app_beautyhotsale.floorData.intoDataList\" v-link=\"{name: 'detail', params: {id: acnav.product_id}}\">\n                       <p class=\"pimg\">\n                         <img v-bind:src=\"rm.photourl\" alt=\"\" />\n                       </p>\n                       <p class=\"xxpp\">\n                        <span>{{rm.copyWriter}}</span>\n                         <span>\n                           {{rm.title}}\n                         </span>\n                       </p>\n                       <p class=\"pprice\">\n                         <span class=\"newprice\">￥{{rm.low_price}}</span>\n                          <span class=\"oldprice\">￥{{rm.high_price}}</span>\n                        <span class=\"rmphsm\">{{rm.price_discount}}</span>\n                       </p>\n                     </li>\n                   </ul>\n                 </div>\n                 <div class=\"xpsj\">\n                   <div class=\"xpsjhead\">\n                     新品上架\n                   </div>\n                   <ul>\n                     <li v-for=\"new in app_newup\" v-link=\"{name: 'detail', params: {id: acnav.product_id}}\">\n                       <p>\n                         <img v-bind:src=\"new.photourl\" alt=\"\" />\n                       </p>\n                       <p class=\"smm\">\n                         <span>{{new.title}}</span>\n                         <span class=\"pricem\">￥{{new.salePrice}}</span>\n                       </p>\n                     </li>\n                   </ul>\n                 </div>\n                 <div class=\"footzkf\">\n                <img v-bind:src=\"imgArrow\"/>\n                <span>上拉加载更多...</span>\n              </div>\n              </div>\n\n            </section>\n          </div>\n          <div class=\"swiper-slide\">\n\n            <section id=\"index-scroll2\" class=\"scrollbox\">\n\n              <div class=\"bodybox\">\n                <div class=\"bannerbox swiper-container\">\n                  <ul class=\"swiper-wrapper\" id=\"styleul\">\n\n                    <li class=\"swiper-slide\" v-for=\"imgb2 in homehaiwaibanner2\">\n                      <img v-bind:src=\"imgb2.picUrl\" alt=\"\" />\n                    </li>\n                  </ul>\n                </div>\n\n                <nav class=\"bannernav\">\n                  <ul>\n                    <li v-for=\"bnav2 in homehaiwaifast2\">\n                      <img v-bind:src=\"bnav2.picUrl\" alt=\"\" />\n                      <span>{{bnav2.name}}</span>\n                    </li>\n                  </ul>\n                </nav>\n\n                 <div class=\"xpsj2\">\n                   <div class=\"xpsjhead\">\n                     <img v-bind:src=\"homehaiwaigoodsnav_12.picUrl\" alt=\"\" />\n                   </div>\n                   <ul>\n                     <li v-for=\"new2 in homehaiwaigoodslist_12\">\n                       <p>\n                         <img v-bind:src=\"new2.productImg\" alt=\"\" />\n                       </p>\n                       <p class=\"smm\">\n                         <span>{{new2.productTitle}}</span>\n                         <span class=\"pricem\">￥{{new2.salePrice}}</span>\n                       </p>\n                     </li>\n                   </ul>\n                 </div>\n                 <div class=\"xpsj2\">\n                   <div class=\"xpsjhead\">\n                     <img v-bind:src=\"homehaiwaigoodsnav_22.picUrl\" alt=\"\" />\n                   </div>\n                   <ul>\n                     <li v-for=\"new2 in ahomehaiwaigoodslist_22\">\n                       <p>\n                         <img v-bind:src=\"new2.productImg\" alt=\"\" />\n                       </p>\n                       <p class=\"smm\">\n                         <span>{{new2.productTitle}}</span>\n                         <span class=\"pricem\">￥{{new2.salePrice}}</span>\n                       </p>\n                     </li>\n                   </ul>\n                 </div>\n                 <div class=\"xpsj2\">\n                   <div class=\"xpsjhead\">\n                     <img v-bind:src=\"homehaiwaigoodsnav_32.picUrl\" alt=\"\" />\n                   </div>\n                   <ul>\n                     <li v-for=\"new2 in homehaiwaigoodslist_32\">\n                       <p>\n                         <img v-bind:src=\"new2.productImg\" alt=\"\" />\n                       </p>\n                       <p class=\"smm\">\n                         <span>{{new2.productTitle}}</span>\n                         <span class=\"pricem\">￥{{new2.salePrice}}</span>\n                       </p>\n                     </li>\n                   </ul>\n                 </div>\n                 <div class=\"xpsj2\">\n                   <div class=\"xpsjhead\">\n                     <img v-bind:src=\"homehaiwaigoodsnav_42.picUrl\" alt=\"\" />\n                   </div>\n                   <ul>\n                     <li v-for=\"new2 in homehaiwaigoodslist_42\">\n                       <p>\n                         <img v-bind:src=\"new2.productImg\" alt=\"\" />\n                       </p>\n                       <p class=\"smm\">\n                         <span>{{new2.productTitle}}</span>\n                         <span class=\"pricem\">￥{{new2.salePrice}}</span>\n                       </p>\n                     </li>\n                   </ul>\n                 </div>\n                 <div class=\"xpsj2\">\n                   <div class=\"xpsjhead\">\n                     <img v-bind:src=\"homehaiwaigoodsnav_52.picUrl\" alt=\"\" />\n                   </div>\n                   <ul>\n                     <li v-for=\"new2 in homehaiwaigoodslist_52\">\n                       <p>\n                         <img v-bind:src=\"new2.productImg\" alt=\"\" />\n                       </p>\n                       <p class=\"smm\">\n                         <span>{{new2.productTitle}}</span>\n                         <span class=\"pricem\">￥{{new2.salePrice}}</span>\n                       </p>\n                     </li>\n                   </ul>\n                 </div>\n              </div>\n\n            </section>\n          </div>\n          <div class=\"swiper-slide\">\n            <section id=\"index-scroll3\" class=\"scrollbox\">\n\n              <div class=\"bodybox\">\n                <div class=\"faxian\">\n                  <ul>\n                    <li v-for=\"new3 in homefaxian3\">\n                      <p>\n                        <img v-bind:src=\"new3.productImg\" alt=\"\" />\n                      </p>\n                      <p class=\"smm\">\n                        <span>{{new3.descriptionTitle}}</span>\n                        <span>{{new3.description}}</span>\n                        <span class=\"pricem\">\n                          <b>￥{{new3.productPrice}}</b>\n                          <b>我要买></b>\n                        </span>\n                      </p>\n                    </li>\n                  </ul>\n                </div>\n\n\n              </div>\n\n            </section>\n          </div>\n          <div class=\"swiper-slide\">\n\n            <section id=\"index-scroll4\" class=\"scrollbox\">\n\n              <div class=\"bodybox\">\n                <div class=\"bannerbox swiper-container\">\n                  <ul class=\"swiper-wrapper\" id=\"styleul\">\n\n                    <li class=\"swiper-slide\" v-for=\"imgb4 in homemeizhuangbanner4\">\n                      <img v-bind:src=\"imgb4.picUrl\" alt=\"\" />\n                    </li>\n                  </ul>\n                </div>\n\n                <nav class=\"bannernav\">\n                  <ul>\n                    <li v-for=\"bnav4 in homemeizhuangfast4\">\n                      <img v-bind:src=\"bnav4.picUrl\" alt=\"\" />\n                      <span>{{bnav4.name}}</span>\n                    </li>\n                  </ul>\n                </nav>\n\n                 <div class=\"xpsj2  cdymeizhuang\">\n                   <div class=\"xpsjhead\">\n                     <img v-bind:src=\"homemeizhuangnewpart4.picUrl\" alt=\"\" />\n                   </div>\n                   <ul>\n                     <li v-for=\"new4 in homemeizhuangbrandshow4\">\n                       <p>\n                         <img v-bind:src=\"new4.picUrl\" alt=\"\" />\n                       </p>\n\n                     </li>\n                   </ul>\n                 </div>\n                 <div class=\"xpsj2\">\n                   <div class=\"xpsjhead\">\n                     <img v-bind:src=\"homemeizhuangsalepart4.picUrl\" alt=\"\" />\n                   </div>\n                   <ul>\n                     <li v-for=\"new4 in homemeizhuangsalelist4\">\n                       <p>\n                         <img v-bind:src=\"new4.productImg\" alt=\"\" />\n                       </p>\n                       <p class=\"smm\">\n                         <span>{{new4.productTitle}}</span>\n                         <span class=\"pricem\">￥{{new4.salePrice}}</span>\n                       </p>\n                     </li>\n                   </ul>\n                 </div>\n                 <div class=\"xpsj2\">\n                   <div class=\"xpsjhead\">\n                     <img v-bind:src=\"homemeizhuangsalepart4.picUrl\" alt=\"\" />\n                   </div>\n                   <ul>\n                     <li v-for=\"new4 in homemeizhuangnewlist4\">\n                       <p>\n                         <img v-bind:src=\"new4.productImg\" alt=\"\" />\n                       </p>\n                       <p class=\"smm\">\n                         <span>{{new4.productTitle}}</span>\n                         <span class=\"pricem\">￥{{new4.salePrice}}</span>\n                       </p>\n                     </li>\n                   </ul>\n                 </div>\n\n\n\n\n              </div>\n\n            </section>\n          </div>\n        </div>\n      </div>\n    </section>\n</div>\n";

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(24)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\category.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(25)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-27da15fe/category.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _actions=__webpack_require__(17);// <template>
	//   <div class="category-container">
	//     <div class="category-search">
	//       <input type="text" id="keyword" class="search_input" placeholder="你要的，就在这里~">
	//     </div>
	//     <nav>
	//       <ul id="swiper-nav">
	//         <li v-for="nav in categoryNav" v-on:click="switchSwiper($index)" v-bind:class="curIndex == $index ? 'active': ''">{{nav}}</li>
	//       </ul>
	//     </nav>
	//     <section>
	//       <div class="navwrapper">
	//         <div v-bind:id="curIndex == 0 ? 'flex': 'hidden'" class="category-fenlei">
	//           <div class="fenlei-top" >
	//             <ul id="swiper-fenlei" class="swiper-wrapper">
	//               <li v-for="fenlei in categoryTwoNav" v-on:click="switchSwiperFenlei($index)" v-bind:class="fenleiIndex == $index ? 'swiper-slide activefenlei': 'swiper-slide'">{{fenlei}}</li>
	//             </ul>
	//           </div>
	//           <section>
	//             <div class="swiper-container" id="fenlei-swiper">
	//               <div class="swiper-wrapper">
	//                 <ul class="swiper-slide" v-for="ul in list">
	//                   <li v-for="li in ul.subCategoryList" >
	//                     <!-- {{li.displayName}} -->
	//                     <img v-bind:src="li.icon" alt="" v-link="{name: 'list', params: {id: li.url}}"/>
	//                     <ul>
	//                       <li v-for="tit in li.subCategoryList" v-bind:class="tit.bgColor == ''? '':'cheng'" v-link="{name: 'list', params: {id: tit.url}}">{{tit.displayName}}</li>
	//                     </ul>
	//                   </li>
	//                 </ul>
	//               </div>
	//             </div>
	//           </section>
	//         </div>
	//         <ul v-bind:id="curIndex == 1 ? 'block': 'hidden'">
	//           <li v-for="pinpai in list">
	//             <p>
	//               {{pinpai.displayName}}
	//             </p>
	//             <div>
	//                 <img v-for="img in pinpai.brandList" v-bind:src="img.logo" alt="" v-link="{name: 'list', params: {id: pinpai.url}}"/>
	//             </div>
	//           </li>
	//         </ul>
	//       </div>
	//     </section>
	//   </div>
	// </template>
	//
	// <script>
	// var mySwiper = null;
	var fenleiSwiper=null;var fenlihuakuai=null;exports.default={vuex:{actions:{change:_actions.tabChanger}},data:function data(){return{path:'/list',list:[],curIndex:0,fenleiIndex:0,categoryNav:['分类','品牌'],categoryTwoNav:['美妆个护','母婴专区','服饰鞋包','家居生活','食品保健','数码家电']};},ready:function ready(){this.change(1);var that=this;fenlihuakuai=new Swiper(".fenlei-top",{slidesPerView:'auto',paginationClickable:true});fenleiSwiper=new Swiper("#fenlei-swiper",{onSlideChangeStart:function onSlideChangeStart(){that.fenleiIndex=fenleiSwiper.activeIndex;}});this.$http.jsonp('http://k.b5m.com/api/goods-display?authCode=172ca9138968b5f3dd28a3d944f51caa&code=index_menu_main').then(function(res){console.log(res.data.val.categoryList);that.list=res.data.val.categoryList;for(var i=0;i<that.list.length;i++){for(var j=0;j<that.list[i].subCategoryList.length;j++){that.list[i].subCategoryList[j].url=that.list[i].subCategoryList[j].url.split('-')[1];for(var k=0;k<that.list[i].subCategoryList[j].subCategoryList.length;k++){that.list[i].subCategoryList[j].subCategoryList[k].url=that.list[i].subCategoryList[j].subCategoryList[k].url.split('-')[1];if(that.list[i].subCategoryList[j].subCategoryList[k].url==undefined){that.list[i].subCategoryList[j].subCategoryList[k].url="13429,24301,13480,15404,15401";}// console.log(that.list[i].subCategoryList[j].subCategoryList[k].url);
	}}that.list[i].url=that.list[i].subCategoryList[0].url;// console.log(that.list[i].subCategoryList[0].url);
	}setTimeout(function(){fenleiSwiper.update();},500);//list[i].displayName
	//list[i].brandList[i].logo
	//list[i].subCategoryList[i].displayName
	//list[i].subCategoryList[i].icon
	//list[i].subCategoryList[i].subCategoryList[j].displayName
	//list[i].subCategoryList[i].subCategoryList[j].fid  27  37
	},function(res){console.log("err");});},methods:{switchSwiper:function switchSwiper(index){this.curIndex=index;},switchSwiperFenlei:function switchSwiperFenlei(index){this.fenleiIndex=index;fenleiSwiper.slideTo(index);}}};// </script>
	/* generated by vue-loader */

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"category-container\">\n  <div class=\"category-search\">\n    <input type=\"text\" id=\"keyword\" class=\"search_input\" placeholder=\"你要的，就在这里~\">\n  </div>\n  <nav>\n    <ul id=\"swiper-nav\">\n      <li v-for=\"nav in categoryNav\" v-on:click=\"switchSwiper($index)\" v-bind:class=\"curIndex == $index ? 'active': ''\">{{nav}}</li>\n    </ul>\n  </nav>\n  <section>\n    <div class=\"navwrapper\">\n      <div v-bind:id=\"curIndex == 0 ? 'flex': 'hidden'\" class=\"category-fenlei\">\n        <div class=\"fenlei-top\" >\n          <ul id=\"swiper-fenlei\" class=\"swiper-wrapper\">\n            <li v-for=\"fenlei in categoryTwoNav\" v-on:click=\"switchSwiperFenlei($index)\" v-bind:class=\"fenleiIndex == $index ? 'swiper-slide activefenlei': 'swiper-slide'\">{{fenlei}}</li>\n          </ul>\n        </div>\n        <section>\n          <div class=\"swiper-container\" id=\"fenlei-swiper\">\n            <div class=\"swiper-wrapper\">\n              <ul class=\"swiper-slide\" v-for=\"ul in list\">\n                <li v-for=\"li in ul.subCategoryList\" >\n                  <!-- {{li.displayName}} -->\n                  <img v-bind:src=\"li.icon\" alt=\"\" v-link=\"{name: 'list', params: {id: li.url}}\"/>\n                  <ul>\n                    <li v-for=\"tit in li.subCategoryList\" v-bind:class=\"tit.bgColor == ''? '':'cheng'\" v-link=\"{name: 'list', params: {id: tit.url}}\">{{tit.displayName}}</li>\n                  </ul>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </section>\n      </div>\n      <ul v-bind:id=\"curIndex == 1 ? 'block': 'hidden'\">\n        <li v-for=\"pinpai in list\">\n          <p>\n            {{pinpai.displayName}}\n          </p>\n          <div>\n              <img v-for=\"img in pinpai.brandList\" v-bind:src=\"img.logo\" alt=\"\" v-link=\"{name: 'list', params: {id: pinpai.url}}\"/>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </section>\n</div>\n";

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(27)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\social.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(28)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-1980c2a0/social.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});// <template>
	//   <div class="social-container">
	//     <header>
	//       海贝社区
	//     </header>
	//     <nav>
	//       <ul id="swiper-nav">
	//         <li v-for="nav in socialNav" v-on:click="switchSwiper($index)" v-bind:class="curIndex == $index ? 'active': ''">{{nav}}</li>
	//       </ul>
	//     </nav>
	//     <section>
	//       <div class="swiper-container" id="socila-swiper">
	//         <div class="swiper-wrapper">
	//           <ul class="swiper-slide">
	//             <li v-for="user in socialData.list">
	//               <p class="socialUser">
	//                 {{user.nickName==""?"帮五用户":user.nickName}}
	//               </p>
	//               <span>{{user.addTime}}</span>
	//               <p class="socialJingxuan">
	//                 编辑精选
	//               </p>
	//               <img class="zhanshi" v-bind:src="user.images" alt="" />
	//               <p class="socialContent">
	//                 {{user.content}}
	//               </p>
	//               <div class="socialProduct" v-link="{name: 'detail', params: {id: user.docId}}">
	//                 <img v-bind:src="socialData.productData[user.docId].img" alt="" />
	//                 <span>{{socialData.productData[user.docId].title}}</span>
	//               </div>
	//             </li>
	//           </ul>
	//           <ul class="swiper-slide"></ul>
	//         </div>
	//       </div>
	//     </section>
	//   </div>
	// </template>
	// <script>
	var mySwiper=null;exports.default={data:function data(){return{socialData:[],curIndex:0,socialNav:['精选','圈子']};},ready:function ready(){var that=this;mySwiper=new Swiper("#socila-swiper",{onSlideChangeStart:function onSlideChangeStart(){that.curIndex=mySwiper.activeIndex;}});this.$http.get('/mock/social.json').then(function(res){that.socialData=res.data.data;for(var i=0;i<res.data.data.list.length;i++){var aDate=new Date(that.socialData.list[i].addTime);that.socialData.list[i].images=that.socialData.list[i].images.split('"')[3];that.socialData.list[i].addTime=aDate.getFullYear()+"-"+(aDate.getMonth()+1)+"-"+aDate.getDate();}});},methods:{switchSwiper:function switchSwiper(index){this.curIndex=index;mySwiper.slideTo(index);}}};// </script>
	/* generated by vue-loader */

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"social-container\">\n  <header>\n    海贝社区\n  </header>\n  <nav>\n    <ul id=\"swiper-nav\">\n      <li v-for=\"nav in socialNav\" v-on:click=\"switchSwiper($index)\" v-bind:class=\"curIndex == $index ? 'active': ''\">{{nav}}</li>\n    </ul>\n  </nav>\n  <section>\n    <div class=\"swiper-container\" id=\"socila-swiper\">\n      <div class=\"swiper-wrapper\">\n        <ul class=\"swiper-slide\">\n          <li v-for=\"user in socialData.list\">\n            <p class=\"socialUser\">\n              {{user.nickName==\"\"?\"帮五用户\":user.nickName}}\n            </p>\n            <span>{{user.addTime}}</span>\n            <p class=\"socialJingxuan\">\n              编辑精选\n            </p>\n            <img class=\"zhanshi\" v-bind:src=\"user.images\" alt=\"\" />\n            <p class=\"socialContent\">\n              {{user.content}}\n            </p>\n            <div class=\"socialProduct\" v-link=\"{name: 'detail', params: {id: user.docId}}\">\n              <img v-bind:src=\"socialData.productData[user.docId].img\" alt=\"\" />\n              <span>{{socialData.productData[user.docId].title}}</span>\n            </div>\n          </li>\n        </ul>\n        <ul class=\"swiper-slide\"></ul>\n      </div>\n    </div>\n  </section>\n</div>\n";

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(30)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\cart.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(31)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-1f97bfa3/cart.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _actions=__webpack_require__(17);exports.default={vuex:{actions:{change:_actions.tabChanger}},data:function data(){return{styleclass:1,checkedNames:[],sumzj:0,numzj:0,divshhi:0,yhlist:[],cartlist:[{id:2654180,minipicture:'http://upm01.b5m.com/70b7b27fe8342834bc1ea52e95fbaada',title:'日本 Mitsuei 三津荣洗洁精橘子味270ml/瓶',sku:'颜色分类:白椿化妆品净含量:洗发水500ml+护发素500ml',price:120,number:1,source:'帮海贝',isf:true},{id:2654180,minipicture:'http://upm01.b5m.com/70b7b27fe8342834bc1ea52e95fbaada',title:'日本 Mitsuei 三津荣洗洁精橘子味270ml/瓶',sku:'颜色分类:白椿化妆品净含量:洗发水500ml+护发素500ml',price:120,number:1,source:'帮海贝',isf:true},{id:2654180,minipicture:'http://upm01.b5m.com/70b7b27fe8342834bc1ea52e95fbaada',title:'日本 Mitsuei 三津荣洗洁精橘子味270ml/瓶',sku:'颜色分类:白椿化妆品净含量:洗发水500ml+护发素500ml',price:120,number:1,source:'帮海贝',isf:true},{id:2654180,minipicture:'http://upm01.b5m.com/70b7b27fe8342834bc1ea52e95fbaada',title:'日本 Mitsuei 三津荣洗洁精橘子味270ml/瓶',sku:'颜色分类:白椿化妆品净含量:洗发水500ml+护发素500ml',price:120,number:1,source:'日本直邮',isf:true}]};},ready:function ready(){this.change(3);this.getshop();var that=this;this.$http.get('/rest/yhlists').then(function(res){console.log("通过代理得到mock数据");console.log(res);},function(){console.log("err");});new IScroll('#cart-scroll',{mouseWheel:true,//PC端的鼠标事件也监听，方便PC端调试
	click:true//允许点击事件
	});},methods:{sign:function sign(){this.divshhi=1;},setdiv:function setdiv(){this.divshhi=0;},setCookie:function setCookie(name,value,days){var date=new Date();date.setDate(date.getDate()+days);document.cookie=name+"="+value+";expires="+date;},getCookie:function getCookie(cookieName){var cookieValue="";var strCookies=document.cookie;var arrCookies=strCookies.split("; ");for(var i=0;i<arrCookies.length;i++){var arrItem=arrCookies[i].split("=");if(arrItem[0]==cookieName){cookieValue=arrItem[1];}}return cookieValue;},njj:function njj(e){if(this.cartlist[e].number==0){this.cartlist.splice(e,1);}else{this.cartlist[e].number--;}console.log(JSON.stringify(this.cartlist));var datavalue=JSON.stringify(this.cartlist);this.setCookie("cartshop",datavalue,30);},nadd:function nadd(i){this.cartlist[i].number++;var datavalue=JSON.stringify(this.cartlist);this.setCookie("cartshop",datavalue,30);},removeCookie:function removeCookie(j){console.log("remove");this.cartlist.splice(j,1);var datavalue=JSON.stringify(this.cartlist);this.setCookie("cartshop",datavalue,30);},getshop:function getshop(){var products=this.getCookie("cartshop");var arrProducts=[];if(products.length>0){arrProducts=JSON.parse(products);//把字符串转化成数组，每个数组元素为productInfo=new Object()，这样一个对象
	}this.cartlist=arrProducts;},test:function test(){this.getzj();},getzj:function getzj(){var that=this;var sum=0;var num=0;setTimeout(function(){console.log(that.checkedNames.length);for(var j=0;j<that.checkedNames.length;j++){var y=that.checkedNames[j];num+=that.cartlist[y].number;sum+=that.cartlist[y].price*that.cartlist[y].number;}that.numzj=num;that.sumzj=sum;console.log(num);console.log(sum);},500);}}};// </script>
	/* generated by vue-loader */// <template>
	//   <div class="cart-container">
	//     <header>
	//       购物车
	//     </header>
	//     <section class="cartbody" id="cart-scroll">
	//       <div class="cart">
	//         <ul>
	//           <li v-for="item in cartlist">
	//             <div class="head">
	//               <span>
	//                 {{item.source}}
	//               </span>
	//               <span>编辑</span>
	//             </div>
	//             <p class="cartleft">
	//             <input type="checkbox"  v-model="checkedNames" value="{{$index}}" v-on:click="test">
	//               {{item.isf}}
	//               <img v-bind:src="item.minipicture" alt="" />
	//             </p>
	//             <div class="cartright">
	//               <p>
	//                 {{item.title}}
	//               </p>
	//               <p class="hide sx">
	//                 <span>{{item.sku}}</span>
	//               </p>
	//               <p class="pricecart">
	//                 <span class="newprice">￥{{item.price}}</span>
	//                 <span class="number">X{{item.number}}</span>
	//               </p>
	//               <p class="show bj">
	//                 <span>
	//                   <b v-on:click="njj($index)">-</b>
	//                   <b>{{item.number}}</b>
	//                   <b v-on:click="nadd($index)">+</b>
	//                 </span>
	//                 <span class="debtn" v-on:click="removeCookie($index)">
	//                   删除
	//                 </span>
	//               </p>
	//             </div>
	//           </li>
	//
	//
	//         </ul>
	//         <div class="sub">
	//           <div class="right">
	//             <p>
	//               <span>商品总计</span>
	//               <span>￥{{numzj}}</span>
	//             </p>
	//             <p>
	//               <span>活动优惠</span>
	//               <span>￥5</span>
	//             </p>
	//             <p>
	//               <span>总价（不含运费）</span>
	//               <span>￥{{sumzj}}</span>
	//             </p>
	//           </div>
	//         </div>
	//
	//
	//
	//         <div class="js">
	//           <span>已选商品<b>{{numzj}}</b>件</span>
	//           <span v-on:click="sign">结算</span>
	//
	//           <!-- <button type="button" name="button" v-on:click="getzj">得到cookie</button> -->
	//         </div>
	//       </div>
	//     </section>
	//
	//     <div class="yo-dialog yo-dialog-test"  v-bind:class="divshhi==1 ? 'show':'hide'">
	//
	//       <div class="bd">
	//         <p>请先登录</p>
	//       </div>
	//       <footer class="ft">
	//         <button class="yo-btn yo-btn-dialog yo-btn-l" v-on:click="setdiv" v-link="{path:'/login'}">点此登录</button>
	//         <button class="yo-btn yo-btn-dialog yo-btn-l" v-on:click="setdiv">下次再来</button>
	//       </footer>
	//     </div>
	//     <div class="yo-mask" v-bind:class="divshhi==1 ? 'show':'hide'"></div>
	//
	//   </div>
	//
	// </template>
	// <script>
	// var Vue = require('../libs/vue.js');
	// var VueResource = require('../libs/vue-resource.js');
	// Vue.use(VueResource);

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"cart-container\">\n  <header>\n    购物车\n  </header>\n  <section class=\"cartbody\" id=\"cart-scroll\">\n    <div class=\"cart\">\n      <ul>\n        <li v-for=\"item in cartlist\">\n          <div class=\"head\">\n            <span>\n              {{item.source}}\n            </span>\n            <span>编辑</span>\n          </div>\n          <p class=\"cartleft\">\n          <input type=\"checkbox\"  v-model=\"checkedNames\" value=\"{{$index}}\" v-on:click=\"test\">\n            {{item.isf}}\n            <img v-bind:src=\"item.minipicture\" alt=\"\" />\n          </p>\n          <div class=\"cartright\">\n            <p>\n              {{item.title}}\n            </p>\n            <p class=\"hide sx\">\n              <span>{{item.sku}}</span>\n            </p>\n            <p class=\"pricecart\">\n              <span class=\"newprice\">￥{{item.price}}</span>\n              <span class=\"number\">X{{item.number}}</span>\n            </p>\n            <p class=\"show bj\">\n              <span>\n                <b v-on:click=\"njj($index)\">-</b>\n                <b>{{item.number}}</b>\n                <b v-on:click=\"nadd($index)\">+</b>\n              </span>\n              <span class=\"debtn\" v-on:click=\"removeCookie($index)\">\n                删除\n              </span>\n            </p>\n          </div>\n        </li>\n\n\n      </ul>\n      <div class=\"sub\">\n        <div class=\"right\">\n          <p>\n            <span>商品总计</span>\n            <span>￥{{numzj}}</span>\n          </p>\n          <p>\n            <span>活动优惠</span>\n            <span>￥5</span>\n          </p>\n          <p>\n            <span>总价（不含运费）</span>\n            <span>￥{{sumzj}}</span>\n          </p>\n        </div>\n      </div>\n\n\n\n      <div class=\"js\">\n        <span>已选商品<b>{{numzj}}</b>件</span>\n        <span v-on:click=\"sign\">结算</span>\n\n        <!-- <button type=\"button\" name=\"button\" v-on:click=\"getzj\">得到cookie</button> -->\n      </div>\n    </div>\n  </section>\n\n  <div class=\"yo-dialog yo-dialog-test\"  v-bind:class=\"divshhi==1 ? 'show':'hide'\">\n\n    <div class=\"bd\">\n      <p>请先登录</p>\n    </div>\n    <footer class=\"ft\">\n      <button class=\"yo-btn yo-btn-dialog yo-btn-l\" v-on:click=\"setdiv\" v-link=\"{path:'/login'}\">点此登录</button>\n      <button class=\"yo-btn yo-btn-dialog yo-btn-l\" v-on:click=\"setdiv\">下次再来</button>\n    </footer>\n  </div>\n  <div class=\"yo-mask\" v-bind:class=\"divshhi==1 ? 'show':'hide'\"></div>\n\n</div>\n\n";

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(33)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\list.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(34)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-6f690621/list.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});// <template>
	//   <div class="list-container">
	//     <div class="list-top">
	//       <div class="category-search">
	//         <input type="text" id="keyword" class="search_input" placeholder="你要的，就在这里~">
	//       </div>
	//       <div class="list-min-top">
	//         <div :class="current ==0?'activediv':''" v-on:click="xiaoliang">
	//           销量
	//         </div>
	//         <div :class="current ==1?'activediv':''" v-on:click="jiage">
	//           价格
	//         </div>
	//         <div :class="current ==2?'activediv':''" v-on:click="time">
	//           上架时间
	//         </div>
	//       </div>
	//     </div>
	//     <ul class="list-goods">
	//       <section id="index-scroll" class="scrollbox">
	//         <div class="list-div ">
	//           <div class="listshuaxin" style="display:none;">
	//             <img v-bind:src="imgArrow"/>
	//             <span>下拉刷新...</span>
	//           </div>
	//           <!-- v-link="{name: 'detail', params: {id: goods.id}}" -->
	//           <li v-for="goods in list" v-link="{name: 'detail', params: {id:[ goods.id,$route.params.id]}}">
	//             <img v-bind:src="goods.img" alt="" />
	//             <p>
	//               {{goods.title}}
	//             </p>
	//             <span>￥{{goods.salePrice}}</span>
	//           </li>
	//           <div class="loadmorelist" style="display:none;">
	//             <img v-bind:src="imgArrow"/>
	//             <span>上拉加载更多...</span>
	//           </div>
	//         </div>
	//       </section>
	//     </ul>
	//
	//   </div>
	// </template>
	//
	// <script>
	var fenleiSwiper=null;var fenlihuakuai=null;exports.default={data:function data(){return{page:1,current:0,list:[],curIndex:0,fenleiIndex:0,maxScrolly:0,categoryNav:['分类','品牌'],categoryTwoNav:['美妆个护','母婴专区','服饰鞋包','家居生活','食品保健','数码家电']};},ready:function ready(){var that=this;this.$http.get('http://www.woline.top/weixinlittlepro/cxx.php?categoryId='+that.$route.params.id+'&page=1&sortDesc=1&sortType=1').then(function(res){that.list=JSON.parse(res.data).records;console.log(that.list.length);that.myscroll();},function(res){console.log("err");});},methods:{myscroll:function myscroll(bool){if(bool){this.maxScrolly=0;}var that=this;var myScroll=new IScroll('#index-scroll',{probeType:3,mouseWheel:true,click:true,onBeforeScrollStart:null,disableMouse:true,disablePointer:true,freeScroll:true});myScroll.refresh();var head=$('.listshuaxin img');head.parent().css('display','none');var foot=$('.loadmorelist img');foot.parent().find("span").html("上拉加载更多...");myScroll.on('scroll',function(){var yz=this.y,maxY=this.maxScrolly-yz;if(yz>10){head.parent().css(' display',' block');}});myScroll.on('scrollEnd',function(){if(this.yz>=-35&&this.yz<0){myScroll.scrollTo(0,-35);}else if(this.y>=0){head.attr('src','./images/ajax-loader.gif');myScroll.scrollTo(0,-35);}var self=this;var maxY=this.maxScrollY-this.y;if(maxY>-35&&maxY<0){myScroll.scrollTo(0,self.maxScrollY);// foot.removeClass('down')
	}else if(maxY>=0){foot.parent().css(' display',' block');foot.attr('src','./images/ajax-loader.gif');//ajax上拉加载数据
	that.page++;var url='http://www.woline.top/weixinlittlepro/cxx.php?categoryId='+that.$route.params.id+'&page='+that.page+'&sortDesc=1&sortType='+(that.current+1);that.$http.get(url).then(function(res){console.log(JSON.parse(res.data).records);if(JSON.parse(res.data).records==undefined){foot.parent().find("span").html("已经到底部了");foot.attr('src','');}else{that.list=that.list.concat(JSON.parse(res.data).records);foot.attr('src','./images/arrow.png');Vue.nextTick(function(){console.log(self.maxScrollY);myScroll.scrollTo(0,self.maxScrollY);myScroll.refresh();});}});};});},xiaoliang:function xiaoliang(){this.current=0;this.page=1;var that=this;this.$http.get('http://www.woline.top/weixinlittlepro/cxx.php?categoryId='+that.$route.params.id+'&page=1&sortDesc=1&sortType=1').then(function(res){console.log(JSON.parse(res.data));that.list=JSON.parse(res.data).records;that.myscroll(true);},function(res){console.log("err");});},jiage:function jiage(){this.page=1;this.current=1;var that=this;this.$http.get('http://www.woline.top/weixinlittlepro/cxx.php?categoryId='+that.$route.params.id+'&page=1&sortDesc=1&sortType=2').then(function(res){console.log(JSON.parse(res.data));that.list=JSON.parse(res.data).records;that.myscroll(true);},function(res){console.log("err");});},time:function time(){this.page=1;this.current=2;var that=this;this.$http.get('http://www.woline.top/weixinlittlepro/cxx.php?categoryId='+that.$route.params.id+'&page=1&sortDesc=1&sortType=3').then(function(res){console.log(JSON.parse(res.data));that.list=JSON.parse(res.data).records;that.myscroll(true);},function(res){console.log("err");});}}};// </script>
	/* generated by vue-loader */

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"list-container\">\n  <div class=\"list-top\">\n    <div class=\"category-search\">\n      <input type=\"text\" id=\"keyword\" class=\"search_input\" placeholder=\"你要的，就在这里~\">\n    </div>\n    <div class=\"list-min-top\">\n      <div :class=\"current ==0?'activediv':''\" v-on:click=\"xiaoliang\">\n        销量\n      </div>\n      <div :class=\"current ==1?'activediv':''\" v-on:click=\"jiage\">\n        价格\n      </div>\n      <div :class=\"current ==2?'activediv':''\" v-on:click=\"time\">\n        上架时间\n      </div>\n    </div>\n  </div>\n  <ul class=\"list-goods\">\n    <section id=\"index-scroll\" class=\"scrollbox\">\n      <div class=\"list-div \">\n        <div class=\"listshuaxin\" style=\"display:none;\">\n          <img v-bind:src=\"imgArrow\"/>\n          <span>下拉刷新...</span>\n        </div>\n        <!-- v-link=\"{name: 'detail', params: {id: goods.id}}\" -->\n        <li v-for=\"goods in list\" v-link=\"{name: 'detail', params: {id:[ goods.id,$route.params.id]}}\">\n          <img v-bind:src=\"goods.img\" alt=\"\" />\n          <p>\n            {{goods.title}}\n          </p>\n          <span>￥{{goods.salePrice}}</span>\n        </li>\n        <div class=\"loadmorelist\" style=\"display:none;\">\n          <img v-bind:src=\"imgArrow\"/>\n          <span>上拉加载更多...</span>\n        </div>\n      </div>\n    </section>\n  </ul>\n\n</div>\n";

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(36)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\my.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(37)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-102aaaef/my.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 36 */
/***/ function(module, exports) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});// <template>
	//   <div class="my-container" id="my-scroll">
	//     <div >
	//     <div class="bg">
	// <header>
	//   <div><i class="iconfont">&#xe64b;</i></div>
	// </header>
	// <nav>
	// <div>
	//   <span v-link="{ path: '/login' }">登录<em>|</em>注册</span>
	// </div>
	// </nav>
	// </div>
	// <section>
	//   <div class="booking">
	//     <div class="dingdan"><p><i class="iconfont">&#xe613;</i>我的订单</p></div>
	//       <div class="alldg"><span>查看全部订单<i class="iconfont">&#xe630;</i></span></div>
	//   </div>
	//   <div class="category">
	//   <ul>
	//     <li v-for="tab in catelist">
	//       <i class="iconfont">{{{tab.icon}}}</i>
	//         <b>{{tab.name}}</b>
	//     </li>
	//   </ul>
	//   </div>
	//   <div class="youhui">
	//     <ul>
	//       <li v-for="item in nav">
	//         <div><img v-bind:src="item.img" ></div>
	//           <b>{{item.title}}</b>
	//       </li>
	//     </ul>
	//     <ul>
	//       <li v-for="item in nav1">
	//         <div><img v-bind:src="item.img" ></div>
	//           <b>{{item.title}}</b>
	//       </li>
	//     </ul>
	//     <ul>
	//       <li v-for="item in nav2">
	//         <div><img v-bind:src="item.img" ></div>
	//           <b>{{item.title}}</b>
	//       </li>
	//     </ul>
	//   </div>
	//   <div class="contus">
	//     <div class="kefu"><p>客服电话</p></div>
	//       <div class="phone"><span>400-085-0505<i class="iconfont">&#xe630;</i></span></div>
	//   </div>
	//   </div>
	// </section>
	// </div>
	//   </div>
	// </template>
	// <script>
	exports.default={data:function data(){return{catelist:[{icon:'&#xe638;',name:'待付款'},{icon:'&#xe61e;',name:'待发货'},{icon:'&#xe603;',name:'待收货'},{icon:'&#xe689;',name:'待评价'}],nav:[{"title":'\u4F18\u60E0\u5238',"img":"http:\/\/cdnweb.b5m.com\/web\/cmsphp\/static_image\/e201afe4a75ee6cdfc08931e242221be.png","url":"http:\/\/bhb.b5m.com\/user\/couponList"},{"title":'\u6536\u85CF',"img":"http:\/\/cdnweb.b5m.com\/web\/cmsphp\/static_image\/4e1830c54cfdb80e13315c4a3cb1158a.png","url":"http:\/\/bhb.b5m.com\/user\/favourite"},{"title":'\u5E2E\u94BB',"img":"http:\/\/cdnweb.b5m.com\/web\/cmsphp\/static_image\/c566e424e8a8578a48317af2a6d89efa.png","url":"http:\/\/bhb.b5m.com\/user\/SuperBzHistory"}],nav1:[{"title":'\u62FC\u56E2',"img":"http:\/\/cdnweb.b5m.com\/web\/cmsphp\/static_image\/8df3725652ed177fa6762f8b795d1b2e.png","url":"b5m:\/\/groupbuying\/myGroup"},{"title":'\u4E00\u5143\u8D2D',"img":"http:\/\/cdnweb.b5m.com\/web\/cmsphp\/static_image\/5cce9001744b1b10bfe4d37f2597c9f5.png","url":"b5m:\/\/exchange\/orderList"},{"title":'\u5206\u4EAB\u8D5A\u7EA2\u5305',"img":"http:\/\/cdnweb.b5m.com\/web\/cmsphp\/static_image\/ad980c737fca1f978746e176ecf7fef0.png","url":"b5m:\/\/hd\/giveCoupon"}],nav2:[{"title":'\u6536\u8D27\u5730\u5740',"img":"http:\/\/cdnweb.b5m.com\/web\/cmsphp\/static_image\/b2fbe2a5bbacaaa78167a43186ff4629.png","url":"http:\/\/bhb.b5m.com\/address\/address"},{"title":'\u5728\u7EBF\u5BA2\u670D',"img":"http:\/\/cdnweb.b5m.com\/web\/cmsphp\/static_image\/4416e320110c98e54a53a4f1712d36b7.png","url":"http:\/\/user\/onlineservice"},{"title":'\u6652\u5355',"img":"http:\/\/cdnweb.b5m.com\/web\/cmsphp\/static_image\/1e4ce75b48f9e6e010fc4f468847e4d0.png","url":"b5m:\/\/baskorder\/index"}]};},ready:function ready(){setTimeout(function(){new IScroll('#my-scroll',{preventDefault:false});},500);}};// </script>
	/* generated by vue-loader */

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"my-container\" id=\"my-scroll\">\n    <div >\n    <div class=\"bg\">\n<header>\n  <div><i class=\"iconfont\">&#xe64b;</i></div>\n</header>\n<nav>\n<div>\n  <span v-link=\"{ path: '/login' }\">登录<em>|</em>注册</span>\n</div>\n</nav>\n</div>\n<section>\n  <div class=\"booking\">\n    <div class=\"dingdan\"><p><i class=\"iconfont\">&#xe613;</i>我的订单</p></div>\n      <div class=\"alldg\"><span>查看全部订单<i class=\"iconfont\">&#xe630;</i></span></div>\n  </div>\n  <div class=\"category\">\n  <ul>\n    <li v-for=\"tab in catelist\">\n      <i class=\"iconfont\">{{{tab.icon}}}</i>\n        <b>{{tab.name}}</b>\n    </li>\n  </ul>\n  </div>\n  <div class=\"youhui\">\n    <ul>\n      <li v-for=\"item in nav\">\n        <div><img v-bind:src=\"item.img\" ></div>\n          <b>{{item.title}}</b>\n      </li>\n    </ul>\n    <ul>\n      <li v-for=\"item in nav1\">\n        <div><img v-bind:src=\"item.img\" ></div>\n          <b>{{item.title}}</b>\n      </li>\n    </ul>\n    <ul>\n      <li v-for=\"item in nav2\">\n        <div><img v-bind:src=\"item.img\" ></div>\n          <b>{{item.title}}</b>\n      </li>\n    </ul>\n  </div>\n  <div class=\"contus\">\n    <div class=\"kefu\"><p>客服电话</p></div>\n      <div class=\"phone\"><span>400-085-0505<i class=\"iconfont\">&#xe630;</i></span></div>\n  </div>\n  </div>\n</section>\n</div>\n  </div>\n";

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_template__ = __webpack_require__(39)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-62d3e0f6/login.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"login-container\">\n  <header>\n    <ul>\n      <li v-link=\"{ path: '/index/backmy' }\" class=\"iconfont\">&#xf0292;</li>\n      <li>登陆</li>\n      <li></li>\n    </ul>\n  </header>\n  <section>\n    <nav>\n      <img src=\"http://cdn04.b5mcdn.com/bhbcdn/wap-main/build_wap/htmlImg/login/login_banner.png\">\n    </nav>\n    <div class=\"logintxt\">\n      <div class=\"input\">\n          <i class=\"iconfont\">&#xe6fa;</i>\n          <input type=\"username\" placeholder=\"请输入手机号码/邮箱\">\n      </div>\n\n        <div class=\"input\">\n            <i class=\"iconfont\">&#xe674;</i>\n            <input type=\"password\" placeholder=\"请输入密码\">\n        </div>\n        <div class=\"input\">\n            <div class=\"login\">登陆</div>\n            <div class=\"forget\">\n              <span class=\"lspan\" v-link=\"{ path: '/goreg' }\">立即注册</span>\n                <span class=\"rspan\">找回密码？</span>\n            </div>\n        </div>\n    </div>\n  </section>\n\n</div>\n";

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(41)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\register.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(42)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-6ce10c26/register.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 41 */
/***/ function(module, exports) {

	// <template>
	//   <div class="register-container">
	//     <header>
	//       <ul>
	//         <li v-link="{ path: '/backlogin' }" class="iconfont">&#xf0292;</li>
	//         <li>登陆</li>
	//         <li></li>
	//       </ul>
	//     </header>
	//     <section>
	//       <div class="logintxt">
	//         <div class="input">
	//             <input type="username" placeholder="请输入手机号码">
	//         </div>
	//         <div class="input">
	//             <input type="text" placeholder="请输入验证码">
	//             <img class="checkcode" src="http://ucenter.b5m.com/imageValidateCode.htm">
	//             <div class="text_wrap">
	//                         <span class="not_clear">
	//                             看不清
	//                         </span>
	//                         <span class="again">
	//                             换一张
	//                         </span>
	//                 </div>
	//         </div>
	//
	//         <div class="input">
	//             <input class="message" type="text" placeholder="请输入验证码" disabled="disabled">
	//            <input id="getCode" type="button"  value="获取验证码">
	//         </div>
	// <div class="input">
	//   <input type="password" placeholder="请输入密码" disabled="disabled">
	// </div>
	//
	// <div class="protocol">
	//   <input id="protocol" type="checkbox" checked="checked">
	//   <label for="protocol">我已阅读并同意<a id="toProtocol" href="javascript:void(0);">《帮海贝用户注册协议》</a></label>
	// </div>
	// <input type="button" id="registerBtn"  value="注册">
	//       </div>
	//     </section>
	//
	//   </div>
	// </template>
	// <script>
	// </script>
	/* generated by vue-loader */"use strict";

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"register-container\">\n    <header>\n      <ul>\n        <li v-link=\"{ path: '/backlogin' }\" class=\"iconfont\">&#xf0292;</li>\n        <li>登陆</li>\n        <li></li>\n      </ul>\n    </header>\n    <section>\n      <div class=\"logintxt\">\n        <div class=\"input\">\n            <input type=\"username\" placeholder=\"请输入手机号码\">\n        </div>\n        <div class=\"input\">\n            <input type=\"text\" placeholder=\"请输入验证码\">\n            <img class=\"checkcode\" src=\"http://ucenter.b5m.com/imageValidateCode.htm\">\n            <div class=\"text_wrap\">\n                        <span class=\"not_clear\">\n                            看不清\n                        </span>\n                        <span class=\"again\">\n                            换一张\n                        </span>\n                </div>\n        </div>\n\n        <div class=\"input\">\n            <input class=\"message\" type=\"text\" placeholder=\"请输入验证码\" disabled=\"disabled\">\n           <input id=\"getCode\" type=\"button\"  value=\"获取验证码\">\n        </div>\n<div class=\"input\">\n  <input type=\"password\" placeholder=\"请输入密码\" disabled=\"disabled\">\n</div>\n\n<div class=\"protocol\">\n  <input id=\"protocol\" type=\"checkbox\" checked=\"checked\">\n  <label for=\"protocol\">我已阅读并同意<a id=\"toProtocol\" href=\"javascript:void(0);\">《帮海贝用户注册协议》</a></label>\n</div>\n<input type=\"button\" id=\"registerBtn\"  value=\"注册\">\n      </div>\n    </section>\n\n  </div>\n";

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(44)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\details.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(46)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-74cec60f/details.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _commonUtil=__webpack_require__(45);var _commonUtil2=_interopRequireDefault(_commonUtil);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var myswiper=null;// <template>
	//   <div class="details-container">
	//     <header>
	//         <ul>
	//             <li v-link="{path:'/index/category'}" class="iconfont">&#xf0292;</li>
	//             <li>商品详情</li>
	//             <li class="iconfont">&#xe605;</li>
	//         </ul>
	//     </header>
	//     <section >
	//       <div class="shadow" v-bind:class="{'active':flag}" v-on:click="disapper">
	//         <div class="plane" v-bind:class="{'disblock':flag,'disnone':flagtwo}" v-on:click.stop="here">
	//           <div class="property-wrap">
	//             <div class="property-wrap-img">
	//               <img v-bind:src="list.picture">
	//             </div>
	//             <div class="property-wrap-righ">
	//             <div class="price">￥{{list.price}}</div>
	//             <div class="property-wrap-top-righ-select">{{list.title}}</div>
	//         </div>
	//         <div class="property-wrap-select">
	//                 <div class="property-wrap-select-every" parameter="">
	//                     <h3 class="property-wrap-select-tit">规格</h3>
	//                     <div class="property-wrap-select-list">
	//                       <input type="button" class="select-element" v-bind:class="{'selected':chose}" v-on:click="turn"  value="常规">
	//                     </div>
	//                 </div>
	//             <aside class="stuff-num cf">
	//             <!--<span class="fl t">购买数量</span>-->
	//             <span class="fr num">
	//                 <em class="sub fl" sub="" v-on:click="sub">-</em>
	//                 <input class="in fl" type="text" readonly="" value="{{num}}">
	//                 <em class="add fl" add="" v-on:click="add">+</em>
	//             </span>
	//             <div style="clear:both"></div>
	//             </aside>
	//             </div>
	//           </div>
	//         </div>
	//       </div>
	//     <div class="holepage" id="details-scroll">
	//         <div>
	//             <!-- Swiper -->
	//             <div class="swiper-container" id="image-page">
	//                 <div class="swiper-wrapper" id="wrapper">
	//
	//                     <div  class="swiper-slide" v-for="item in img" ><img v-bind:src="item"/></div>
	//
	//                     <!-- <div class="swiper-slide">Slide 2</div>
	//                     <div class="swiper-slide">Slide 3</div>
	//                     <div class="swiper-slide">Slide 2</div>
	//                     <div class="swiper-slide">Slide 3</div> -->
	//                 </div>
	//                 <!-- Add Pagination -->
	//                 <div class="swiper-pagination"></div>
	//             </div>
	//             <!-- Swiper over  -->
	//             <div class="goods-details">
	//                 <div class="topline">
	//                     <div class="lf">
	//                         <p><em class="price">￥{{list.price}}</em><em class="oldprice">￥{{list.price_avg}}</em><span class="express">{{list.postage_text}}</span></p>
	//                     </div>
	//                     <div class="lr">
	//                         <div><i class="love"></i></div>
	//                         <div><i class="share"></i></div>
	//                     </div>
	//                 </div>
	//                 <div class="goods_detail_tit_wrap">
	//                     <img class="goods-detail-flag" src="http://upm01.b5m.com/85559ac5b7e29bbfce5659c7d7cdee79" alt="">
	//                     <h3 class="goods-detail-tit">{{list.title}}</h3>
	//                 </div>
	//                 <div class="shopname">
	//                   <div><img v-bind:src="list.small_img_url" alt="" /><span>{{list.shop_name}}</span></div>
	//                   <div><i>{{list.brand_name}}</i></div>
	//                 </div>
	//                 <div class="send_desc">{{list.send_desc}}</div>
	//                 <div class="subtitle">{{list.sub_title}}</div>
	//             </div>
	//             <a class="select-goods-cat" v-on:click="toggle">
	//                 <span class="fl">请选择商品属性</span>
	//                 <i class="common-bg fr"></i>
	//             </a>
	//             <div id="content-tab-box" class="content-tab-box">
	//                 <span class="content-tab-box-goods" v-for="nav in indexNav" v-on:click="switchSwiper($index)" v-bind:class="curIndex == $index ? 'cur': ''">{{nav}}
	//   <i class="common-bg"></i>
	//         </span>
	//             </div>
	//             <div class="swiper-container" id="detail-page">
	//                 <div class="swiper-wrapper">
	//             <div class="content-detail swiper-slide">
	//                 <div class="content-detail-wrap">
	//                     <div class="detail-text">
	//                         <p>【产地】:日本</p>
	//                         <p>【包装方式】:包装</p>
	//                         <p>【保质期】:1年</p>
	//                     </div>
	//                     <img src="http://upm01.b5m.com/c29080715d4cfc9c17ad7b9da6e00085?imageView/2/w/750/q/70" />
	//                     <img src="http://upm01.b5m.com/c89b71e2e66e2528d21b5eaf8e137070?imageView/2/w/750/q/70" />
	//                     <img src="http://upm01.b5m.com/aec8bac1b2f048fe5c6af9cdc2bf2c7a?imageView/2/w/750/q/70" />
	//                     <img src="http://upm01.b5m.com/2f5ac8b43b68cad6a8fe985082763a81?imageView/2/w/750/q/70" />
	//                     <img src="http://upm01.b5m.com/e1ed1be2ad7770d0b3edb2bb537f9477?imageView/2/w/750/q/70" />
	//                     <img src="http://upm01.b5m.com/4e865de6b66828b5edf1ea3f9b3f4cbf?imageView/2/w/750/q/70" />
	//                 </div>
	//             </div>
	//             <div class="swiper-slide">
	//               <div class="pinglun">该商品暂无评论</div>
	//             </div>
	//
	//           </div>
	//       </div>
	//
	//         </div>
	// </div>
	//     </section>
	//     <footer>
	//         <div v-on:click="buynow">立即购买</div>
	//         <div v-on:click="addcart">加入购物车</div>
	//         <div v-link="{ path: '/index/cart' }"><img src="http://cdn04.b5mcdn.com/bhbcdn/wap/img/cart_icon_off.png"><span v-bind:class="{'havedata':cartnumflag}">{{cartnum}}</span></div>
	//     </footer>
	// </div>
	//
	// </template>
	// <script>
	var myScroll=null;exports.default={data:function data(){return{num:1,cartnum:'',cartnumflag:false,list:'',img:'',details:'',flagrepeat:false,htmls:'',curIndex:0,flag:false,flagtwo:true,chose:false,once:true,cart:'',docid:'',tocxx:'',indexNav:['商品详情','买家评论'],shit:function shit(){console.log('test,you rae click!');},setCookie:function setCookie(name,value,days){var date=new Date();date.setDate(date.getDate()+days);document.cookie=name+"="+value+";expires="+date;},getCookie:function getCookie(cookieName){var cookieValue="";var strCookies=document.cookie;var arrCookies=strCookies.split("; ");for(var i=0;i<arrCookies.length;i++){var arrItem=arrCookies[i].split("=");if(arrItem[0]==cookieName){cookieValue=arrItem[1];}}return cookieValue;}};},ready:function ready(){var _this=this;var that=this;var url=null;var cxx=this.$route.params.id.split(",");console.log(cxx);this.docid=cxx[0];for(var xx=1;xx<cxx.length-1;xx++){this.tocxx+=cxx[xx]+",";}this.tocxx+=cxx[xx];console.log(this.tocxx);console.log("++++++++++++++++++++++++++++++++++++++++");console.log(this.$route.params);console.log(this.$route.params.id[1]);console.log("++++++++++++++++++++++++++++++++++++++++");// this.$http.get('/rest/korea/searchcate.html?categoryId=316%2C315%2C14212&page=1'2651849,2654180)
	//服务器端开启了跨域不在需要端口转发
	this.$http.get('http://www.woline.top/weixinlittlepro/agency.php?tid='+this.docid).then(function(res){// console.log(JSON.parse(res.data));
	_this.img=JSON.parse(res.data).banner_obj.banners;// url = JSON.parse(res.data).banner_obj.section[0].url;
	_this.list=JSON.parse(res.data).data;// this.datails = JSON.parse(res.data).data;
	// url = url.replace(/\\/g, '');
	// url = '/rast' + url.replace(/http:\/\/bhb.b5m.com/, '');
	//console.log(url);
	//二次请求详情页
	// this.$http.get('/rest/weixinlittlepro/cxx.php?url=' + url)
	//     .then((res) => {
	//         this.htmls = res.data;
	//         console.log(res.data);
	//
	//     })
	Vue.nextTick(function(){_commonUtil2.default.isAllLoaded('#details-scroll',function(){new IScroll('#details-scroll',{click:true});});var swiper=new Swiper('#image-page',{pagination:'.swiper-pagination',observer:true,//修改swiper自己或子元素时，自动初始化swiper
	observeParents:true//修改swiper的父元素时，自动初始化swiper
	});myswiper=new Swiper('#detail-page',{onSlideChangeStart:function onSlideChangeStart(){that.curIndex=myswiper.activeIndex;}});});});var cookies=this.getCookie('cartshop');var string=cookies.trim();if(string!=""){var jsoncookie=JSON.parse(cookies);if(jsoncookie.length>0){this.cartnum=jsoncookie.length;this.cartnumflag=true;}else{this.cartnum='';this.cartnumflag=false;}}},methods:{switchSwiper:function switchSwiper(index){this.curIndex=index;myswiper.slideTo(index);this.shit();},toggle:function toggle(){this.flag=~this.flag;this.flagtwo=~this.flagtwo;console.log("this.flag:"+this.flag);},disapper:function disapper(){this.flag=~this.flag;this.flagtwo=~this.flagtwo;console.log("this.flag:"+this.flag);},here:function here(){},sub:function sub(){if(this.num<=1){this.num=1;}else{this.num--;}},add:function add(){this.num++;},turn:function turn(){this.chose=~this.chose;// console.log(this.chose);
	},buynow:function buynow(){},addcart:function addcart(){if(this.chose){this.cart={id:this.list.docid,minipicture:this.list.picture,title:this.list.title,sku:this.list.postage_text,price:this.list.price,number:this.num,source:this.list.source,isf:true};var cookies=this.getCookie('cartshop');var string=cookies.trim();if(string==""){console.log("no data");var jsonfirst='['+JSON.stringify(this.cart)+']';this.setCookie('cartshop',jsonfirst,7200);this.cartnumflag=true;this.cartnum++;}else{console.log("have data");var jsoncookie=JSON.parse(cookies);for(var i=0;i<jsoncookie.length;i++){if(jsoncookie[i].id==this.list.docid){// console.log(jsoncookie[i].id + "--" + this.list.docid + "-" + i);
	// jsoncookie.splice(i, 1, this.cart);
	// var stringsone = JSON.stringify(jsoncookie);
	// this.setCookie('cartshop', stringsone, 7200);
	// this.toggle();
	console.log('你已经添加过此商品！');this.chose=false;this.toggle();this.flagrepeat=false;}else{this.flagrepeat=true;}// else {
	//     console.log('no no repeat');
	//     jsoncookie.push(this.cart);
	//     var stringsone = JSON.stringify(jsoncookie);
	//     this.setCookie('cartshop', stringsone, 7200);
	// }
	}if(this.flagrepeat){console.log('no no repeat');jsoncookie.push(this.cart);var stringsone=JSON.stringify(jsoncookie);this.setCookie('cartshop',stringsone,7200);this.flagrepeat=false;this.cartnum++;console.log('你添成功！');this.chose=false;this.toggle();}// console.log(jsoncookie);
	}}else{if(!this.once){console.log("请选择商品属性！");}if(this.once){this.toggle();this.once=false;console.log(1);}}}}};// </script>
	// t> }
	// </script>
	// t>
	/* generated by vue-loader */

/***/ },
/* 45 */
/***/ function(module, exports) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var commonUtil={isAllLoaded:function isAllLoaded(scope,cb){var t_img;// 定时器
	var isLoad=true;// 控制变量
	// 判断图片加载状况，加载完成后回调
	return isImgLoad(cb);// 判断图片加载的函数
	function isImgLoad(callback){// 查找所有图片，迭代处理
	$(scope).find('img').each(function(){// 找到为0就将isLoad设为false，并退出each
	if(this.height===0){isLoad=false;return false;}});// 为true，没有发现为0的。加载完毕
	if(isLoad){clearTimeout(t_img);// 清除定时器
	// 回调函数
	callback(scope);// 为false，因为找到了没有加载完成的图，将调用定时器递归
	}else{isLoad=true;t_img=setTimeout(function(){isImgLoad(callback);// 递归扫描
	},500);// 我这里设置的是500毫秒就扫描一次，可以自己调整
	}}},myScroll:function myScroll(){var that=this;Vue.directive('scroll',function(value){if(value){that.isAllLoaded(value,function(value){new IScroll(value);});}});}};exports.default=commonUtil;

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"details-container\">\n    <header>\n        <ul>\n            <li v-link=\"{path:'/index/category'}\" class=\"iconfont\">&#xf0292;</li>\n            <li>商品详情</li>\n            <li class=\"iconfont\">&#xe605;</li>\n        </ul>\n    </header>\n    <section >\n      <div class=\"shadow\" v-bind:class=\"{'active':flag}\" v-on:click=\"disapper\">\n        <div class=\"plane\" v-bind:class=\"{'disblock':flag,'disnone':flagtwo}\" v-on:click.stop=\"here\">\n          <div class=\"property-wrap\">\n            <div class=\"property-wrap-img\">\n              <img v-bind:src=\"list.picture\">\n            </div>\n            <div class=\"property-wrap-righ\">\n            <div class=\"price\">￥{{list.price}}</div>\n            <div class=\"property-wrap-top-righ-select\">{{list.title}}</div>\n        </div>\n        <div class=\"property-wrap-select\">\n                <div class=\"property-wrap-select-every\" parameter=\"\">\n                    <h3 class=\"property-wrap-select-tit\">规格</h3>\n                    <div class=\"property-wrap-select-list\">\n                      <input type=\"button\" class=\"select-element\" v-bind:class=\"{'selected':chose}\" v-on:click=\"turn\"  value=\"常规\">\n                    </div>\n                </div>\n            <aside class=\"stuff-num cf\">\n            <!--<span class=\"fl t\">购买数量</span>-->\n            <span class=\"fr num\">\n                <em class=\"sub fl\" sub=\"\" v-on:click=\"sub\">-</em>\n                <input class=\"in fl\" type=\"text\" readonly=\"\" value=\"{{num}}\">\n                <em class=\"add fl\" add=\"\" v-on:click=\"add\">+</em>\n            </span>\n            <div style=\"clear:both\"></div>\n            </aside>\n            </div>\n          </div>\n        </div>\n      </div>\n    <div class=\"holepage\" id=\"details-scroll\">\n        <div>\n            <!-- Swiper -->\n            <div class=\"swiper-container\" id=\"image-page\">\n                <div class=\"swiper-wrapper\" id=\"wrapper\">\n\n                    <div  class=\"swiper-slide\" v-for=\"item in img\" ><img v-bind:src=\"item\"/></div>\n\n                    <!-- <div class=\"swiper-slide\">Slide 2</div>\n                    <div class=\"swiper-slide\">Slide 3</div>\n                    <div class=\"swiper-slide\">Slide 2</div>\n                    <div class=\"swiper-slide\">Slide 3</div> -->\n                </div>\n                <!-- Add Pagination -->\n                <div class=\"swiper-pagination\"></div>\n            </div>\n            <!-- Swiper over  -->\n            <div class=\"goods-details\">\n                <div class=\"topline\">\n                    <div class=\"lf\">\n                        <p><em class=\"price\">￥{{list.price}}</em><em class=\"oldprice\">￥{{list.price_avg}}</em><span class=\"express\">{{list.postage_text}}</span></p>\n                    </div>\n                    <div class=\"lr\">\n                        <div><i class=\"love\"></i></div>\n                        <div><i class=\"share\"></i></div>\n                    </div>\n                </div>\n                <div class=\"goods_detail_tit_wrap\">\n                    <img class=\"goods-detail-flag\" src=\"http://upm01.b5m.com/85559ac5b7e29bbfce5659c7d7cdee79\" alt=\"\">\n                    <h3 class=\"goods-detail-tit\">{{list.title}}</h3>\n                </div>\n                <div class=\"shopname\">\n                  <div><img v-bind:src=\"list.small_img_url\" alt=\"\" /><span>{{list.shop_name}}</span></div>\n                  <div><i>{{list.brand_name}}</i></div>\n                </div>\n                <div class=\"send_desc\">{{list.send_desc}}</div>\n                <div class=\"subtitle\">{{list.sub_title}}</div>\n            </div>\n            <a class=\"select-goods-cat\" v-on:click=\"toggle\">\n                <span class=\"fl\">请选择商品属性</span>\n                <i class=\"common-bg fr\"></i>\n            </a>\n            <div id=\"content-tab-box\" class=\"content-tab-box\">\n                <span class=\"content-tab-box-goods\" v-for=\"nav in indexNav\" v-on:click=\"switchSwiper($index)\" v-bind:class=\"curIndex == $index ? 'cur': ''\">{{nav}}\n  <i class=\"common-bg\"></i>\n        </span>\n            </div>\n            <div class=\"swiper-container\" id=\"detail-page\">\n                <div class=\"swiper-wrapper\">\n            <div class=\"content-detail swiper-slide\">\n                <div class=\"content-detail-wrap\">\n                    <div class=\"detail-text\">\n                        <p>【产地】:日本</p>\n                        <p>【包装方式】:包装</p>\n                        <p>【保质期】:1年</p>\n                    </div>\n                    <img src=\"http://upm01.b5m.com/c29080715d4cfc9c17ad7b9da6e00085?imageView/2/w/750/q/70\" />\n                    <img src=\"http://upm01.b5m.com/c89b71e2e66e2528d21b5eaf8e137070?imageView/2/w/750/q/70\" />\n                    <img src=\"http://upm01.b5m.com/aec8bac1b2f048fe5c6af9cdc2bf2c7a?imageView/2/w/750/q/70\" />\n                    <img src=\"http://upm01.b5m.com/2f5ac8b43b68cad6a8fe985082763a81?imageView/2/w/750/q/70\" />\n                    <img src=\"http://upm01.b5m.com/e1ed1be2ad7770d0b3edb2bb537f9477?imageView/2/w/750/q/70\" />\n                    <img src=\"http://upm01.b5m.com/4e865de6b66828b5edf1ea3f9b3f4cbf?imageView/2/w/750/q/70\" />\n                </div>\n            </div>\n            <div class=\"swiper-slide\">\n              <div class=\"pinglun\">该商品暂无评论</div>\n            </div>\n\n          </div>\n      </div>\n\n        </div>\n</div>\n    </section>\n    <footer>\n        <div v-on:click=\"buynow\">立即购买</div>\n        <div v-on:click=\"addcart\">加入购物车</div>\n        <div v-link=\"{ path: '/index/cart' }\"><img src=\"http://cdn04.b5mcdn.com/bhbcdn/wap/img/cart_icon_off.png\"><span v-bind:class=\"{'havedata':cartnumflag}\">{{cartnum}}</span></div>\n    </footer>\n</div>\n\n";

/***/ },
/* 47 */
/***/ function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});var state={tabIndex:0};var mutations={CHANGETAB:function CHANGETAB(state,currentTabindex){state.tabIndex=currentTabindex;}};exports.default=new Vuex.Store({state:state,mutations:mutations});

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map