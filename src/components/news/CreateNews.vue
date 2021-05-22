<template lang="">
    <div>
        <h1> new news </h1>
        <form @submit.prevent="createNews">
            <div class="form-group">
               <label for="title">title</label>
             <input v-model="title" type="text" id="title" class="form-control">
            </div>
             <div class="form-group">
               <label for="date">date</label>
             <input v-model="date" type="text" id="date" class="form-control">
            </div>
            <div class="form-group">
                <label for="content">content</label>
                <textarea v-model="content"  id="content"  rows="3" class="form-control">
                </textarea>
            </div>
            <button class="btn btn-block btn-success"> AddNews </button>
        </form>
    </div>
</template>
<script>
export default {
    data(){
        return{
            title : "",
            content : "",
            date : "",
            url : `http://localhost:5000/news`

        }
    },
    methods: {
        createNews(){
            let nouvelle = {
                title : this.title ,
                content : this.content ,
                date : this.date
            }

            fetch(this.url ,{
            method : 'POST' , 
            headers : {'Content-Type' : 'application/json'} ,
            body : JSON.stringify(nouvelle)
             })
             .then(()=> this.$router.push('/news'))
             .catch(err=> console.log(err))
        }
    },
}
</script>
<style lang="">
    
</style>