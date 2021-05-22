<template lang="">
    <div>
        
          <router-link :to="{name : 'show-news' , params : {id : nouvelle.id , slug : nouvelle.title}}"  >
                    <div class="news mb-4 p-2">
                        <div class="card border-radius-large">
                            <img class="card-img-top p-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQMR9CO1D4p4fFQyRsXubbg_14OIDBDkJTOg&usqp=CAU" alt="">
                            <div class="card-body text-right">
                                <p class="card-text date font-weight-bolder text-right"> {{nouvelle.date}} </p>
                                <h4 class="card-title large-size border-radius-medium mt-2 font-weight-bold ">{{nouvelle.title}}  </h4>
                                <span class=" mb-2 button main-bg text-white p-2 font-weight-bold mt-1 border-radius-small">
                                    اكمل القراءة
                                </span>
                                <div>
                                    <div v-if="admin" >
                                        <button @click.prevent="deletePost" class="btn btn-sm btn-danger mr-2"> delete </button>
                                        <router-link :to="{name : 'EditNews' , params : {id : nouvelle.id}}" class="btn btn-sm btn-warning mr-2"> Edit </router-link>
                                        <button class="btn btn-sm btn-primary mr-2"> add </button>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
            </router-link>
    </div>
</template>
<script>
export default {
    props : ['nouvelle'] ,
    data(){
        return{
              url : `http://localhost:5000/news/${this.nouvelle.id}`,
              admin : false
        }
    },
    methods: {
        deletePost(){
            fetch( this.url , {method : "DELETE"})
            .then(res=> this.$emit('delete' , this.nouvelle.id))
            .catch(err=> cosole.log(err))
        }
    },
    
}
</script>
<style scoped>
 a{
        text-decoration: none;
        color: #222;
        transition: all 0.5s ease;
    }
    a:hover{
        text-decoration: none;
        color:var(--main-color);
    }
.card .card-img-top {
    border-radius: 30px;
}  
.card .card-body .date{
    color: #8a8a8a;
    letter-spacing: 2px;
} 
.card .card-body .button{
    display: inline-block;
}

/** small : 768px */
@media  (max-width : 767px) {
    .date{
        text-align: right;
    }
  
    .card .card-body h4{
    font-size: 15px !important;
}  
.card .card-body .button{
   font-size: 12px !important;
}
}
@media  (min-width : 768px) and (max-width: 991px){
    .date{
        text-align: right;
    }

        .card .card-body h4{
    font-size: 15px !important;
}  
.card .card-body .button{
   font-size: 12px !important;
}
}
</style>