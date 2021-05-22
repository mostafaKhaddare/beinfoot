<template lang="">
    <div>
        <h1 class="text-center"> edit nmatch </h1>
        <form @submit.prevent="updateMatche">
            <div class="form-group">
               <label for="title">title</label>
             <input v-model="match.title" type="text" id="title" class="form-control">
            </div>
             <div class="form-group">
               <label for="teamOne">teamOne</label>
             <input v-model="match.teamOne" type="text" id="date" class="form-control">
            </div>
            <div class="form-group">
               <label for="teamTwo">teamTwo</label>
             <input v-model="match.teamTwo" type="text" id="date" class="form-control">
            </div>
            <div class="form-group">
               <label for="resaultOne">resaultOne</label>
             <input v-model="match.resaultOne" type="text" id="date" class="form-control">
            </div>
            <div class="form-group">
               <label for="resaultTwo">resaultTwo</label>
             <input v-model="match.resaultTwo" type="text" id="date" class="form-control">
            </div>
             <div class="form-group">
               <label for="type">type</label>
             <input v-model="match.type" type="text" id="date" class="form-control">
            </div>
             <div class="form-group">
               <label for="time">time</label>
             <input v-model="match.time" type="time" id="date" class="form-control">
            </div>
             <div class="form-group">
               <label for="watch">watch</label>
             <input v-model="match.watch" type="text" id="date" class="form-control">
            </div>
             <div class="form-group">
               <label for="link">imageOne</label>
             <input v-model="match.imageOne" type="text" id="imageOne" class="form-control">
            </div>
             <div class="form-group">
               <label for="imageTwo">imageTwo</label>
             <input v-model="match.imageTwo" type="text" id="imageTwo" class="form-control">
            </div>
             <div class="form-group">
               <label for="link">link</label>
             <input v-model="match.link" type="text" id="link" class="form-control">
            </div>
             <div class="form-check form-check-inline py-2">
               <label class="form-check-label"> true
                 <input v-model="match.start" class="form-check-input" type="radio" name="start"  :value="true"> 
               </label>
               <label class="form-check-label ml-3"> false
                 <input v-model="match.start" class="form-check-input" type="radio" name="start"  :value="false"> 
               </label>
             </div>
            <button class="btn btn-block btn-success"> update match </button>
        </form>
    </div>
</template>
<script>
export default {
    props :['id'],
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
              imageOne : "",
              imageTwo : "",
              start : false
           },
            url : `http://localhost:5000/matches/${this.id}`

        }
    },
    methods: {
       updateMatche(){
               fetch(this.url ,{
                method : "PUT" , 
                headers : {'Content-Type' : 'application/json'},
                body : JSON.stringify(this.match)
                })
               .then(res=>res.json())
               .then(data => this.$router.push('/') )
               .catch(err=> console.log(err))
        }
    },
    mounted(){
        fetch(this.url)
        .then(res=>res.json())
        .then(data => this.match = data)
        .catch(err=> console.log(err))
    }
}
</script>
<style lang="">
    
</style>