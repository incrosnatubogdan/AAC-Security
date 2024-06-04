<script setup>
    import facebook_icon from "@/assets/img/icons/facebook.png";
    import instagram_icon from "@/assets/img/icons/instagram.png";
    import linkedin_icon from "@/assets/img/icons/linkedin.png";
</script>

<template>
    <footer class="">
        <div class="container">
        <div class="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
            <div class="col-md-6 col-sm-12 d-flex align-items-center">
                <a class="mb-3 mb-md-0 text-white text-center" target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/bg9B9fkdkcrCZgtp9">364-366 Kensington High St, London W14 8NS, UK</a>
            </div>

            <ul class="nav col-md-6 col-12 justify-content-lg-end justify-content-center list-unstyled d-flex">
                <li><a target="_blank" href="https://www.facebook.com/profile.php?id=61558573751283&mibextid=LQQJ4d"><img style="height: 24px" :src="facebook_icon" alt="facebook logo"></a></li>
                <li class="ms-3"><a target="_blank" href="#"><img style="height: 24px" :src="instagram_icon" alt="instagram logo"></a></li>
                <li class="ms-3"><a target="_blank" href="#"><img style="height: 24px" :src="linkedin_icon" alt="linkedin logo"></a></li>
            </ul>
        </div>
    </div>
    </footer>
</template>

<style>
    footer {
        background-image: linear-gradient(195deg, #862B2B 0%, #861c1c 100%);
        margin-top: -1px;
    }
</style>