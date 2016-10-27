<template>
  <div class="m-guide">
    <div class="swiper-container" id="guide-swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="img in imgList">
          <img v-if="$index==3" v-link="{path: '/index'}" :src="img" />
          <img v-else :src="img" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        imgList:[
          '/images/g1.png',
          '/images/g2.png',
          '/images/g3.png',
          '/images/g4.png'
        ]
      }
    },
    ready(){
      new Swiper('#guide-swiper');
    }
  }
</script>
