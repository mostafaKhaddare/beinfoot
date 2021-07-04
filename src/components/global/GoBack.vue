<template>
  <span @click="goBack" class="bg-dark  p-1 text-white font-weight-bold medium-size rounded mb-1">
    <i class="far fa-hand-point-left"></i> العودة الى الرئيسية 
  </span>
</template>

<script>
export default {
  name: "goBack",
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped>
span {
  cursor: pointer;
  font-size: 12px;
}

@media (max-width: 767px) {
  span {
    font-size: 9px !important;
  }
}
@media  (min-width : 768px) and (max-width: 991px){
span {
    font-size: 9px !important;
  }  

}
</style>
