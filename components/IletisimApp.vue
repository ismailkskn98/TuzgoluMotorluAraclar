<template>
    <section v-motion :initial="{ opacity: 0, y: 100, }" :visible="{ opacity: 1, y: 0, }" class="container-fluid">
        <div class="container">
            <h1 v-motion :initial="{ opacity: 0, y: 100, }" :visible="{ opacity: 1, y: 0, }" class="main-baslik">İletisim</h1>
            <div class="icerik">
                <div class="iletisim-bilgiler">
                    <div v-motion :initial="{ opacity: 0, y: 100, }" :visible="{ opacity: 1, y: 0, }" class="adres">
                        <div class="iKapsayici"><i class="fa-solid fa-location-dot"></i></div>
                        <h2>Adres</h2>
                        <p><a style="font-size: 1.5rem;" href="https://goo.gl/maps/2KKjkGtbyS3BnqA16" target="_blank">Ostim
                                OSB Mah. Örnek sanayi sitesi 1258 CAD. NO: 28/D</a></p>
                    </div>
                    <div v-motion :initial="{ opacity: 0, y: 100, }" :visible="{ opacity: 1, y: 0, }" class="email">
                        <div class="iKapsayici"><i class="fa-solid fa-envelope"></i></div>
                        <h2>Email</h2>
                        <p><a style="font-size: 1.5rem;" href="mailto:hadismailkskn98@gmail.com"
                                target="_blank">tuzgolumotorluaraclar@gmail.com</a></p>
                    </div>
                    <div v-motion :initial="{ opacity: 0, y: 100, }" :visible="{ opacity: 1, y: 0, }" class="telefon">
                        <div class="iKapsayici"><i class="fa-solid fa-phone"></i></div>
                        <h2>Bizi Arayın</h2>
                        <p> <a style="font-size: 1.5rem;" href="tel:05388490063">0538 849 00 63</a></p>
                    </div>
                    <div v-motion :initial="{ opacity: 0, y: 100, }" :visible="{ opacity: 1, y: 0, }" class="sosyal-media">
                        <div class="iKapsayici"><i class="fa-solid fa-hashtag"></i></div>
                        <h2>Online İletişim</h2>
                        <p>
                            <a style="font-size: 1.5rem;"
                                href="https://www.instagram.com/tuzgolumotorluaraclar06/?igshid=MzRlODBiNWFlZA%3D%3D"
                                target="_blank"><i class="fa-brands fa-instagram"></i></a>
                            <a style="font-size: 1.5rem;" href="https://api.whatsapp.com/send?phone=905388490063"
                                target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
                        </p>
                    </div>
                </div>
                <div class="google-maps">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3057.462085608038!2d32.7549722!3d39.9757778!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDU4JzMyLjgiTiAzMsKwNDUnMTcuOSJF!5e0!3m2!1str!2str!4v1691031195088!5m2!1str!2str"
                        style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </section>
</template>