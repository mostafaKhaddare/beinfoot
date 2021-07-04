<template lang="">
    <article>
            <router-link :to="{name : 'show-news' , params : {id : nouvelle.id , slug : nouvelle.title}}"  >
                    <div class="news mb-4 p-2">
                        <div class="card border-radius-large">
                            <img :src="nouvelle.img" :alt="nouvelle.title"  class="card-img-top border-radius-large p-2">
                            <i v-if="nouvelle.status" class=" play large-size fas fa-play"></i>
                            <div class="card-body text-right">
                                <p class="lead  text-right large-size"> {{nouvelle.date}} </p>
                                <h4 class="card-title large-size border-radius-medium mt-2 font-weight-bold ">{{nouvelle.title.substring(0,40)}}  </h4>
                                <span v-if="!nouvelle.status" class=" mb-2 button  text-white p-2 font-weight-bold mt-1 border-radius-small">
                                    اكمل القراءة
                                </span>  
                                <span v-if="nouvelle.status" class=" mb-2 button  text-white p-2 font-weight-bold mt-1 border-radius-small">
                                    شاهد المقطع
                                </span>  
                            </div>
                        </div>
                    </div>
            </router-link>
    </article>
</template>
<script>
export default {
    props : ['nouvelle'] ,  
}
</script>
<style scoped>
p{
    font-size: 30px !important;
}
.button{
    background: var(--main-color);
}
.card .card-img-top {
    position: relative;
    height: 220px;
}  
.card .card-body .date{
    color: #8a8a8a;
    letter-spacing: 2px;
} 
.card .card-body .button{
    display: inline-block;
}
.play{
    position: absolute;
    z-index: 2;
    color: var(--main-color);
    left: 50%;
    top: 28%;
    transform: translate(-50%, -50%);
    font-size: 2rem;
}
/** small : 768px */
@media  (max-width : 767px) {
    .date{
        text-align: right;
    }
    .card .card-body h4{
        font-size: 15px !important;
    } 
    .card .card-body .button{
        font-size: 12px !important;
    } 
    .play{
        top: 30%;
    }
    p{
    font-size: 18px;
}

}
@media  (min-width : 768px) and (max-width: 991px){
    .date{
        text-align: right;
    }

    .card .card-body h4{
        font-size: 15px !important;
}  
.card .card-body .button{
        font-size: 12px !important;
}
p{
    font-size: 18px;
}
}
</style>