<template lang="">
    <div class="py-2">
       <div class="row">
           <aside class="col-lg-4  d-sm-none  d-lg-block">
           </aside>
           <div class="col-lg-8 col-sm-12">
            <article class="py-2">
                <Matches/>
                <News/>
             </article>
             <AboutUs/>
           </div>
       </div>
    </div>
</template>
<script>
import Matches from "./Matches"
import News from "./News"
import AboutUs from "./AboutUs"

export default {
    components  : {
        Matches ,
        News,
        AboutUs
    }
}
</script>
<style scoped>

@media  (min-width : 768px) and (max-width: 991px){     }
/** large 1200px */
@media (min-width: 992px) {
} 
/** small : 768px */
@media  (max-width : 767px) {
   aside{
       display: none;
   } 
}
</style>