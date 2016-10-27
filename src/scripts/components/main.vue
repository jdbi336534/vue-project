<template>
  <div class="main-container">
      <header>
        <div class="searchleft">
          <span><img src="/images/sousu.png" alt="" /></span>
          <input type="text" name="name" value=""  class="seachtext" placeholder="你要的，就在这里~">
        </div>
       <div class="searchright">
         <img src="/images/M-saoyisao.png" alt="" />
       </div>
      </header>
      <nav id="wrapper">
          <ul id="swiper-nav headernav scroll">
              <li v-for="nav in indexNav" v-on:click="switchSwiper($index)" v-bind:class="curIndex == $index ? 'active': ''">{{nav}}</li>
          </ul>
      </nav>
      <section>
        <div class="swiper-container" id="index-swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <section id="index-scroll" class="scrollbox">

                <div class="bodybox">
                  <div class="headzkf">
                    <img v-bind:src="imgArrow"/>
                    <span>下拉刷新...</span>
                </div>
                  <div class="bannerbox swiper-container">
                    <ul class="swiper-wrapper" id="styleul">

                      <li class="swiper-slide" v-for="imgb in firstlist.home_banner.floorData.picList">
                        <img v-bind:src="imgb.picUrl" alt="" />
                      </li>
                    </ul>
                  </div>

                  <nav class="bannernav">
                    <ul>
                      <li v-for="bnav in firstlist.home_fast.floorData.picList">
                        <img v-bind:src="bnav.picUrl" alt="" />
                        <span>{{bnav.name}}</span>
                      </li>
                    </ul>
                  </nav>
                   <div class="sec1">
                    <div class="headshop">
                        <img v-bind:src="firstlist.home_activitybanner.floorData.picList[0].picUrl" alt="" />
                    </div>
                    <div class="shops1">
                      <header class="shop1head">
                        <span>图片</span>
                        <span>今日活动</span>
                      </header>
                      <ul>
                        <li>
                          <img v-bind:src="firstlist.app_activity.floorData.intoDataList.first.imgUrl" alt="" />
                        </li>
                        <li v-for="acnav in firstlist.app_activity.floorData.intoDataList.other"  v-link="{name: 'detail', params: {id: acnav.product_id}}">
                          <img v-bind:src="acnav.imgUrl" alt="" />
                        </li>

                      </ul>
                    </div>
                  </div>

                  <div class="sec2">
                    <div v-for="ptnav in firstlist.app_pintuan.floorData.intoDataList" v-link="{name: 'detail', params: {id: acnav.product_id}}">
                      <img v-bind:src="ptnav.tuan_pic" alt="" />
                      <p>
                        {{ptnav.title}}
                      </p>
                      <div class="xqbottom">
                        <span class="newprice">￥{{ptnav.tuan_price_buy}}</span>
                        <span class="oldprice">单买价￥{{ptnav.tuan_price_tax}}</span>
                        <button type="button" name="button" value="">去拼团</button>
                      </div>
                    </div>

                  </div>
                  <div class="sec3">
                    <div class="se3head">
                      今日专场
                    </div>
                    <div class="sec3box" v-for="jrzcnav in firstlist.app_spetoday.floorData.intoDataList.first">
                      <div class="shopsec3head">
                        <img v-bind:src="jrzcnav.imgUrl" alt="" />
                      </div>
                      <div class="sec3body" v-bind:class="jrzcnav.other_products.length==0 ? 'hide' : 'show'">
                        <nav class="sec3shopnav">
                          <ul id="wlscroll">
                            <li v-for="shopnav in jrzcnav.other_products" v-link="{name: 'detail', params: {id: acnav.product_id}}">
                              <img v-bind:src="shopnav.photourl" alt="" />
                              <p class="sec3p1">
                                {{shopnav.copyWriter}}
                              </p>
                              <p class="sec3p2">
                                <span class="newprice">￥{{shopnav.salePrice}}</span>
                                  <span class="oldprice">￥{{shopnav.high_price}}</span>
                              </p>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>

                  </div>
                   <div class="fltm">
                     <div class="se4head">
                       返利特卖
                     </div>
                     <ul>
                       <li v-for="flnav in firstlist.app_fanlitemai.floorData.productList" v-link="{name: 'detail', params: {id: acnav.product_id}}">
                         <div class="fltmleft">
                           <img v-bind:src="flnav.productImg" alt="" />
                         </div>
                         <div class="fltmright">
                           <p class="txtp">
                             {{flnav.productTitle}}
                           </p>
                           <p class="pricep">
                             <span class="newprice">￥{{flnav.salePrice}}</span>
                             <span class="oldprice">￥{{flnav.productPrice}}</span>
                             <span class="sm">返帮钻{{flnav.rebate_num}}</span>
                           </p>
                         </div>
                       </li>
                     </ul>
                   </div>
                   <div class="rmph">
                     <div class="rmphead">
                       热卖排行
                     </div>
                     <ul>
                       <li v-for="rm in firstlist.app_beautyhotsale.floorData.intoDataList" v-link="{name: 'detail', params: {id: acnav.product_id}}">
                         <p class="pimg">
                           <img v-bind:src="rm.photourl" alt="" />
                         </p>
                         <p class="xxpp">
                          <span>{{rm.copyWriter}}</span>
                           <span>
                             {{rm.title}}
                           </span>
                         </p>
                         <p class="pprice">
                           <span class="newprice">￥{{rm.low_price}}</span>
                            <span class="oldprice">￥{{rm.high_price}}</span>
                          <span class="rmphsm">{{rm.price_discount}}</span>
                         </p>
                       </li>
                     </ul>
                   </div>
                   <div class="xpsj">
                     <div class="xpsjhead">
                       新品上架
                     </div>
                     <ul>
                       <li v-for="new in app_newup" v-link="{name: 'detail', params: {id: acnav.product_id}}">
                         <p>
                           <img v-bind:src="new.photourl" alt="" />
                         </p>
                         <p class="smm">
                           <span>{{new.title}}</span>
                           <span class="pricem">￥{{new.salePrice}}</span>
                         </p>
                       </li>
                     </ul>
                   </div>
                   <div class="footzkf">
                  <img v-bind:src="imgArrow"/>
                  <span>上拉加载更多...</span>
                </div>
                </div>

              </section>
            </div>
            <div class="swiper-slide">

              <section id="index-scroll2" class="scrollbox">

                <div class="bodybox">
                  <div class="bannerbox swiper-container">
                    <ul class="swiper-wrapper" id="styleul">

                      <li class="swiper-slide" v-for="imgb2 in homehaiwaibanner2">
                        <img v-bind:src="imgb2.picUrl" alt="" />
                      </li>
                    </ul>
                  </div>

                  <nav class="bannernav">
                    <ul>
                      <li v-for="bnav2 in homehaiwaifast2">
                        <img v-bind:src="bnav2.picUrl" alt="" />
                        <span>{{bnav2.name}}</span>
                      </li>
                    </ul>
                  </nav>

                   <div class="xpsj2">
                     <div class="xpsjhead">
                       <img v-bind:src="homehaiwaigoodsnav_12.picUrl" alt="" />
                     </div>
                     <ul>
                       <li v-for="new2 in homehaiwaigoodslist_12">
                         <p>
                           <img v-bind:src="new2.productImg" alt="" />
                         </p>
                         <p class="smm">
                           <span>{{new2.productTitle}}</span>
                           <span class="pricem">￥{{new2.salePrice}}</span>
                         </p>
                       </li>
                     </ul>
                   </div>
                   <div class="xpsj2">
                     <div class="xpsjhead">
                       <img v-bind:src="homehaiwaigoodsnav_22.picUrl" alt="" />
                     </div>
                     <ul>
                       <li v-for="new2 in ahomehaiwaigoodslist_22">
                         <p>
                           <img v-bind:src="new2.productImg" alt="" />
                         </p>
                         <p class="smm">
                           <span>{{new2.productTitle}}</span>
                           <span class="pricem">￥{{new2.salePrice}}</span>
                         </p>
                       </li>
                     </ul>
                   </div>
                   <div class="xpsj2">
                     <div class="xpsjhead">
                       <img v-bind:src="homehaiwaigoodsnav_32.picUrl" alt="" />
                     </div>
                     <ul>
                       <li v-for="new2 in homehaiwaigoodslist_32">
                         <p>
                           <img v-bind:src="new2.productImg" alt="" />
                         </p>
                         <p class="smm">
                           <span>{{new2.productTitle}}</span>
                           <span class="pricem">￥{{new2.salePrice}}</span>
                         </p>
                       </li>
                     </ul>
                   </div>
                   <div class="xpsj2">
                     <div class="xpsjhead">
                       <img v-bind:src="homehaiwaigoodsnav_42.picUrl" alt="" />
                     </div>
                     <ul>
                       <li v-for="new2 in homehaiwaigoodslist_42">
                         <p>
                           <img v-bind:src="new2.productImg" alt="" />
                         </p>
                         <p class="smm">
                           <span>{{new2.productTitle}}</span>
                           <span class="pricem">￥{{new2.salePrice}}</span>
                         </p>
                       </li>
                     </ul>
                   </div>
                   <div class="xpsj2">
                     <div class="xpsjhead">
                       <img v-bind:src="homehaiwaigoodsnav_52.picUrl" alt="" />
                     </div>
                     <ul>
                       <li v-for="new2 in homehaiwaigoodslist_52">
                         <p>
                           <img v-bind:src="new2.productImg" alt="" />
                         </p>
                         <p class="smm">
                           <span>{{new2.productTitle}}</span>
                           <span class="pricem">￥{{new2.salePrice}}</span>
                         </p>
                       </li>
                     </ul>
                   </div>
                </div>

              </section>
            </div>
            <div class="swiper-slide">
              <section id="index-scroll3" class="scrollbox">

                <div class="bodybox">
                  <div class="faxian">
                    <ul>
                      <li v-for="new3 in homefaxian3">
                        <p>
                          <img v-bind:src="new3.productImg" alt="" />
                        </p>
                        <p class="smm">
                          <span>{{new3.descriptionTitle}}</span>
                          <span>{{new3.description}}</span>
                          <span class="pricem">
                            <b>￥{{new3.productPrice}}</b>
                            <b>我要买></b>
                          </span>
                        </p>
                      </li>
                    </ul>
                  </div>


                </div>

              </section>
            </div>
            <div class="swiper-slide">

              <section id="index-scroll4" class="scrollbox">

                <div class="bodybox">
                  <div class="bannerbox swiper-container">
                    <ul class="swiper-wrapper" id="styleul">

                      <li class="swiper-slide" v-for="imgb4 in homemeizhuangbanner4">
                        <img v-bind:src="imgb4.picUrl" alt="" />
                      </li>
                    </ul>
                  </div>

                  <nav class="bannernav">
                    <ul>
                      <li v-for="bnav4 in homemeizhuangfast4">
                        <img v-bind:src="bnav4.picUrl" alt="" />
                        <span>{{bnav4.name}}</span>
                      </li>
                    </ul>
                  </nav>

                   <div class="xpsj2  cdymeizhuang">
                     <div class="xpsjhead">
                       <img v-bind:src="homemeizhuangnewpart4.picUrl" alt="" />
                     </div>
                     <ul>
                       <li v-for="new4 in homemeizhuangbrandshow4">
                         <p>
                           <img v-bind:src="new4.picUrl" alt="" />
                         </p>

                       </li>
                     </ul>
                   </div>
                   <div class="xpsj2">
                     <div class="xpsjhead">
                       <img v-bind:src="homemeizhuangsalepart4.picUrl" alt="" />
                     </div>
                     <ul>
                       <li v-for="new4 in homemeizhuangsalelist4">
                         <p>
                           <img v-bind:src="new4.productImg" alt="" />
                         </p>
                         <p class="smm">
                           <span>{{new4.productTitle}}</span>
                           <span class="pricem">￥{{new4.salePrice}}</span>
                         </p>
                       </li>
                     </ul>
                   </div>
                   <div class="xpsj2">
                     <div class="xpsjhead">
                       <img v-bind:src="homemeizhuangsalepart4.picUrl" alt="" />
                     </div>
                     <ul>
                       <li v-for="new4 in homemeizhuangnewlist4">
                         <p>
                           <img v-bind:src="new4.productImg" alt="" />
                         </p>
                         <p class="smm">
                           <span>{{new4.productTitle}}</span>
                           <span class="pricem">￥{{new4.salePrice}}</span>
                         </p>
                       </li>
                     </ul>
                   </div>




                </div>

              </section>
            </div>
          </div>
        </div>
      </section>
  </div>
