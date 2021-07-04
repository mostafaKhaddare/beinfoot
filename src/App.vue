<template>
  <div id="app">
    <Header/>
    <NavBar/>
    <main class="py-3">
          <div class="container">
              <router-view></router-view>
        </div>
    </main>
    <Footer/>
  </div>
</template>
<script>

import Header from "@/components/global/Header.vue"
import NavBar from "@/components/global/NavBar.vue"
import Footer from "@/components/global/Footer.vue"
export default {
  components: {
    Header,
    NavBar,
    Footer
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700&display=swap');
/* footer{
  background: var(--main-color);
  padding: 8px;
  text-align: center;
} */
body{
  background-color: var(--bg-gris);
}
#app{
  overflow-x: hidden;
}
</style>
