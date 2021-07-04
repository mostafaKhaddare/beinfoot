<template lang="">
    <header>
        <div class="container">
            <div class="row align-items-center">
                <div class=" col-lg-7 sponsor ">
                </div>
                <div class="col-md-12 col-lg-5">
                </div>
            </div>
        </div>
    </header>
</template>
<style scoped>
header{
    background-image: url("../../assets/background-6201246_1920.jpg");
    background-size: cover;
}
.row { min-height: 120px; }
@media  (max-width : 767px) {
.row { min-height: 63px; } 
.sponsor {display: none; height: 58px; }
}
@media  (min-width : 768px) and (max-width: 991px) {
.sponsor{  display: none; }
.row { min-height: 63px; }}
</style>