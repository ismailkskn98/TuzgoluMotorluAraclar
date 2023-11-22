<template>
  <header id="header" class="container-fluid">
    <div id="header-item" class="container">
      <div class="logo">
        <nuxt-link to="/"><img src="/images/logo.png" alt="tuz gölü motorlu araclar logo"></nuxt-link>
      </div>
      <div class="whatsapp">
        <a href="https://api.whatsapp.com/send?phone=905388490063" target="_blank">
          <lottie-player class="lottie" src="https://lottie.host/3f1003e1-139c-4f58-b782-36b01c6b8381/1r1tpZjupS.json"
            background speed="1" direction="1" mode="normal" loop autoplay></lottie-player>
          <p>Bizimle İletişime Geçebilirsiniz</p>
        </a>
      </div>
      <nav>
        <ul>
          <li><nuxt-link to="/">Anasayfa</nuxt-link></li>
          <li><nuxt-link to="/#yedek-parcalar">Yedek Parçalar</nuxt-link></li>
          <li><nuxt-link to="/#hakkimizda">Hakkımızda</nuxt-link></li>
          <li><nuxt-link to="/#galeri">Galeri</nuxt-link></li>
          <li><nuxt-link to="/#iletisim">İletişim</nuxt-link></li>
        </ul>
      </nav>
      <HeaderMobil />
    </div>
  </header>
  <div id="mobil-wp" class="container-fluid mobil-whatsapp">
    <a href="https://api.whatsapp.com/send?phone=905388490063" target="_blank">
      <lottie-player class="lottie" src="https://lottie.host/3f1003e1-139c-4f58-b782-36b01c6b8381/1r1tpZjupS.json"
        background speed="1" direction="1" mode="normal" loop autoplay></lottie-player>
      <p>Bizimle İletişime Geçebilirsiniz</p>
    </a>
  </div>
</template>


<script>

export default {
  mounted() {
    window.addEventListener('scroll', handleScroll);

    function handleScroll() {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("header").classList.add('sticky');
        document.getElementById("header-item").classList.add('stickyC');
        document.getElementById("mobil-wp").classList.add('sticky-whatsapp');
      } else {
        document.getElementById("header").classList.remove('sticky');
        document.getElementById("header-item").classList.remove('stickyC');
        document.getElementById("mobil-wp").classList.remove('sticky-whatsapp');
      }
    }
  },
}
</script>
