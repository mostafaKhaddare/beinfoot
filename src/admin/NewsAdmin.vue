<template lang="">
    <div>
           <div class="row">
            <div class="col-md-6 mx-auto">
                <div class="card">
                    <div class="card-body">
                        <h2 class="card-header main-bg text-white d-flex justify-content-between align-items-center">
                            News
                            <router-link  :to="{name : 'CreateNews'}" class="btn btn-sm btn-info mr-2"> 
                                <h4> craete News </h4>
                            </router-link>
                        </h2>
                        <ul class="list-group list-group-flush p-3" v-for="(nouvelle, i) in news" :key="i">
                            <div class="d-flex justify-content-between align-items-center">
                                <img width="40px" height="40px"  :src="nouvelle.img" alt="image">
                                <h5> {{nouvelle.title.substring(0,29)}} </h5>
                                <div>
                                    <button @click.prevent="deleteNews(nouvelle.id)" class="btn btn-sm btn-danger mr-2"> delete </button>
                                    <router-link :to="{name : 'EditNews' , params : {id : nouvelle.id}}"  class="btn btn-sm btn-warning mr-2"> edit </router-link>
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
            news: []
        }
    },
    async mounted(){
        try {
            const res = await db.collection("news").onSnapshot(snap=>{
                this.news = snap.docs.map(doc=>{
                    return {...doc.data() , id : doc.id}
                })   
                console.log(res)
            })
        } catch (error) {
            console.log(error)
        }
    },
    methods: {
        async deleteNews(id){
            const res = await db.collection("news").doc(id).delete()
                this.news= this.news.filter(match => nouvelle.id !== id)
        }
  },
}
</script>
