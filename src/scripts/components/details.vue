<template>
  <div class="details-container">
    <header>
        <ul>
            <li v-link="{path:'/index/category'}" class="iconfont">&#xf0292;</li>
            <li>商品详情</li>
            <li class="iconfont">&#xe605;</li>
        </ul>
    </header>
    <section >
      <div class="shadow" v-bind:class="{'active':flag}" v-on:click="disapper">
        <div class="plane" v-bind:class="{'disblock':flag,'disnone':flagtwo}" v-on:click.stop="here">
          <div class="property-wrap">
            <div class="property-wrap-img">
              <img v-bind:src="list.picture">
            </div>
            <div class="property-wrap-righ">
            <div class="price">￥{{list.price}}</div>
            <div class="property-wrap-top-righ-select">{{list.title}}</div>
        </div>
        <div class="property-wrap-select">
                <div class="property-wrap-select-every" parameter="">
                    <h3 class="property-wrap-select-tit">规格</h3>
                    <div class="property-wrap-select-list">
                      <input type="button" class="select-element" v-bind:class="{'selected':chose}" v-on:click="turn"  value="常规">
                    </div>
                </div>
            <aside class="stuff-num cf">
            <!--<span class="fl t">购买数量</span>-->
            <span class="fr num">
                <em class="sub fl" sub="" v-on:click="sub">-</em>
                <input class="in fl" type="text" readonly="" value="{{num}}">
                <em class="add fl" add="" v-on:click="add">+</em>
            </span>
            <div style="clear:both"></div>
            </aside>
            </div>
          </div>
        </div>
      </div>
    <div class="holepage" id="details-scroll">
        <div>
            <!-- Swiper -->
            <div class="swiper-container" id="image-page">
                <div class="swiper-wrapper" id="wrapper">

                    <div  class="swiper-slide" v-for="item in img" ><img v-bind:src="item"/></div>

                    <!-- <div class="swiper-slide">Slide 2</div>
                    <div class="swiper-slide">Slide 3</div>
                    <div class="swiper-slide">Slide 2</div>
                    <div class="swiper-slide">Slide 3</div> -->
                </div>
                <!-- Add Pagination -->
                <div class="swiper-pagination"></div>
            </div>
            <!-- Swiper over  -->
            <div class="goods-details">
                <div class="topline">
                    <div class="lf">
                        <p><em class="price">￥{{list.price}}</em><em class="oldprice">￥{{list.price_avg}}</em><span class="express">{{list.postage_text}}</span></p>
                    </div>
                    <div class="lr">
                        <div><i class="love"></i></div>
                        <div><i class="share"></i></div>
                    </div>
                </div>
                <div class="goods_detail_tit_wrap">
                    <img class="goods-detail-flag" src="http://upm01.b5m.com/85559ac5b7e29bbfce5659c7d7cdee79" alt="">
                    <h3 class="goods-detail-tit">{{list.title}}</h3>
                </div>
                <div class="shopname">
                  <div><img v-bind:src="list.small_img_url" alt="" /><span>{{list.shop_name}}</span></div>
                  <div><i>{{list.brand_name}}</i></div>
                </div>
                <div class="send_desc">{{list.send_desc}}</div>
                <div class="subtitle">{{list.sub_title}}</div>
            </div>
            <a class="select-goods-cat" v-on:click="toggle">
                <span class="fl">请选择商品属性</span>
                <i class="common-bg fr"></i>
            </a>
            <div id="content-tab-box" class="content-tab-box">
                <span class="content-tab-box-goods" v-for="nav in indexNav" v-on:click="switchSwiper($index)" v-bind:class="curIndex == $index ? 'cur': ''">{{nav}}
  <i class="common-bg"></i>
        </span>
            </div>
            <div class="swiper-container" id="detail-page">
                <div class="swiper-wrapper">
            <div class="content-detail swiper-slide">
                <div class="content-detail-wrap">
                    <div class="detail-text">
                        <p>【产地】:日本</p>
                        <p>【包装方式】:包装</p>
                        <p>【保质期】:1年</p>
                    </div>
                    <img src="http://upm01.b5m.com/c29080715d4cfc9c17ad7b9da6e00085?imageView/2/w/750/q/70" />
                    <img src="http://upm01.b5m.com/c89b71e2e66e2528d21b5eaf8e137070?imageView/2/w/750/q/70" />
                    <img src="http://upm01.b5m.com/aec8bac1b2f048fe5c6af9cdc2bf2c7a?imageView/2/w/750/q/70" />
                    <img src="http://upm01.b5m.com/2f5ac8b43b68cad6a8fe985082763a81?imageView/2/w/750/q/70" />
                    <img src="http://upm01.b5m.com/e1ed1be2ad7770d0b3edb2bb537f9477?imageView/2/w/750/q/70" />
                    <img src="http://upm01.b5m.com/4e865de6b66828b5edf1ea3f9b3f4cbf?imageView/2/w/750/q/70" />
                </div>
            </div>
            <div class="swiper-slide">
              <div class="pinglun">该商品暂无评论</div>
            </div>

          </div>
      </div>

        </div>
</div>
    </section>
    <footer>
        <div v-on:click="buynow">立即购买</div>
        <div v-on:click="addcart">加入购物车</div>
        <div v-link="{ path: '/index/cart' }"><img src="http://cdn04.b5mcdn.com/bhbcdn/wap/img/cart_icon_off.png"><span v-bind:class="{'havedata':cartnumflag}">{{cartnum}}</span></div>
    </footer>
</div>

