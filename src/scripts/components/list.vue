<template>
  <div class="list-container">
    <div class="list-top">
      <div class="category-search">
        <input type="text" id="keyword" class="search_input" placeholder="你要的，就在这里~">
      </div>
      <div class="list-min-top">
        <div :class="current ==0?'activediv':''" v-on:click="xiaoliang">
          销量
        </div>
        <div :class="current ==1?'activediv':''" v-on:click="jiage">
          价格
        </div>
        <div :class="current ==2?'activediv':''" v-on:click="time">
          上架时间
        </div>
      </div>
    </div>
    <ul class="list-goods">
      <section id="index-scroll" class="scrollbox">
        <div class="list-div ">
          <div class="listshuaxin" style="display:none;">
            <img v-bind:src="imgArrow"/>
            <span>下拉刷新...</span>
          </div>
          <!-- v-link="{name: 'detail', params: {id: goods.id}}" -->
          <li v-for="goods in list" v-link="{name: 'detail', params: {id:[ goods.id,$route.params.id]}}">
            <img v-bind:src="goods.img" alt="" />
            <p>
              {{goods.title}}
            </p>
            <span>￥{{goods.salePrice}}</span>
          </li>
          <div class="loadmorelist" style="display:none;">
            <img v-bind:src="imgArrow"/>
            <span>上拉加载更多...</span>
          </div>
        </div>
      </section>
    </ul>

  </div>
</template>

<script>
    var fenleiSwiper = null;
    var fenlihuakuai = null;

    export default {
        data() {
            return {
                page: 1,
                current: 0,
                list: [],
                curIndex: 0,
                fenleiIndex: 0,
                maxScrolly: 0,
                categoryNav: ['分类', '品牌'],
                categoryTwoNav: ['美妆个护', '母婴专区', '服饰鞋包', '家居生活', '食品保健', '数码家电']
            }
        },
        ready: function() {
            var that = this;
            this.$http.get('http://www.woline.top/weixinlittlepro/cxx.php?categoryId=' + that.$route.params.id + '&page=1&sortDesc=1&sortType=1')
                .then((res) => {
                    that.list = JSON.parse(res.data).records;
                    console.log(that.list.length);
                    that.myscroll();
                }, (res) => {
                    console.log("err");
                });
        },

        methods: {
            myscroll: function(bool) {
                if (bool) {
                    this.maxScrolly = 0;
                }
                var that = this;
                var myScroll = new IScroll('#index-scroll', {
                    probeType: 3,
                    mouseWheel: true,
                    click: true,
                    onBeforeScrollStart: null,
                    disableMouse: true,
                    disablePointer: true,
                    freeScroll: true
                });
                myScroll.refresh();
                var head = $('.listshuaxin img');
                head.parent().css('display', 'none');
                var foot = $('.loadmorelist img');
                foot.parent().find("span").html("上拉加载更多...");
                myScroll.on('scroll', function() {
                    var yz = this.y,
                        maxY = this.maxScrolly - yz;
                    if (yz > 10) {
                        head.parent().css(' display', ' block');
                    }
                });
                myScroll.on('scrollEnd', function() {
                    if (this.yz >= -35 && this.yz < 0) {
                        myScroll.scrollTo(0, -35);
                    } else if (this.y >= 0) {
                        head.attr('src', './images/ajax-loader.gif');
                        myScroll.scrollTo(0, -35);
                    }
                    var self = this;
                    var maxY = this.maxScrollY - this.y;

                    if (maxY > -35 && maxY < 0) {
                        myScroll.scrollTo(0, self.maxScrollY);
                        // foot.removeClass('down')
                    } else if (maxY >= 0) {
                        foot.parent().css(' display', ' block');
                        foot.attr('src', './images/ajax-loader.gif');
                        //ajax上拉加载数据
                        that.page++;
                        var url = 'http://www.woline.top/weixinlittlepro/cxx.php?categoryId=' + that.$route.params.id + '&page=' + that.page + '&sortDesc=1&sortType=' + (that.current + 1);

                        that.$http.get(url)
                            .then((res) => {
                                console.log(JSON.parse(res.data).records);
                                if (JSON.parse(res.data).records == undefined) {
                                    foot.parent().find("span").html("已经到底部了");
                                    foot.attr('src', '');
                                } else {
                                    that.list = that.list.concat(JSON.parse(res.data).records);
                                    foot.attr('src', './images/arrow.png');
                                    Vue.nextTick(function() {
                                        console.log(self.maxScrollY);
                                        myScroll.scrollTo(0, self.maxScrollY);
                                        myScroll.refresh();
                                    });
                                }

                            });
                    };

                });
            },
            xiaoliang: function() {
                this.current = 0;
                this.page = 1;
                var that = this;
                this.$http.get('http://www.woline.top/weixinlittlepro/cxx.php?categoryId=' + that.$route.params.id + '&page=1&sortDesc=1&sortType=1')
                    .then((res) => {
                        console.log(JSON.parse(res.data));
                        that.list = JSON.parse(res.data).records;
                        that.myscroll(true);
                    }, (res) => {
                        console.log("err");
                    });
            },
            jiage: function() {
                this.page = 1;
                this.current = 1;
                var that = this;
                this.$http.get('http://www.woline.top/weixinlittlepro/cxx.php?categoryId=' + that.$route.params.id + '&page=1&sortDesc=1&sortType=2')
                    .then((res) => {
                        console.log(JSON.parse(res.data));
                        that.list = JSON.parse(res.data).records;
                        that.myscroll(true);
                    }, (res) => {
                        console.log("err");
                    });
            },
            time: function() {
                this.page = 1;
                this.current = 2;
                var that = this;
                this.$http.get('http://www.woline.top/weixinlittlepro/cxx.php?categoryId=' + that.$route.params.id + '&page=1&sortDesc=1&sortType=3')
                    .then((res) => {
                        console.log(JSON.parse(res.data));
                        that.list = JSON.parse(res.data).records;
                        that.myscroll(true);
                    }, (res) => {
                        console.log("err");
                    });
            }
        }
    }
</script>