</template>

<script>
  import commonUtil from '../utils/common.util.js';
  var mySwiper = null;
import { tabChanger } from '../vuex/actions';
  export default {
    vuex:{
      actions: {
          change: tabChanger
        }
    },
    data() {
      return {
        page:3,

        firstlist: {},
        app_newup:[],

        list: [],

        homehaiwaibanner2:'',
        homehaiwaifast2:'',
        homehaiwaigoodslist_12:'',
        ahomehaiwaigoodslist_22:'',
        homehaiwaigoodslist_32:'',
        homehaiwaigoodslist_42:'',
        homehaiwaigoodslist_52:'',
        homehaiwaigoodsnav_12:'',
        homehaiwaigoodsnav_22:'',
        homehaiwaigoodsnav_32:'',
        homehaiwaigoodsnav_42:'',
        homehaiwaigoodsnav_52:'',

        homefaxian3:'',

        homemeizhuangbanner4:'',
        homemeizhuangbrand4:'',
        homemeizhuangbrandshow4:'',
        homemeizhuangfast4:'',
        homemeizhuangnewlist4:'',
        homemeizhuangnewpart4:'',
        homemeizhuangsalelist4:'',
        homemeizhuangsalepart4:'',

        imgArrow: './images/arrow.png',
        curIndex: 0,
        indexNav: ['推荐', '海外直购', '发现','美妆','母婴','健康生活','家居生活','服饰鞋包']
      }
    },

    ready: function() {
      this.change(0);
      var myscroll2=new IScroll("#wrapper",{
      	hScrollbar:false,
      	vScrollbar:false,
         mouseWheel: true,//PC端的鼠标事件也监听，方便PC端调试
         click: true,//允许点击事件
         eventPassthrough: true,//纵向滚动整个页面，横向滚动iscroll区域
         scrollX:true,//默认是纵向，横向需要设置scrollX

      });
      var that = this;
            this.$http.jsonp('http://bhb.b5m.com/api/korea?action=ActivityListFloor&activitySign=home_page_haiwai&is_assoc=1')
            .then((res)=>{
              console.log(res);
              this.homehaiwaibanner2 =res.data.val.homehaiwaibanner.floorData.picList;
              console.log(this.homehaiwaibanner2 );
              this.homehaiwaifast2=res.data.val.homehaiwaifast.floorData.picList;
              this.homehaiwaigoodslist_12=res.data.val.homehaiwaigoodslist_1.floorData.productList;
              this.ahomehaiwaigoodslist_22=res.data.val.homehaiwaigoodslist_2.floorData.productList;
              this.homehaiwaigoodslist_32=res.data.val.homehaiwaigoodslist_3.floorData.productList;
              this.homehaiwaigoodslist_42=res.data.val.homehaiwaigoodslist_4.floorData.productList;
              this.homehaiwaigoodslist_52=res.data.val.homehaiwaigoodslist_5.floorData.productList;
              this.homehaiwaigoodsnav_12 =res.data.val.homehaiwaigoodsnav_1.floorData;
              this.homehaiwaigoodsnav_22 =res.data.val.homehaiwaigoodsnav_2.floorData;
              this.homehaiwaigoodsnav_32 =res.data.val.homehaiwaigoodsnav_3.floorData;
              this.homehaiwaigoodsnav_42 =res.data.val.homehaiwaigoodsnav_4.floorData;
              this.homehaiwaigoodsnav_52 =res.data.val.homehaiwaigoodsnav_5.floorData;
            })
           this.$http.jsonp('http://bhb.b5m.com/api/korea?action=ActivityListFloor&activitySign=home_page_faxian&is_assoc=1')
           .then((res)=>{
             this.homefaxian3=res.data.val.homefaxian.floorData.intoDataList;
             console.log(this.homefaxian3);
           })
           this.$http.jsonp('http://bhb.b5m.com/api/korea?action=ActivityListFloor&activitySign=home_page_meizhuang&is_assoc=1')
           .then((res)=>{
             this.homemeizhuangbanner4=res.data.val.homemeizhuangbanner.floorData.picList;
             this.homemeizhuangbrand4=res.data.val.homemeizhuangbrand.floorData;
             this.homemeizhuangbrandshow4=res.data.val.homemeizhuangbrandshow.floorData.picList;
             this.homemeizhuangfast4=res.data.val.homemeizhuangfast.floorData.picList;
             this.homemeizhuangnewlist4=res.data.val.homemeizhuangnewlist.floorData.productList;
             this.homemeizhuangnewpart4=res.data.val.homemeizhuangnewpart.floorData;
             this.homemeizhuangsalelist4 =res.data.val.homemeizhuangsalelist.floorData.productList;
             this.homemeizhuangsalepart4 =res.data.val.homemeizhuangsalepart.floorData;
           });
          this.$http.jsonp('http://bhb.b5m.com/api/korea?action=ActivityListFloor&activitySign=home_page&is_assoc=1')
      .then((res)=>{
        console.log("----");
        console.log(res.data);
        console.log("----");
        this.firstlist=res.data.val;
        for(var xx=0;xx<res.data.val.home_banner.floorData.picList.length;xx++){

          console.log(res.data.val.home_banner.floorData.picList[xx].picUrl);
        }
        this.app_newup=res.data.val.app_newup.floorData.intoDataList;

        //DOM更新后，图片加载完，实例化IScroll

        Vue.nextTick(function(){
          commonUtil.isAllLoaded('#index-scroll',function(){
            var mySwiper2 = new Swiper('.bannerbox',{
                  autoplay : 1000,//可选选项，自动滑动
                  loop : true,//可选选项，开启循环
            });
            var myScroll= new IScroll('#index-scroll',{
                probeType: 3,
                mouseWheel: true,
                click:true,
                onBeforeScrollStart:null,
                disableMouse: true,
                disablePointer: true,
                freeScroll: true,
                //eventPassthrough:false

              });
              myScroll.scrollTo(0, -35);
              var head=$('.headzkf img'),
              topImgHasClass = head.hasClass('up');
              var foot=$('.footzkf img'),
              bottomImgHasClass = head.hasClass('down');
              myScroll.on('scroll',function(){
                var y=this.y,
                   maxY=this.maxScrolly-y;
                   if(y>=0){
                     !topImgHasClass && head.addClass('up');
                     return '';
                   }
                   if(maxY >=0){
                     !bottomImgHasClass && foot.addClass('down');
                     return '';
                   }
              });
              myScroll.on('scrollEnd',function(){
                if(this.y >= -35 && this.y < 0){
                  myScroll.scrollTo(0, -35);
                  head.removeClass('up');
                }else if(this.y >= 0){
                  head.attr('src', './images/ajax-loader.gif');
                };
                var self = this;
                var maxY = this.maxScrollY - this.y;
                if(maxY > -35 && maxY < 0){
                  myScroll.scrollTo(0, self.maxScrollY + 35);
                  foot.removeClass('down');
                }else if(maxY >= 0){
                  foot.attr('src', './images/ajax-loader.gif');
                  that.$http.jsonp('http://bhb.b5m.com/api/korea?action=ActivityModuleFloor&is_assoc=1&floorCode=app_newup&page='+that.page)
                  .then((res)=>{
                    console.log(1);
                    console.log(res);
                    console.log(res.data.val.app_newup);
                    that.app_newup=that.app_newup.concat(res.data.val.app_newup.floorData.intoDataList);
                    that.page=that.page+1;
                    foot.removeClass('down');
                    foot.attr('src', './images/arrow.png');
                    Vue.nextTick(function() {
                      myScroll.refresh();
                      myScroll.scrollTo(0, self.maxScrollY + 35);
                    });

                  });

                }


              });

              new IScroll('#index-scroll2');
              new IScroll('#index-scroll3');
              new IScroll('#index-scroll4');


          });
        });

        mySwiper = new Swiper("#index-swiper", {
          onSlideChangeStart: function(){
            that.curIndex = mySwiper.activeIndex;
          }
        });
        var myscroll3=new IScroll("#wlscroll",{
         hScrollbar:false,
         vScrollbar:false,
            mouseWheel: true,//PC端的鼠标事件也监听，方便PC端调试
           click: true,//允许点击事件
           eventPassthrough: true,//纵向滚动整个页面，横向滚动iscroll区域
           scrollX:true,//默认是纵向，横向需要设置scrollX
           freeScroll: true,
          // eventPassthrough:false
        });


      });


    },

    methods: {
      switchSwiper(index) {
        this.curIndex = index;
        mySwiper.slideTo(index);
      }
    }
  }
</script>
