<template>
    <section class="container-fluid">
        <div class="container">
            <div v-motion :initial="{ opacity: 0, y: 100 }" :delay="-500" :visible="{ opacity: 1, y: 0 }"
                v-for="(urunlerItem, i) in urunler" :key="i" class="card">
                <div class="resim-kaysayici">
                    <ParcaSlider :urunlerItem="urunlerItem" class="urun-image" />
                    <h4>{{ urunlerItem.icerik.seriNo }}</h4>
                </div>
                <div class="bilgi">
                    <h2>{{ urunlerItem.icerik.baslik }}</h2>
                    <p>{{ urunlerItem.icerik.icerik }}</p>
                </div>
            </div><!--card-->
        </div>
    </section>
</template>
  
<script>
import ParcaSlider from './ParcaSlider.vue';


export default defineComponent({
    props: ['urunler'],
    components: { ParcaSlider }
})
</script>
  
<style></style>
  