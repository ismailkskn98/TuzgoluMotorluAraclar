<template>
  <div class="slider-container">
    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(resim, index) in urunlerItem.resimler" :key="index">
          <img :src="resim" alt="tuzgölü motor yedek parçaları" width="340" height="270" />
        </div>
      </div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['urunlerItem'],
  mounted() {
    this.initSwiper();
  },
  methods: {
    initSwiper() {
      this.swiper = new Swiper('.swiper', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    },
  },
};
</script>

<style>
.slider-container {
  max-width: 340px;
  margin: 0 auto;
}

.slider-container img {
  height: 310px;
}

.swiper-slide {
  text-align: center;
}

.swiper-button-next::after,
.swiper-button-prev::after {
  font-size: 3rem !important;
  color: #f4732b;
  font-weight: 900;
}
</style>
