<template lang="">
    <div>
        <h1 class="text-center"> new nmatch </h1>
        <form @submit.prevent="createMatch(match)">
            <div class="form-group">
                <label for="title">title</label>
                <input v-model="match.title" type="text" id="title" class="form-control">
            </div>
            <div class="form-group">
                <label for="teamOne">teamOne</label>
                <input v-model="match.teamOne" type="text" id="teamOne" class="form-control">
            </div>
            <div class="form-group">
                <label for="teamTwo">teamTwo</label>
                <input v-model="match.teamTwo" type="text" id="teamTwo" class="form-control">
            </div>
            <div class="form-group">
                <label for="resaultOne">resaultOne</label>
                <input v-model="match.resaultOne" type="text" id="resaultTwo" class="form-control">
            </div>
            <div class="form-group">
                <label for="resaultTwo">resaultTwo</label>
                <input v-model="match.resaultTwo" type="text" id="resaultTwo" class="form-control">
            </div>
            <div class="form-group">
                <label for="type">type</label>
                <input v-model="match.type" type="text" id="type" class="form-control">
            </div>
            <div class="form-group">
                <label for="time">time</label>
                <input v-model="match.time" type="time" id="time" class="form-control">
            </div>
            <div class="custom-file">
                <input @change="fileChange(imageOne)" type="file" class="custom-file-input" id="inputGroupFile01">
                <label class="custom-file-label" for="inputGroupFile01">image one</label>
            </div>
            <div class="custom-file">
                <input @change="fileChange(imageTwo)" type="file" class="custom-file-input" id="inputGroupFile01">
                <label class="custom-file-label" for="inputGroupFile01">image two</label>
            </div>
            <div class="form-group">
                <label for="link">link</label>
                <input v-model="match.link" type="text" id="link" class="form-control">
            </div>
            <div class="form-group">
                <label for="link2">link2</label>
                <input v-model="match.link2" type="text" id="link2" class="form-control">
            </div>
            <div class="form-check form-check-inline py-2">
                <label class="form-check-label"> true
                <input v-model="match.start" class="form-check-input" type="radio" name="start"  :value="true"> 
                </label>
                <label class="form-check-label ml-3"> false
                <input v-model="match.start" class="form-check-input" type="radio" name="start"  :value="false"> 
                </label>
            </div>
            <div class="form-group">
                <label for="watch">Select list:</label>
                <select v-model="match.watch" class="form-control" id="watch">
                    <option>شاهد الاهداف</option>
                    <option>شاهد المباراة</option>
                    <option>جارية الان</option>
                </select>
            </div>
            <div class="form-group">
                <label for="day">Select list:</label>
                <select v-model="match.day" class="form-control" id="day">
                    <option>today</option>
                    <option>yesterday</option>
                    <option>tomorrow</option>
                </select>
            </div>
            <button class="btn btn-block btn-success"> AddMatch </button>
        </form>
    </div>
</template>
<script>
import {db} from "@/firebase/config"
import {storage} from  "../../firebase/config"
export default {
    data(){
        return{
            match : {
                title : "",
                teamOne : "",
                teamTwo : "",
                resaultOne : "",
                resaultTwo : "",
                type: "",
                time : "",
                watch : "",
                link : "" ,
                link2 : "" ,
                imageOne : "",
                imageTwo : "",
                start : false,
                day : "",
            },
        }
    },
    methods: {
    async createMatch(match){
        const res = await db.collection('matches').add(match)
        this.$router.push("/admin/dashboard")
        },
    async fileChange(e , img){
        const file = e.target.files[0]
        const storageRef = storage.ref()
        const fileRef = storageRef.child(file.name)
        let  image =  `${this}.match.${img}`
        await fileRef.put(file)
        iamge =  await fileRef.getDownloadURL()
    },
    },
    
}
</script>
