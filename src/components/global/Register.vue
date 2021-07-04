<template >
    <div>
        <div class="row">
            <div class="col-md-5 mx-auto">
                <h1> register </h1>
                <form @submit.prevent="register" >
                    <div class="form-group">
                        <label  for="email">email</label>
                        <input v-model="email"  type="email" id="email" class="form-control">
                    </div>
                    <div class="form-group">
                        <label  for="password">password</label>
                        <input v-model="password"  type="password" id="password" class="form-control">
                    </div>
                    <div>
                        email : {{email}} ,
                        password : {{password}}
                    </div>
                    <button class="btn btn-block bg-warning text-white">Register</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
    import firebase from 'firebase'
export default {
    name :"Register",
    data(){
        return{
                email : "",
                password : ""
        }
    },
    methods: {
        register(){
            firebase.auth().createUserWithEmailAndPassword(this.email , this.password).then((res)=> {
                console.log(`account created with ${this.email}`)
                this.$router.push(("/admin/login"))
            }).catch(err=>console.log(err))
        }
    },
}
</script>
<style lang="">
    
</style>