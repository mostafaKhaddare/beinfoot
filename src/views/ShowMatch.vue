<template lang="">
    <div class="show-match row py-2">
        <div  class="col-lg-12 m-auto col-sm-12 bg-white  ">
            <div v-if="error" class="alert alert-danger text-center" role="alert">
                <strong>{{error}}</strong>
            </div>
            <div v-if="match" class="match ">
                <div class="presentation text-center">
                    <h1 class="m-0 p-2  large-size">  
                            <span v-if="match.watch=='شاهد الاهداف'" >
                                نقدم لكم ملخص لمبراة 
                            </span>
                            <span v-else>
                            نقدم لكم البث المباشر لمبراة
                            </span>
                    </h1>
                </div>
                <div class="teams d-flex justify-content-between align-items-center m-1 border-radius-medium p-1">
                    <div class="team-1 d-flex justify-content-between align-items-center">
                        <img  :src="match.imageOne" :alt="match.teamOne" />
                        <div class="name-1 mr-3 font-weight-bold large-size">   {{match.teamOne}} </div>  
                        <span v-if="match.watch=='شاهد الاهداف'"  class=" score bg-danger score-1 medium-size font-weight-bold text-white  p-2 text-center border-radius-small mr-2  "> {{match.resaultOne}} </span>
                    </div>
                    <span  v-if="match.watch=='شاهد الاهداف'"  class=" summury large-size  p-2 border-radius-medium text-white text-center"> ملخص المباراة </span>
                    <span   v-if="match.watch=='شاهد المباراة'"  class=" time large-size p-2 border-radius-medium text-white"> {{match.time}} </span>
                    <span  v-if="match.watch == 'جارية الان'" >
                        <PulseLoader  :size="size" :color="color"/>
                    </span>
                    <div class="team-2 d-flex justify-content-between align-items-center flex-row-reverse">
                        <img :src="match.imageTwo" :alt="match.teamTwo" />
                        <div class="name-2 ml-3 font-weight-bold large-size ">    {{match.teamTwo}}</div>
                        <span v-if="match.watch=='شاهد الاهداف'" class="score bg-danger score-2 medium-size font-weight-bold text-white  p-2 text-center border-radius-small ml-2"> {{match.resaultTwo}} </span>
                    </div>
                </div>
                <div class="quality"></div>
                <div class="video-live">
                    <div 
                        v-if="match.start === true && match.watch ==='جارية الان'" 
                      > 
                    <v-clappr
                            el="custom-player"
                            :source="match.link"
                            :options="options"
                            class="embed-responsive-item"
                    />
                    </div>
                        <video-embed 
                            v-if="match.start === false && match.watch ==='شاهد الاهداف'"
                            :src="match.link2"
                        />
                    <img
                            v-if="match.start === false && match.watch=='شاهد المباراة' "
                            class="not-start-img "
                            src="@/assets/notStart.png"
                            alt="لم تبدا"
                            width="100%"      
                    />
                </div>
                <div @click="redirect" class="refresh-page text-center p-1 m-1 border-radius-small">
                    في حالة توقف البث اضغط  هنا لتحديث الصفحة
                </div>
                <div class="views d-flex  align-items-center pl-2 justify-content-between">
                    <div>
                        <i class="fas fa-eye "></i>
                        <i class="fas fa-infinity ml-2 small-size "></i>
                    </div>
                    <GoBack />
                </div>
            </div>
            <div v-else  class="loading text-center">
                <ClipLoader :size="size2" :color="color2"  />
            </div>
        </div> 
    </div>
</template>
<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
import VClappr from 'v-clappr'
import GoBack from "@/components/global/GoBack"
import {db} from "@/firebase/config"

export default {
    props : ["id" , "slug"],
    data(){
        return{
            loading: true,
            size : '9px',
            color : "#0075ff",
            color2 : "#0075ff",
            size2 : "80px",
            match : null,
            error : '',
            loading: true,
            options: {
                    width: "100%",
                    mute: false,
                    autoplay: true,
                    loop: false,
                    disable_keyboard_shortcuts: false,
                    disable_context_menu: true,
                    mediacontrol: { seekbar: "#2d88ff", buttons: "#fff" },
                    ga: {
                    gaAccount: "G-ZR38R7HQKJ",
                    gaTrackerName: "playerTrack",
                    },
                    watermark: {},
            },
            videoOptions: {
        live: true,
        },
        }
    },
    components : {
        PulseLoader,
        ClipLoader,
        VClappr, 
        GoBack
    },
    methods: {
            redirect(){
            location.reload();
    }
    },
    async mounted(){
        try {
            const res = await db.collection("matches").doc(this.id).get();
            if(!res.exists){
                throw Error("ce match n'a pas exists")
            }
            this.match = {...res.data() , id : this.id}
        } catch (err) {
            this.error = err.message
        } 
    }

}
</script>
<style scoped>

.player {
  position: absolute !important;
  width: 100%;
  height: 60%;
}
    #mycustomid{
        width: 100%;
    }
    .refresh-page{
        color: red;
        cursor: pointer;
        font-size: 12px;
        border: 1px solid #eee;
    }   
    .teams{
        border: 1px solid #eee;
    }
    .team-1{
        width: 40%;
    }
    .team-2{
        width: 40%;
    }
    .team-1 img , .team-2 img{
        width: 64px;
        height: 64px;
        border-radius: 50%;
    }
    .video-live{
        width: 100%;
    }
     .score{
        width: 30px;
        height: 30px;
        line-height: 1;
        background: var(--main-color);
    }
    .summury{
        background: var(--main-color);
    }
    .time{
        background: var(--main-color);
    }
    .loading{
        padding: 100px 0;
    }

/** small : 768px */
@media  (max-width : 767px) {
    .presentation h1{
        font-size: 12px !important ;
    }
    .large-size{
        font-size: 10px !important;
    }
    .team-2 .name-2{
    font-size: 11px !important;
    }
    .team-1 img , .team-2 img{
    width: 32px !important;
    height: 32px !important;
    }
    .score{
        width: 23px;
        height: 23px;
        line-height: 0.5;
    }
    .summury{
        width: 30%;
    }
}
@media  (min-width : 768px) and (max-width: 991px){
    .presentation h1{
        font-size: 12px !important ;
    }
    .large-size{
        font-size: 10px !important;
    }

    .team-1 img , .team-2 img{
        width: 32px !important;
        height: 32px !important;
    }
    .score{
        width: 23px;
        height: 23px;
        line-height: 0.5;
    }
    

}
</style>