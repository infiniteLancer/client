<template>
<div>

    <b-navbar id="navbar-home" style="height:120px;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.05);background:#f8f8f8;">
            <template slot="brand">
            </template>
            <template slot="start">
            
            <b-navbar-item style="font-size:24px; margin-right:30px" v-on:click="generatePage('home')"  href="#">Infinite Hub</b-navbar-item>
            <b-navbar-item style="font-size:24px" @click="isCardModalActive = true" href="#">Post Job</b-navbar-item>
            <b-navbar-item tag="div">
                <b-button style='margin-right:200px' type="is-info">logout</b-button>
            </b-navbar-item>
            </template>
            <a  href="#">

    </b-navbar>
     <b-modal :active.sync="isCardModalActive" :width="1000" scroll="keep">
    <CreateJob></CreateJob>
    </b-modal>

</div>

</template>

<script>

import CreateJob from '../components/Create-jobs'

export default {
    name:"Navbar",
    data(){
        return {
            isCardModalActive : false   
        }
    },
    methods: {
        generatePage(page){
            this.$emit('changePage',page)
        }
    },
    components:{
        CreateJob
    }
    

}
</script>

<style>

</style>