</template>
<script>
    import commonUtil from "../utils/commonUtil";
    var myswiper = null;
    var myScroll = null;

    export default {
        data() {
            return {
                num: 1,
                cartnum: '',
                cartnumflag: false,
                list: '',
                img: '',
                details: '',
                flagrepeat: false,
                htmls: '',
                curIndex: 0,
                flag: false,
                flagtwo: true,
                chose: false,
                once: true,
                cart: '',
                docid: '',
                tocxx: '',
                indexNav: ['商品详情', '买家评论'],
                shit: function() {
                    console.log('test,you rae click!')
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
                }

            }
        },

        ready: function() {
            var that = this;
            var url = null;
            var cxx = this.$route.params.id.split(",");
            console.log(cxx);
            this.docid = cxx[0];
            for (var xx = 1; xx < cxx.length - 1; xx++) {
                this.tocxx += cxx[xx] + ",";
            }
            this.tocxx += cxx[xx];
            console.log(this.tocxx);
            console.log("++++++++++++++++++++++++++++++++++++++++");
            console.log(this.$route.params);
            console.log(this.$route.params.id[1]);
            console.log("++++++++++++++++++++++++++++++++++++++++");
            // this.$http.get('/rest/korea/searchcate.html?categoryId=316%2C315%2C14212&page=1'2651849,2654180)
            //服务器端开启了跨域不在需要端口转发
            this.$http.get('http://www.woline.top/weixinlittlepro/agency.php?tid=' + this.docid)
                .then((res) => {
                    // console.log(JSON.parse(res.data));
                    this.img = JSON.parse(res.data).banner_obj.banners;
                    // url = JSON.parse(res.data).banner_obj.section[0].url;
                    this.list = JSON.parse(res.data).data;
                    // this.datails = JSON.parse(res.data).data;
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
                    Vue.nextTick(function() {
                        commonUtil.isAllLoaded('#details-scroll', function() {
                            new IScroll('#details-scroll', {
                                click: true
                            });
                        });
                        var swiper = new Swiper('#image-page', {
                            pagination: '.swiper-pagination',
                            observer: true, //修改swiper自己或子元素时，自动初始化swiper
                            observeParents: true //修改swiper的父元素时，自动初始化swiper
                        });
                        myswiper = new Swiper('#detail-page', {
                            onSlideChangeStart: function() {
                                that.curIndex = myswiper.activeIndex;
                            }
                        });

                    });

                });
            let cookies = this.getCookie('cartshop');
            var string = cookies.trim();

            if (string != "") {
                let jsoncookie = JSON.parse(cookies);
                if (jsoncookie.length > 0) {
                    this.cartnum = jsoncookie.length;
                    this.cartnumflag = true;
                } else {
                    this.cartnum = '';
                    this.cartnumflag = false;
                }
            }

        },
        methods: {
            switchSwiper(index) {
                this.curIndex = index;
                myswiper.slideTo(index);
                this.shit();
            },
            toggle() {

                this.flag = ~this.flag;
                this.flagtwo = ~this.flagtwo;
                console.log("this.flag:" + this.flag);
            },
            disapper() {
                this.flag = ~this.flag;
                this.flagtwo = ~this.flagtwo;
                console.log("this.flag:" + this.flag);
            },
            here() {},
            sub() {
                if (this.num <= 1) {
                    this.num = 1;
                } else {
                    this.num--;
                }

            },
            add() {
                this.num++;
            },
            turn() {
                this.chose = ~this.chose;
                // console.log(this.chose);
            },
            buynow() {

            },
            addcart() {
                if (this.chose) {
                    this.cart = {
                        id: this.list.docid,
                        minipicture: this.list.picture,
                        title: this.list.title,
                        sku: this.list.postage_text,
                        price: this.list.price,
                        number: this.num,
                        source: this.list.source,
                        isf: true
                    };
                    var cookies = this.getCookie('cartshop');
                    var string = cookies.trim();

                    if (string == "") {
                        console.log("no data");
                        var jsonfirst = '[' + JSON.stringify(this.cart) + ']';
                        this.setCookie('cartshop', jsonfirst, 7200);
                        this.cartnumflag = true;
                        this.cartnum++;

                    } else {
                        console.log("have data");
                        var jsoncookie = JSON.parse(cookies);
                        for (var i = 0; i < jsoncookie.length; i++) {
                            if (jsoncookie[i].id == this.list.docid) {
                                // console.log(jsoncookie[i].id + "--" + this.list.docid + "-" + i);
                                // jsoncookie.splice(i, 1, this.cart);
                                // var stringsone = JSON.stringify(jsoncookie);
                                // this.setCookie('cartshop', stringsone, 7200);
                                // this.toggle();
                                console.log('你已经添加过此商品！');
                                this.chose = false;
                                this.toggle();
                                this.flagrepeat = false;
                            } else {
                                this.flagrepeat = true;
                            }

                            // else {
                            //     console.log('no no repeat');
                            //     jsoncookie.push(this.cart);
                            //     var stringsone = JSON.stringify(jsoncookie);
                            //     this.setCookie('cartshop', stringsone, 7200);
                            // }
                        }
                        if (this.flagrepeat) {
                            console.log('no no repeat');
                            jsoncookie.push(this.cart);
                            var stringsone = JSON.stringify(jsoncookie);
                            this.setCookie('cartshop', stringsone, 7200);
                            this.flagrepeat = false;
                            this.cartnum++;
                            console.log('你添成功！');
                            this.chose = false;
                            this.toggle();

                        }
                        // console.log(jsoncookie);

                    }



                } else {
                    if (!this.once) {
                        console.log("请选择商品属性！");
                    }
                    if (this.once) {
                        this.toggle();
                        this.once = false;
                        console.log(1);
                    }


                }

            }
        }




    }
</script>
t> }
</script>
t>
