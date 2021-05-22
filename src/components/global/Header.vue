<template lang="">
    <header>
        <div class="container">
            <div class="row align-items-center">
                <div class=" col-lg-7 sponsor ">
                     sponsor
                </div>
                <div class="col-md-12 col-lg-5">
                    
                </div>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    
}
</script>
<style scoped>

header{
    background-image: url("../../assets/background-6201246_1920.jpg");
    background-size: cover;
}
.row{
    min-height: 120px;
}

/*? media query  */

/** small : 768px */
@media  (max-width : 767px) {
.row{
    min-height: 63px;
} 
.sponsor{
    display: none;
    height: 58px;
}

}
/** medium 992 px */
@media  (min-width : 768px) and (max-width: 991px) {
    .sponsor{
    display: none;
}
.row{
    min-height: 63px;
}
}
/** large 1200px */
@media (min-width: 992px) {
  
} ;



    
</style>