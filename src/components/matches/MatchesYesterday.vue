<template lang="">
    <main class="matche-table p-2">
            <div class="row" v-if="matches" > 
                <div class="col-md-12 "  v-for="(match, index) in matches " :key="match.id">
                    <router-link :to="{name : 'show-match' , params : {id : match.id }}">
                        <OneMatch :match="match"   @delete="handleDelete" />
                    </router-link>
                </div>
            </div>
            <div v-else class="text-right py-5 mx-auto"  > 
                <ClipLoader  :size="size" :color="color"  />
            </div> 
    </main>
</template>
<script>
import OneMatch from  "@/components/matches/OneMatch"
import {db} from "../../firebase/config"
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'


export default {
    data(){
        return {
            matches: null
        }
    },
    components : {OneMatch , ClipLoader},
    async mounted(){
        try {
            const res = await db.collection("matches").where('watch' , "==","شاهد الاهداف").onSnapshot(snap=>{
                this.matches = snap.docs.map(doc=>{
                        return {...doc.data() , id : doc.id}
                })   
            })
        } catch (error) {
            console.log(error)
        }
    },
    methods: {
        handleDelete(id){
        this.matches= this.matches.filter(match => match.id !== id)}
    },
}
</script>
<style>

    
</style>