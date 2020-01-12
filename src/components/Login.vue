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
            if(!user) return;
            this.$auth.loggedIn = true;
            this.$router.push(this.$route.query.redirect);
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