<template lang="">
    <div class="matches bg-white ">
      <div class="matches-title d-flex justify-content-between align-items bg-white text-white p-2 border-radius-small flex-row-reverse  ">
        <div class="matche-title large-size font-weight-bold second-main-color">   مباريات {{day}} </div>
        <div class="matche-date large-size font-weight-bold second-main-color"> 2020-12-25 </div>
      </div>
      <div class="matches-button d-flex justify-content-around align-items-center my-2 py-1">
         <router-link v-if="admin" :to="{name : 'CreateMatch'}" class="btn btn-sm btn-primary mr-2"> 
                <h4> craete match </h4>
              </router-link>
        <span
         @click="switchComponents('nav3', 'matchesTomorrow', 'الغد')"
         :class="{ active: nav3 }"
         class="button "> الغد </span>
        <span
         @click="switchComponents('nav1', 'matchesToday', 'اليوم')"
         :class="{ active: nav1 }"
         class="button ml-3"
         > اليوم 
        </span>
        <span
          @click="switchComponents('nav2', 'matchesYesterday', 'الامس')"
         :class="{ active: nav2 }"
          class="button"> الامس </span>

      </div>
       
       <transition name="fade" mode="out-in">
              <component :is="component"></component>
        </transition>
    </div>
</template>
<script>
  import MatchesToday from "@/components/matches/MatchesToday"
  import MatchesYesterday from "@/components/matches/MatchesYesterday"
  import MatchesTomorrow from "@/components/matches/MatchesTomorrow"
export default {
   data(){
     return{
        component : "matchesToday",
         nav1: true,
         nav2: false,
         nav3: false,
         day : "اليوم",
         admin : true
     }
   },
    components : {
      MatchesToday ,
      MatchesYesterday,
      MatchesTomorrow

    },
    methods: {
      switchComponents(n , str, day){
        this.component = str ,
        this.day = day
        if (n === "nav2") {
        this.nav1 = false;
        this.nav3 = false;
        this.nav2 = true;
      } else if (n === "nav3") {
        this.nav1 = false;
        this.nav3 = true;
        this.nav2 = false;
      } else if (n === "nav1") {
        this.nav1 = true;
        this.nav3 = false;
        this.nav2 = false;
      }
         
      }
    },
}
</script>
<style scoped>
span{
  transition: all 0.5s ease;
}
.matches-title{
  border-bottom: 1px solid #eee;
}
.matches .matches-button{
  font-size: 20px;
  cursor: pointer;
}
.active{
  border-bottom: 3px solid var(--main-color);
  color : var(--main-color)
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s, transform 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(10%);
}

@media (max-width : 767px) {
  .matches .matche-title{
font-size: 18px !important;
}
.matches .matche-date{
  font-size: 18px !important;
}
}
@media (min-width : 768px) and (max-width : 991px){
    .matches .matche-title{
font-size: 18px !important;
}
.matches .matche-date{
  font-size: 18px !important;
}
}


</style>