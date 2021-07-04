<template lang="">
    <main class="news-table bg-white  mt-2">
        <div class="news-title text-right second-main-color bg-white p-2 mb-2 font-weight-bold large-size border-radius-small">
                اخبار الكرة  
        </div>
        <div class="row flex-row-reverse ">
            <div class="col-md-4 col-lg-6 col-sm-12" v-for="(nouvelle, index) in news" :key="nouvelle.id" >
                <OneNews :nouvelle="nouvelle" @delete="handleDelete" />
            </div>
        </div>
    </main>
</template>
<script>
import OneNews from "@/components/news/OneNews"
import {db} from "@/firebase/config"
export default {
    components : {
        OneNews
    },
    data(){
        return{
            news : [],
        }
    },
        async mounted(){
        try {
            const res = await db.collection("news").orderBy('date' , 'desc').limit(10).onSnapshot(snap=>{
                this.news = snap.docs.map(doc=>{
                    return {...doc.data() , id : doc.id}
                })                
            })
        } catch (error) {
            console.log(error)
        }
    },
}
</script>
<style scoped>
.news-title{
        border-bottom: 1px solid #eee;
    }
/** small : 768px */
@media  (max-width : 767px) {
    .news-title{
        font-size: 18px !important;
       
    }
}
@media  (min-width : 768px) and (max-width: 991px){
    .news-title{
        font-size: 18px !important;
    }
}
</style>