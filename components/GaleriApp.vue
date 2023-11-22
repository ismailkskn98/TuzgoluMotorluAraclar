<template>
  <section class="container-fluid galeri">
    <div class="container">
      <h1 class="main-baslik">Galeri</h1>
      <div class="gallery">
        <div v-motion :initial="{ opacity: 0, y: 100, }" :visible="{ opacity: 1, y: 0, }" v-for="(img, idx) in imgs"
          :key="idx" class="pic" @click="() => onShow(idx)">
          <img :src="img" alt="Tuzgölü motorlu araçlar galeri" />
        </div>
      </div>

      <client-only>
        <vue-easy-lightbox :visible="visibleRef" :index="indexRef" :imgs="imgs" @hide="onHide" @on-prev="onPrev"
          @on-next="onNext" />
      </client-only>
    </div>
  </section>
</template>
  
<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'

// import VueEasyLightbox from 'vue-easy-lightbox'

/**
 * register component here or /plugins/vue-easy-lightbox.client.ts
 **/

export default defineComponent({
  name: 'App',
  components: {
    // VueEasyLightbox
  },
  setup() {
    const visibleRef = ref(false)
    const indexRef = ref(0)
    const imgs = reactive([
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/3.jpg',
      '/images/4.jpg',
      '/images/5.jpg',
      '/images/6.jpg',
      '/images/7.jpg',
      '/images/8.jpg',
    ])

    const onPrev = (oldIndex: number, newIndex: number) => {
      console.log('when next btn click ----')
      console.log('oldIndex of imgs:', oldIndex)
      console.log('newIndex of imgs:', newIndex)
    }
    const onNext = (oldIndex: number, newIndex: number) => {
      console.log('when next btn click ----')
      console.log('oldIndex of imgs:', oldIndex)
      console.log('newIndex of imgs:', newIndex)
    }

    const onShow = (index: number) => {
      indexRef.value = index
      visibleRef.value = true
    }
    const onHide = () => (visibleRef.value = false)

    return {
      onShow,
      onHide,
      onPrev,
      onNext,
      indexRef,
      visibleRef,
      imgs
    }
  }
})
</script>
  
<style scoped>
.pic {
  cursor: pointer;
  margin-right: 8px;
}
</style>
  