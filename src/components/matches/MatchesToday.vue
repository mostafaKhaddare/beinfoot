<template lang="">
    <main class="matche-table p-2">
        <div  class="row"  > 
            <div  class="col-md-12 "  v-for="(match, index) in matches " :key="match.id">
                <router-link :to="{name : 'show-match' , params : {id : match.id }}">
                    <OneMatch :match="match" />
                </router-link>
            </div> 
            <div class="text-right py-5 mx-auto" v-if="matches==null" > 
                <ClipLoader  :size="size" :color="color"  />
            </div>
        </div>
        
    </main>
</template>
<script>
import OneMatch from  "@/components/matches/OneMatch"
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
import {db} from "../../firebase/config"
export default {
    data(){
        return {
            matches: null,
            color : "#0075ff",
            size : "30px"
        }
    },
    components : {OneMatch , ClipLoader},
    async mounted(){
        try {
            const res = await db.collection("matches").where('day' , '==' , 'today').onSnapshot(snap=>{
                this.matches = snap.docs.map(doc=>{
                    return {...doc.data() , id : doc.id}
                })   
                console.log(res)
            })
        } catch (error) {
            console.log(error)
        }
    },
}
</script>

