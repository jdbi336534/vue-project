<template>
  <div class="social-container">
    <header>
      海贝社区
    </header>
    <nav>
      <ul id="swiper-nav">
        <li v-for="nav in socialNav" v-on:click="switchSwiper($index)" v-bind:class="curIndex == $index ? 'active': ''">{{nav}}</li>
      </ul>
    </nav>
    <section>
      <div class="swiper-container" id="socila-swiper">
        <div class="swiper-wrapper">
          <ul class="swiper-slide">
            <li v-for="user in socialData.list">
              <p class="socialUser">
                {{user.nickName==""?"帮五用户":user.nickName}}
              </p>
              <span>{{user.addTime}}</span>
              <p class="socialJingxuan">
                编辑精选
              </p>
              <img class="zhanshi" v-bind:src="user.images" alt="" />
              <p class="socialContent">
                {{user.content}}
              </p>
              <div class="socialProduct" v-link="{name: 'detail', params: {id: user.docId}}">
                <img v-bind:src="socialData.productData[user.docId].img" alt="" />
                <span>{{socialData.productData[user.docId].title}}</span>
              </div>
            </li>
          </ul>
          <ul class="swiper-slide"></ul>
        </div>
      </div>
    </section>
  </div>
</template>
<script>

var mySwiper = null;

export default {
  data() {
    return {
      socialData: [],
      curIndex: 0,
      socialNav: ['精选', '圈子']
    }
  },

  ready: function() {
    var that = this;
    mySwiper = new Swiper("#socila-swiper", {
      onSlideChangeStart: function(){
        that.curIndex = mySwiper.activeIndex;
      }
    });
    this.$http.get('/mock/social.json')
    .then((res)=>{
      that.socialData = res.data.data;
      for(var i=0;i<res.data.data.list.length;i++){
        var aDate = new Date(that.socialData.list[i].addTime);
        that.socialData.list[i].images = that.socialData.list[i].images.split('"')[3];
        that.socialData.list[i].addTime = aDate.getFullYear()+"-"+(aDate.getMonth()+1)+"-"+aDate.getDate();
      }
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
