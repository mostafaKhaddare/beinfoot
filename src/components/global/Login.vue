<template >
    <div>
        <div class="row">
            <div class="col-md-5 mx-auto">
                <h1> login </h1>
                <form @submit.prevent="login" >
                    <div class="form-group">
                        <label  for="email">email</label>
                        <input v-model="email"  type="email" id="email" class="form-control">
                    </div>
                    <div class="form-group">
                        <label  for="password">password</label>
                        <input v-model="password"  type="password" id="password" class="form-control">
                    </div>
                    <button class="btn btn-block bg-warning text-white">login</button>
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
        login(){
            firebase.auth().signInWithEmailAndPassword(this.email , this.password).then((res)=> {
                console.log(`you are loggin as ${this.email}`)
                this.$router.push(("/admin/dashboard"))
            }).catch(err=>console.log(err))
        }
    },
}
</script>
