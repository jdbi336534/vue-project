<template>
  <div class="category-container">
    <div class="category-search">
      <input type="text" id="keyword" class="search_input" placeholder="你要的，就在这里~">
    </div>
    <nav>
      <ul id="swiper-nav">
        <li v-for="nav in categoryNav" v-on:click="switchSwiper($index)" v-bind:class="curIndex == $index ? 'active': ''">{{nav}}</li>
      </ul>
    </nav>
    <section>
      <div class="navwrapper">
        <div v-bind:id="curIndex == 0 ? 'flex': 'hidden'" class="category-fenlei">
          <div class="fenlei-top" >
            <ul id="swiper-fenlei" class="swiper-wrapper">
              <li v-for="fenlei in categoryTwoNav" v-on:click="switchSwiperFenlei($index)" v-bind:class="fenleiIndex == $index ? 'swiper-slide activefenlei': 'swiper-slide'">{{fenlei}}</li>
            </ul>
          </div>
          <section>
            <div class="swiper-container" id="fenlei-swiper">
              <div class="swiper-wrapper">
                <ul class="swiper-slide" v-for="ul in list">
                  <li v-for="li in ul.subCategoryList" >
                    <!-- {{li.displayName}} -->
                    <img v-bind:src="li.icon" alt="" v-link="{name: 'list', params: {id: li.url}}"/>
                    <ul>
                      <li v-for="tit in li.subCategoryList" v-bind:class="tit.bgColor == ''? '':'cheng'" v-link="{name: 'list', params: {id: tit.url}}">{{tit.displayName}}</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
        <ul v-bind:id="curIndex == 1 ? 'block': 'hidden'">
          <li v-for="pinpai in list">
            <p>
              {{pinpai.displayName}}
            </p>
            <div>
                <img v-for="img in pinpai.brandList" v-bind:src="img.logo" alt="" v-link="{name: 'list', params: {id: pinpai.url}}"/>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>


// var mySwiper = null;
var fenleiSwiper = null;
var fenlihuakuai = null;
import { tabChanger } from '../vuex/actions';

export default {
  vuex:{
    actions: {
        change: tabChanger
      }
  },
  data() {
    return {
      path:'/list',
      list: [],
      curIndex: 0,
      fenleiIndex:0,
      categoryNav: ['分类', '品牌'],
      categoryTwoNav: ['美妆个护', '母婴专区', '服饰鞋包','家居生活', '食品保健','数码家电']
    }
  },
  ready: function() {
    this.change(1);
    var that = this;
    fenlihuakuai = new Swiper(".fenlei-top",{
      slidesPerView: 'auto',
      paginationClickable: true
    });
    fenleiSwiper = new Swiper("#fenlei-swiper", {
      onSlideChangeStart: function(){
        that.fenleiIndex = fenleiSwiper.activeIndex;
      }
    });
    this.$http.jsonp('http://k.b5m.com/api/goods-display?authCode=172ca9138968b5f3dd28a3d944f51caa&code=index_menu_main')
    .then((res) => {
      console.log(res.data.val.categoryList);
      that.list = res.data.val.categoryList;

      for(var i=0;i<that.list.length;i++){
        for(var j=0;j<that.list[i].subCategoryList.length;j++){
          that.list[i].subCategoryList[j].url = that.list[i].subCategoryList[j].url.split('-')[1];
          for(var k=0;k<that.list[i].subCategoryList[j].subCategoryList.length;k++){
            that.list[i].subCategoryList[j].subCategoryList[k].url = that.list[i].subCategoryList[j].subCategoryList[k].url.split('-')[1];
            if(that.list[i].subCategoryList[j].subCategoryList[k].url==undefined){
              that.list[i].subCategoryList[j].subCategoryList[k].url = "13429,24301,13480,15404,15401";
            }
            // console.log(that.list[i].subCategoryList[j].subCategoryList[k].url);
          }
        }
        that.list[i].url = that.list[i].subCategoryList[0].url;
        // console.log(that.list[i].subCategoryList[0].url);
      }
      setTimeout(function(){
        fenleiSwiper.update();
      },500);
      //list[i].displayName
      //list[i].brandList[i].logo
      //list[i].subCategoryList[i].displayName
      //list[i].subCategoryList[i].icon
      //list[i].subCategoryList[i].subCategoryList[j].displayName
      //list[i].subCategoryList[i].subCategoryList[j].fid  27  37
    },(res)=>{
      console.log("err");
    });
  },

  methods: {
    switchSwiper(index) {
      this.curIndex = index;
    },

    switchSwiperFenlei(index) {
      this.fenleiIndex = index;
      fenleiSwiper.slideTo(index);
    }

  }
}
</script>
