<template lang="">
    <div class="show-match row py-2">
        <aside class="col-lg-4  d-sm-none  d-lg-block">
        </aside>
        <div class="col-lg-8 col-sm-12 bg-white ">
            <div v-if="match" class="match ">
                <div class="presentation text-center">
                    <h1 class="m-0 p-2  large-size"> نقدم لكم البث المباشر لمبراة </h1>
                </div>
                <div class="teams d-flex justify-content-between align-items-center m-1 border-radius-medium p-1">
                    <div class="team-1 d-flex justify-content-between align-items-center">
                        <div class="flag-1 mr-3"></div>
                        <div class="name-1 mr-3 font-weight-bold large-size ">   {{match.teamOne}} </div>   
                    </div>
                    <span>
                       <PulseLoader :size="size" :color="color"/>
                    </span>
                   <div class="team-2 d-flex justify-content-between align-items-center flex-row-reverse">
                         <div class="flag-2 ml-3"></div>
                         <div class="name-2 ml-3 font-weight-bold large-size ">    {{match.teamTwo}}</div>   
                   </div>
                </div>
                <div class="quality"></div>
                <div class="video-live">
                     <v-clappr
                         v-if="match.start === true && match.watch ==='جاريةالان'"
                         el="custom-player"
                         :source="source"
                         :options="options"
                      />
                        <video-embed 
                         v-if="match.start === false && match.watch ==='شاهد الاهداف'"
                         src="https://www.youtube.com/watch?v=s4ObxcdXoFE"></video-embed>
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
                <div class="views d-flex  align-items-center pl-2">
                    <i class="fas fa-eye "></i>
                    <i class="fas fa-infinity ml-2 small-size "></i>
                </div>
            </div>
            <div v-else  class="text-center large-size font-weight-bold p-5" >
                loading ...
            </div>
        </div> 
    </div>
</template>
<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import VClappr from 'v-clappr'

export default {
    props : ["id" , "slug"],
    data(){
        return{
          size : '9px',
          color : "#88cdf6",
          match : null,
          loading: true,
          source:'http://cdn-hls.globecast.tv/live/ramdisk/al_aoula_inter/hls_snrt/index.m3u8',
          options: {
                 width: "100%",
                 height: 400,
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
        source: {
                 type: "application/x-mpegURL",
                 src: "http://megaott.cx:80/live/548082790118581/993636926437833/18177.m3u8",
                 withCredentials: false,
        },
        live: true,
      },
        }
    },
    components : {
        PulseLoader,
        VClappr,
     
    },
    methods: {
         redirect(){
              location.reload();
         }
    },
    mounted(){
             fetch(`http://localhost:5000/matches/${this.id}`)
             .then(res => res.json())
            .then(data => this.match = data )
    }

}
</script>
<style scoped>
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
    .flag-1{
        width: 64px;
        height: 64px;
        background: #eee;
        border-radius: 50%;
    }
    .flag-2{
        width: 64px;
        height: 64px;
        background: #eee;
        border-radius: 50%;
    }
    .video-live{
        width: 100%;
    }
   
   


/** small : 768px */
@media  (max-width : 767px) {
    .presentation h1{
        font-size: 12px !important ;
    }
.team-1{
    flex-direction: column !important;
}
.team-2{
    flex-direction: column !important;

}
.team-1 .name-1{
    font-size: 11px !important;
}
.team-2 .name-2{
    font-size: 11px !important;
}

.flag-1{
    width: 32px !important;
    height: 32px !important;
}
.flag-2{
    width: 32px !important;
    height: 32px !important; 
}

}

@media  (min-width : 768px) and (max-width: 991px){
    .presentation h1{
        font-size: 12px !important ;
    }
.team-1 .name-1{
    font-size: 11px !important;
}
.team-2 .name-2{
    font-size: 11px !important;
}

.flag-1{
    width: 32px !important;
    height: 32px !important;
}
.flag-2{
    width: 32px !important;
    height: 32px !important; 
}


}


</style>