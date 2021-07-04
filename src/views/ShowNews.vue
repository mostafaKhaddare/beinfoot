<template>
    <div class="show-news row pt-2">
        <aside class="col-lg-4  d-sm-none  d-lg-block">
        </aside>
        <div class="col-lg-8 col-sm-12">
            <div class="card text-right" v-if="nouvelle">
                <div class="card-body ">
                    <GoBack/>
                    <h4 class="card-title mt-3 font-weight-bold "> {{nouvelle.title}} </h4>
                    <p class="card-text text-right date font-weight-bolder"> {{nouvelle.data}} </p>
                </div>
                <img v-if="!nouvelle.status" class="card-img-top p-2 border-radius-large" :src="nouvelle.img" :alt="nouvelle.title">
                <div v-if="nouvelle.status" class="p-2">
                <video-embed 
                    :src="nouvelle.video">
                </video-embed>
                </div>
                <div class="card-body">
                    <p class="card-text"> 
                        {{nouvelle.content}}
                    </p>
                </div>
            </div>
            <ClipLoader v-else  :size="size" :color="color" />
        </div>  
    </div>
</template>
<script>
    import GoBack from '@/components/global/GoBack'
    import {db} from "@/firebase/config"
    import ClipLoader from 'vue-spinner/src/ClipLoader.vue'

export default {
    props : ['id' , "slug"],
    data(){
        return{
            nouvelle : null,
            color : "#0075ff",
            size : "80px"
        }
    },
    components : {
        GoBack,
        ClipLoader
    },
    async mounted(){
        const res = await db.collection('news').doc(this.id).get();
        if(!res.exists){
                throw Error("ce match n'a pas exists")
            }
        this.nouvelle = {...res.data() , id : this.id}
    } 
}
</script>
<style scoped>
p{
    line-height: 1.8;
    padding-right: 25px;
    padding-left: 22px;
    }
.card .card-body .date{
    color: #8a8a8a;
    letter-spacing: 2px;
}


@media  (max-width : 767px) {
    .card .card-body h4{
    font-size: 15px !important;
}  
p{
    line-height: 1.6;
}
}
@media  (min-width : 768px) and (max-width: 991px){
        .card .card-body h4{
        font-size: 15px !important;
}  

}
</style>