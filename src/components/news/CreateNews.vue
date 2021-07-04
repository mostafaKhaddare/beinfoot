<template lang="">
    <div>
        <h1> new news </h1>
        <form @submit.prevent="createNews(nouvelle)">
             <div class="custom-file">
                <input @change="fileChange" type="file" class="custom-file-input" id="inputGroupFile01">
                <label class="custom-file-label" for="inputGroupFile01">image</label>
            </div>
            <div class="form-group">
                <label for="title">title</label>
                <input v-model="nouvelle.title" type="text" id="title" class="form-control">
            </div>
                <div class="form-group">
                <label for="date">date</label>
                <input v-model="nouvelle.date" type="date" id="date" class="form-control">
            </div>
            <div class="form-group">
                <label for="image">video</label>
                <input v-model="nouvelle.video" type="text" id="video" class="form-control">
            </div>
            <div class="form-group">
                <label for="content">content</label>
                <textarea v-model="nouvelle.content"  id="content"  rows="3" class="form-control">
                </textarea>
            </div>
            <div class="form-check form-check-inline py-2">
                <label class="form-check-label"> video
                <input v-model="nouvelle.status" class="form-check-input" type="radio" name="start"  :value="true"> 
                </label>
                <label class="form-check-label ml-3"> image
                <input v-model="nouvelle.status" class="form-check-input" type="radio" name="start"  :value="false"> 
                </label>
            </div>
            <button class="btn btn-block btn-success"> AddNews </button>
        </form>
    </div>
</template>
<script>
import {db} from "@/firebase/config"
import {storage} from  "../../firebase/config"

export default {
    data(){
        return{
            nouvelle : {
                title : "",
                content : "",
                date : "",
                img:"",
                video : "",
                status : false
            } 
        }
    },
    methods: {
    async createNews(nouvelle){
            const res = await db.collection('news').add(nouvelle) ;
            this.$router.push('/admin/news')
        },
    async fileChange(e){
        const file = e.target.files[0]
        const storageRef = storage.ref()
        const fileRef = storageRef.child(file.name)
        await fileRef.put(file)
        this.nouvelle.img =  await fileRef.getDownloadURL()
        },
    },
}
</script>
<style lang="">
    
</style>