<template>
<v-btn color="primary" @click="signIn">
    Login
</v-btn>
</template>
<script>
export default {
    name: "Login",
    props: [],
    created () {
        this.onAuthStateChanged()
    },
    methods: {
        onAuthStateChanged () {
            this.$firebase.auth().onAuthStateChanged( user => {
            if(!user){
                 this.$auth.logout()
                 return;
            }
            this.$auth.login()
            this.$router.push({path:"/add", meta: { requiresAuth: true, loggedIn:true }}).catch(err => {if(err)console.log(err)})
            })
        },
        signIn () {
            const provider = new this.$firebase.auth.GoogleAuthProvider()
            this.$firebase.auth().signInWithPopup(provider)
        },
        signOut () {
            this.$firebase.auth().signOut()
        },
    }
}
</script>

<style>
</style>