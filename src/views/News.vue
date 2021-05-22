<template lang="">
    <div class="news-table bg-white  mt-2">
        <div class="news-title text-right second-main-color bg-white p-2 mb-2 font-weight-bold large-size border-radius-small">
               اخبار الكرة  
        </div>
          <router-link v-if="admin" :to="{name : 'CreateNews'}" class="btn btn-sm btn-primary mr-2"> 
                <h4> craete news </h4>
              </router-link>
        <div class="row flex-row-reverse ">
            <div class="col-md-4 col-lg-6 col-sm-12" v-for="(nouvelle, index) in news" :key="nouvelle.id" >
               <OneNews :nouvelle="nouvelle" @delete="handleDelete" />
            </div>
        </div>
    </div>
</template>
<script>
import OneNews from "@/components/news/OneNews"
export default {
  components : {
      OneNews
  },
  data(){
      return{
          news : [],
          admin : false
      }
  },
  methods: {
    handleDelete(id){
       this.news = this.news.filter(nouvelle => nouvelle.id !== id)}
  },
  mounted() {
      fetch("http://localhost:5000/news")
      .then(res=> res.json())
      .then(data => this.news = data)
      .catch(err => console.log(err))
  }, 
}
</script>
<style scoped>
.news-title{
        border-bottom: 1px solid #eee;
    }
/** small : 768px */
@media  (max-width : 767px) {
    .news-title{
        font-size: 18px !important;
       
    }
}
@media  (min-width : 768px) and (max-width: 991px){
    .news-title{
        font-size: 18px !important;
    }
}
</style>