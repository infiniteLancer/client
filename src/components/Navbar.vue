<template>
<div>

    <b-navbar id="navbar-home" style="height:120px;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.05);background:#f8f8f8;">
            <template slot="brand">
            </template>
            <template slot="start">
            
                <b-navbar-item style="font-size:34px; font-weigth:bold; margin-right:30px" v-on:click="generatePage('home')"  href="#">Infinite Hub</b-navbar-item>
                <b-navbar-item style="font-size:24px; margin-right:30px" @click="isCardModalActive = true" href="#">Post Job</b-navbar-item>
                <b-navbar-item style="font-size:24px; margin-right:30px" v-on:click="generatePage('myList')"  href="#">My List</b-navbar-item>
                <b-navbar-item tag="div">

            </template>
                <template slot="end">
                    <b-navbar-item tag="div">
                        <div class="buttons">
                            <a class="button is-info">
                                <strong style="color:white" v-on:click="removeLocalStorage()">Logout</strong>
                            </a>
                        </div>
                    </b-navbar-item>
                </template>
            <a  href="#">

    </b-navbar>
     <b-modal :active.sync="isCardModalActive" :width="1000" scroll="keep">
    <CreateJob @closeModal="closeModal"></CreateJob>
    </b-modal>


    

</div>

</template>

<script>

import CreateJob from '../components/Create-jobs'
import MyList from '../components/My-list'

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
        },
        removeLocalStorage(){
            localStorage.clear()
            this.$emit('loginStatus',false)
        },
        closeModal(status){
            this.isCardModalActive = status
        }
    },
    components:{
        CreateJob,
        MyList
    }
    

}
</script>

<style>

</style>