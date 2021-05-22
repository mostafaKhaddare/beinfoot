<template lang="">
    <div>
        <h1> Edit news </h1>
        <form @submit.prevent="updateNews">
            <div class="form-group">
               <label for="title">title</label>
             <input v-model="nouvelle.title" type="text" id="title" class="form-control">
            </div>
             <div class="form-group">
               <label for="date">date</label>
             <input v-model="nouvelle.date" type="text" id="date" class="form-control">
            </div>
            <div class="form-group">
                <label for="content">content</label>
                <textarea v-model="nouvelle.content"  id="content"  rows="3" class="form-control">
                </textarea>
            </div>
            <button class="btn btn-block btn-warning"> EditNews </button>
        </form>
    </div>
</template>
<script>
export default {
    props : ['id'],
    data(){
        return{
           url : `http://localhost:5000/news/${this.id}`,
           nouvelle : {
               title : '',
               content : "",
               date : ""
           }

        }
    },
    methods: {
        updateNews(){
             if(this.nouvelle.title == "" || this.nouvelle.content == '' || this.nouvelle.date == ""){
                 return;
             }
               fetch(this.url ,{
                method : "PUT" , 
                headers : {'Content-Type' : 'application/json'},
                body : JSON.stringify(this.nouvelle)
                })
               .then(res=>res.json())
               .then(data => this.$router.push('/news') )
               .catch(err=> console.log(err))
        }
    },
    mounted(){
        fetch(this.url)
        .then(res=>res.json())
        .then(data => this.nouvelle = data)
        .catch(err=> console.log(err))
    }
}
</script>
<style lang="">
    
</style>