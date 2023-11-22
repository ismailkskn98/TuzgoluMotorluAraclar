<template>
    <div id="mobil-navbar">
        <i @click="navTrueFalse = !navTrueFalse" class="fa-solid fa-ellipsis-vertical"></i>
        <div :class= "{openNav: navTrueFalse}" class="navbar">
            <i @click="navTrueFalse = !navTrueFalse" class="fa-solid fa-xmark"></i>
            <ul>
                <li><nuxt-link @click="navTrueFalse = !navTrueFalse" to="/">Anasayfa</nuxt-link></li>
                <li><nuxt-link @click="navTrueFalse = !navTrueFalse" to="#yedek-parcalar">Yedek Parçalar</nuxt-link></li>
                <li><nuxt-link @click="navTrueFalse = !navTrueFalse" to="#hakkimizda">Hakkımızda</nuxt-link></li>
                <li><nuxt-link @click="navTrueFalse = !navTrueFalse" to="#galeri">Galeri</nuxt-link></li>
                <li><nuxt-link @click="navTrueFalse = !navTrueFalse" to="#iletisim">İletişim</nuxt-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                navTrueFalse: false,
            }
        },
        methods: {
            denemeF() {
                console.log(this.deneme);
            }
        }
    }
</script>