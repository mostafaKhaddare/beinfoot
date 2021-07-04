<template lang="">
    <nav class="main-bg">
        <div class="container  d-flex justify-content-between align-items-center">
            <div>
                <span class="logo main-bg text-white"> b </span>
            </div>
            <ul ref="links" class="nav-links d-flex justify-content-around align-items-center m-0 w-50 flex-row-reverse ">
                <li class="list-inline-item">
                    <router-link class="text-white font-weight-bold" exact :to="{ name : 'Home' }"> مباريات  </router-link>
                </li>
                <li class="list-inline-item">
                    <router-link class="text-white font-weight-bold" exact :to="{ name : 'News' }"> الاخبار </router-link>
                </li>
                <li class="list-inline-item">
                    <router-link class="text-white font-weight-bold" exact :to="{name : 'AboutUs'}"> معلومات عنا </router-link>
                </li>
                <li class="list-inline-item">
                    <router-link class="text-white font-weight-bold" exact to="http://google.com" target="_blank">  صفحة انتستغرام </router-link>
                </li>
            </ul>
            <div @click="navSlide" ref="burger" class="burger">
                <div class="line1 bg-white"></div>
                <div class="line2 bg-white"></div>
                <div class="line3 bg-white"></div>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    methods: {
        navSlide(){
            const nav = this.$refs.links 
            const navLinks = nav.children
            const burger = this.$refs.burger
            const body = nav.ownerDocument.body
            const path = this.$router.history.current.path
            //slide navbar
            nav.classList.toggle("nav-active")
             //animate burger
            burger.classList.toggle('toggle')
             //fixed body
            if( path === '/' || path === "/news"){
                body.style.position = 'fixed'
            }
            
             //animate links   
            navLinks.forEach((link , index) => { 
                if(link.style.animation){
                    link.style.animation = ""
                    body.style.position = ''
                }else{
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`  
                }
            });
        },
    },
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sofadi+One&display=swap');

.router-link-active{
border-bottom: 3px solid #fff;
padding: 2px;
}
.container{
    min-height: 8vh;
}
.nav-links{
    z-index: 1111;
}
.nav-links li a{
    text-decoration: none;
    font-size: 14px;
}
.burger{
    display: none;
}
.burger div{
    width: 25px;
    height: 3px;
    margin: 5px;
    transition: all 0.3s ease;
}
.logo{
    border-radius: 50%;
    padding: 7px 12px;
    box-shadow: 5px 0px 18px #fff;
    font-size: 35px;
    font-weight: bold;
    font-family: 'Sofadi One', cursive;
}


/* medium 992 px */
@media  (min-width : 768px) and (max-width: 991px) {
    nav{
        position: relative;
    }
    .nav-links{
    position: absolute;
    top: 8vh;
    right: 0px;
    height: 82vh;
    background-color: var(--main-color);
    flex-direction: column !important;
    width: 50%;
    transform: translateX(100%);
    transition: transform 0.5s ease-in;
}
.nav-links li{
    opacity: 0;
}
.burger{
    display: block;
}}
.logo{
    font-size: 22px;
}
/** small : 768px */
@media screen and  (max-width : 767px) {
    nav{
        position: relative;
    }
    .nav-links{
    position: absolute;
    top: 8vh;
    right: 0px;
    height: 82vh;
    background-color: var(--main-color);
    flex-direction: column !important;
    width: 50%;
    transform: translateX(100%);
    transition: transform 0.5s ease-in;
    
}
.nav-links li{
    opacity: 0;
}
.burger{
    display: block;
}

}
.nav-active{
    transform: translateX(0%);}

.toggle .line1{
transform: rotate(-45deg) translate(-5px , 6px);
}
.toggle .line2{
    opacity: 0;
}
.toggle .line3{
    transform: rotate(45deg) translate(-5px , -6px);
    
}
.logo{
    font-size: 28px;
    padding: 7px 11px 0 12px;

}
/* animation */

</style>