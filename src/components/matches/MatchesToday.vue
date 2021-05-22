<template lang="">
    <div class="matche-table p-2">
          <div class="row" v-if="matches" > 
              <div class="col-md-12 "  v-for="(match, index) in matches " :key="match.id">
                   <OneMatch :match="match"   @delete="handleDelete" />
            </div> 
         </div>
    </div>
</template>
<script>
import OneMatch from  "@/components/matches/OneMatch"
export default {
    data(){
        return {
            matches: []
        }
    },
    components : {OneMatch},
    mounted(){
        
            fetch('http://localhost:5000/matches')
        .then(res => res.json())
        .then(data => this.matches = data)
        .catch(err => console.log(err))
        
    },
    methods: {
         handleDelete(id){
       this.matches= this.matches.filter(match => match.id !== id)}
  },
}
</script>
