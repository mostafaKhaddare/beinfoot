<template lang="">
                <article v-if="match" class="match p-2 mb-2 border-radius-medium bg-gris">
                    <div class="teams d-flex justify-content-between align-items-center">
                        <div class="team-1 d-flex  align-items-center">
                            <img class="flag-1 mr-3":src='match.imageOne' :alt="match.teamOne" />
                            <div class="name-1  large-size font-weight-bold ">  {{match.teamOne}} </div>   
                        </div>
                        <div class="button-score d-flex justify-content-between align-items-center">
                            <span v-if="match.watch=='شاهد الاهداف' && match.day ==`today` || match.day=='yesterday' "  class=" score score-1 medium-size font-weight-bold bg-white p-2 text-center border-radius-small mr-2  "> {{match.resaultOne}} </span>
                            <span v-if="match.day == 'today' || match.day =='yesterday'" 
                            class="button medium-size text-center p-1 text-white border-radius-small"
                            :class="
                            match.watch == 'شاهد المباراة'
                            ? active
                            : match.watch == 'جارية الان'
                            ? encore
                            : finish
                            "
                            >
                                <i v-if="match.watch=='شاهد المباراة'" class="far fa-eye "></i>
                                <i v-if="match.watch=='شاهد الاهداف'"  class="fas fa-check  "></i>
                                <BeatLoader class="d-inline mr-1" v-if="match.watch=='جارية الان'" :color="color" :size="size"/>
                                    {{match.watch}}
                            </span>
                            <span v-if="match.day == 'tomorrow'" class="button medium-size text-center p-1 text-white border-radius-small bg-primary" >  {{match.time}} </span>
                            <span v-if="match.watch=='شاهد الاهداف' && match.day =='today' || match.day=='yesterday'" class="score score-2 medium-size font-weight-bold bg-white p-2 text-center border-radius-small ml-2"> {{match.resaultTwo}} </span>
                            </div>
                            <div class="team-2  d-flex  align-items-center flex-row-reverse">    
                                    <img class="flag-2 ml-3" :src='match.imageTwo' :alt="match.teamOne" />
                                <div class="name-2 large-size font-weight-bold  ">  {{match.teamTwo}} </div>   
                            </div>
                        </div>
                    <div class="match-type d-flex justify-content-between align-items-center">
                        <div class="time medium-size font-weight-bold"> <i class="far fa-clock"></i> {{match.time}} </div>
                        <div class="category medium-size font-weight-bold"> {{match.type}}   <i class="text-warning fas fa-trophy "></i>  </div>
                    </div>
                </article>
</template>
<script>
import BeatLoader from 'vue-spinner/src/BeatLoader.vue'
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
export default {
    props : ['match'],
    data(){
        return{
            finish : "finish",
            active : "active",
            encore :'encore',
            size : '5px',
            color : '#fff',
            size2 : "30px",
            color2 : "#f00",
        }
    },
    components : {
        BeatLoader,
        ClipLoader
    },
}
</script>
<style scoped>

.active{
        background: var(--main-color);

    }
    .finish {
        background-color: #e61414;
    }
    .encore {
        background-color: #e0e01a;
    }
    a{
        text-decoration: none;
        color: #222;
    }
    a:hover{
        text-decoration: none;
        color: #222;
    }
    .match{
        background: #f7f6f6;
    }
    .team-1{
        width: 40%;
    }
    .team-2{
        width: 40%;
    }

    .match-type{
        color : #5c5c5c
    }
   
    .flag-1{
        width: 64px;
        height: 64px;
        border-radius: 50%;
     
    }
    .flag-2{
        width: 64px;
        height: 64px;
        border-radius: 50%;
    
    }
    .button{
        margin: 0 auto;
        width: 130px;

    }
    .score{
        width: 30px;
        height: 30px;
        line-height: 1;
    }

    .button-score{
        width : 30%;   
    }
    .loading{
        padding: 100px 0;
    }
    
@media  (min-width : 768px) and (max-width: 991px){

    .team-1 .name-1{
        font-size: 11px;
        font-weight: bold;   
 margin: 0 0 8px 0 !important;    }
    .team-2 .name-2{
        font-size: 11px;
        font-weight: bold; 
 margin: 0 0 8px 0 !important;
    }
    .team-1 .score-1{
        font-size: 1em;
        font-weight: bold;
    }
    .team-2 .score-2{
        font-size: 1em;
        font-weight: bold;
    }
    .match-type .time{
        font-size: 11px;
    }
    .match-type .category{
        font-size: 11px;
    }
    .button-score{
        width: 40%;
    }
    .button{
        width: 130px !important; 
        font-size: 9px !important;
        padding: 4px;
        margin: 0 auto !important;
    }
    .flag-1{
        width: 32px;
        height: 32px;
        margin-bottom: 5px;

    }
    .flag-2{
        width: 32px;
        height: 32px; 
        margin-bottom: 5px;

    }
}
/** small : 768px */
@media  (max-width : 767px) {
    .team-1{
        flex-direction: column !important;
    }
    .team-2{
        flex-direction: column !important;

    }
    .team-1 .name-1{
        font-size: 11px !important;  
        margin-bottom: 5px;
        margin: 0 0 8px 0 !important;

    }
    .team-2 .name-2{
        font-size: 11px !important; 
        margin: 0 0 5px 0 !important;

    }
    .team-1 .score-1{
        font-size: 1em;
        font-weight: bold;
    }
    .team-2 .score-2{
        font-size: 1em;
        font-weight: bold;
    }
    .match-type .time{
        font-size: 11px !important;  
    }
    .match-type .category{
        font-size: 11px !important;
    }
     .button-score{
       width: 43%;
    }
    .button{
        width: 100px !important; 
        font-size: 9px !important;
        padding: 4px !important;
        margin: 0 auto;
    }
     .flag-1{
        width: 32px;
        height: 32px;
        margin-bottom: 5px;

    }
    .flag-2{
        width: 32px;
        height: 32px; 
        margin-bottom: 5px;

    }
    .score{
        width: 20px;
        height: 20px;
        line-height: 0.5;
    }
    .score-1{
        margin-right: 5px;
    }
    .score-2{
        margin-left: 5px ;
    }

 }

</style>