<template>
    <section class="container-fluid">
        <div class="container">
            <h1 class="main-baslik">Yedek Parçalar</h1>
            <YedekParcaCard :urunler="urunler" />
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            urunler: [{
                resimler: [
                    "/images/urun1-1.jpg",
                    "/images/urun1-2.jpg",
                ],
                icerik: {
                    baslik: "651 Sprinter komple motor",
                    icerik: "Ürünlerimiz resimlerde ki parçalardan ibaret değildir. Servisimizde Mercedes Benz  Sprinter araçlarınızın her türlü yedek parçaları mevcuttur.",
                    seriNo: 'Parça No: 010 41 27'
                }
            },
            {
                resimler: [
                    "/images/urun2-1.jpg",
                    "/images/urun2-2.jpg",
                    "/images/urun2-3.jpg",
                    "/images/urun2-4.jpg",
                ],
                icerik: {
                    baslik: "Sprinter kule motor",
                    icerik: "Ürünlerimiz resimlerde ki parçalardan ibaret değildir. Servisimizde Mercedes Benz  Sprinter araçlarınızın her türlü yedek parçaları mevcuttur."
                }
            },
            {
                resimler: [
                    "/images/urun3-1.jpg",
                    "/images/urun3-2.jpg",
                    "/images/urun3-3.jpg",
                    "/images/urun3-4.jpg",
                    "/images/urun3-5.jpg",
                ],
                icerik: {
                    baslik: "651 Sprinter yarım blonk",
                    icerik: "Ürünlerimiz resimlerde ki parçalardan ibaret değildir. Servisimizde Mercedes Benz  Sprinter araçlarınızın her türlü yedek parçaları mevcuttur."
                }
            },
            {
                resimler: [
                    "/images/urun4-1.jpg",
                    "/images/urun4-2.jpg",
                    "/images/urun4-3.jpg",
                    "/images/urun4-4.jpg",
                    "/images/urun4-5.jpg",
                ],
                icerik: {
                    baslik: "651 Sprinter sandık kule motor",
                    icerik: "Ürünlerimiz resimlerde ki parçalardan ibaret değildir. Servisimizde Mercedes Benz  Sprinter araçlarınızın her türlü yedek parçaları mevcuttur."
                }
            },
            {
                resimler: [
                    "/images/urun5-1.jpg",
                    "/images/urun5-2.jpg",
                    "/images/urun5-3.jpg",
                ],
                icerik: {
                    baslik: "651 sprinter silindir kapağı",
                    icerik: "Ürünlerimiz resimlerde ki parçalardan ibaret değildir. Servisimizde Mercedes Benz  Sprinter araçlarınızın her türlü yedek parçaları mevcuttur."
                }
            },
            {
                resimler: [
                    "/images/urun6-1.jpg",
                    "/images/urun6-2.jpg",
                ],
                icerik: {
                    baslik: "651 Sprinter krank",
                    icerik: "Ürünlerimiz resimlerde ki parçalardan ibaret değildir. Servisimizde Mercedes Benz  Sprinter araçlarınızın her türlü yedek parçaları mevcuttur."
                }
            },
            {
                resimler: [
                    "/images/urun7-1.jpg",
                    "/images/urun7-2.jpg",
                ],
                icerik: {
                    baslik: "651 Sprinter turbo",
                    icerik: "Ürünlerimiz resimlerde ki parçalardan ibaret değildir. Servisimizde Mercedes Benz  Sprinter araçlarınızın her türlü yedek parçaları mevcuttur."
                }
            },
            {
                resimler: [
                    "/images/urun8.jpg",
                ],
                icerik: {
                    baslik: "651 sprinter şarj dinamosu",
                    icerik: "Ürünlerimiz resimlerde ki parçalardan ibaret değildir. Servisimizde Mercedes Benz  Sprinter araçlarınızın her türlü yedek parçaları mevcuttur."
                }
            },
            {
                resimler: [
                    "/images/urun9.jpg",
                ],
                icerik: {
                    baslik: "651 Sprinter Şanzıman",
                    icerik: "Ürünlerimiz resimlerde ki parçalardan ibaret değildir. Servisimizde Mercedes Benz  Sprinter araçlarınızın her türlü yedek parçaları mevcuttur."
                }
            }
            ]
        }
    }
}

</script>