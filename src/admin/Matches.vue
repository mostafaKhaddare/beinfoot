<template lang="">
    <div>
        <div class="row">
            <div class="col-md-6 mx-auto">
                <div class="card">
                    <div class="card-body">
                        <h2 class="card-header main-bg text-white d-flex justify-content-between align-items-center">
                            matches
                            <router-link  :to="{name : 'CreateMatch'}" class="btn btn-sm btn-info mr-2"> 
                                <h4> craete match </h4>
                            </router-link>
                        </h2>
                        <ul class="list-group list-group-flush p-3" v-for="(match, i) in matches" :key="i">
                            <div class="d-flex justify-content-between align-items-center">
                                <img width="40px" height='40px'  :src="match.imageOne" alt="">
                                <h5> {{match.title}} </h5>
                                <div>
                                    <button @click.prevent="deleteMatch(match.id)" class="btn btn-sm btn-danger mr-2"> delete </button>
                                    <router-link :to="{name : 'EditMatch' , params : {id : match.id}}"  class="btn btn-sm btn-warning mr-2"> edit </router-link>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {db} from "../firebase/config.js"
export default {
    data(){
        return {
            matches: []
        }
    },
    async mounted(){
        try {
            const res = await db.collection("matches").onSnapshot(snap=>{
                this.matches = snap.docs.map(doc=>{
                    return {...doc.data() , id : doc.id}
                })   
            })
        } catch (error) {
            console.log(error)
        }
    },
    methods: {
        async deleteMatch(id){
            const res = await db.collection("matches").doc(id).delete()
                this.matches= this.matches.filter(match => match.id !== id)
        }
  },
}
</script>
