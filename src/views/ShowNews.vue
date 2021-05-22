<template>
    <div class="show-news row pt-2">
        <aside class="col-lg-4  d-sm-none  d-lg-block">
        </aside>
        <div class="col-lg-8 col-sm-12">
            <div class="card text-right">
                <div class="card-body ">
                    <GoBack/>
                    <h4 class="card-title mt-3 font-weight-bold"> {{nouvelle.title}} </h4>
                    <p class="card-text text-right date font-weight-bolder"> {{nouvelle.data}} </p>
                 </div>
                <img class="card-img-top p-2 border-radius-large" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQMR9CO1D4p4fFQyRsXubbg_14OIDBDkJTOg&usqp=CAU" alt="">
                <div class="card-body">
                    <p class="card-text"> 
                       {{nouvelle.content}}
                     </p>
                </div>
            </div>
        </div>  
    </div>
</template>
<script>
    import GoBack from '@/components/global/GoBack'
export default {
    props : ['id' , "slug"],
    data(){
        return{
           nouvelle : {}
        }
    },
    components : {
        GoBack
    },
    mounted(){
         fetch(`http://localhost:5000/news/${this.id}`)
         .then(res => res.json())
         .then(data => this.nouvelle = data)
    } 
}
</script>
<style>
p{
        text-align: justify;
        line-height: 1.8;
    }
.card .card-body .date{
    color: #8a8a8a;
    letter-spacing: 2px;
}


@media  (max-width : 767px) {
    .card .card-body h4{
    font-size: 15px !important;
}  
p{
    line-height: 1.6;
}
}
@media  (min-width : 768px) and (max-width: 991px){
        .card .card-body h4{
        font-size: 15px !important;
}  

}
</style>