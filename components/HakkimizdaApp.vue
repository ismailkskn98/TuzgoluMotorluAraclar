<template>
    <section class="kurumsal">
        <h1 class="main-baslik">Hakkımızda</h1>
        <div class="container">
            <div v-motion :initial="{ opacity: 0, y: -100, }" :visible="{ opacity: 1, y: 0, }" class="kurumsal-text">
                <h2>Biz Kimiz?</h2>
                <p><b>Tuzgölü Motorlu Araçlar</b> mercedes Benz hafif ticari (sprinter) araçlarınızın mekanik tamir bakım ve
                    yedek parça Tedariğinin yapılması, yolda kalınan durumlarda yol yardımının sağlanması amacıyla sizler
                    için vardır. Köklü ustalık sanatımızla firmamız bünyesinde yapılan tüm işlerde kazancın iki tarafında
                    yararına olması en büyük prensibimizdir. Sizlere verilen hizmetin her türlü arkasında olduğumuzu taahhüt
                    ederiz. Bizleri ziyaret ediniz sizleri Ankara Yenimahalle’deki servisimizde ağırlamakdan
                    memnuniyet duyarız.</p>
                <p>“Gerek servisimizde gerek yolda kalınan durumlarda her türlü bakım onarım tamirat ve mekanik hizmetleri
                    için güvenle arayabilirsiniz.”⚙️🔧🛠</p>
            </div>
            <div v-motion :initial="{ opacity: 0, y: 100, }" :visible="{ opacity: 1, y: 0, }" class="kurumsal-img">
                <img src="/images/kurumsal-img.jpg" alt="tuzgölü kurumsal resim">
            </div>
        </div>
    </section>
</template>
