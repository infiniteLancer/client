<template>
    <div>
        <section class="hero is-primary is-fullheight" style="background-image: url('../../img/login-page.jpg')">
            <div v-if="page == 'login'" class="hero-body">
                <div class="container" >
                      <div class="columns is-centered">
                        <div class="column is-5-tablet is-4-desktop is-4-widescreen" style="display:flex; justify-content:space-between">
                        <div class="quotes-area" style="display:flex;justify-content:center;align-items:center;">
              
                            <div class="home-quotes">
                              <h1 style="text-align:right ;color:white; margin-right:100px;margin-left:-200px;font-size: 72px;text-shadow: 3px 2px 7px rgba(0,0,0,0.51);">Tired of unmanageable projects?</h1> 
                            </div>
                            <div id="demo">

                            </div>
                            
              
                        </div>

                        <!-- ------------------- -->
                        <loginPage v-if="page == 'login'" @loginStatus='gantiLogin' @pageStatus='gantiPage'></loginPage>
                        <!-- ------------------- -->

                        </div>
                      </div>
                    </div>

            </div>
            <div v-if="page == 'register'" class="hero-body" style="background-image: url('../../img/register-page.jpg')">

                    <div class="container">
                      <div class="columns is-centered">
                        <div class="column is-5-tablet is-4-desktop is-3-widescreen" style="display:flex; justify-content:space-between">
                        <div class="quotes-area" style="display:flex;justify-content:center;align-items:center;">
                            <div class="home-quotes">
                              <h1 style="text-align:right;color:white; margin-right:100px;font-size: 72px;margin-left:-500px;text-shadow: 3px 2px 7px rgba(0,0,0,0.51);width:500px">Deadlines are our friends & you can be one too!</h1>
                              
                            </div>
                        </div>

                        <!-- ------------------- -->
                        
                        <registerPage @loginStatus='gantiLogin' @pageStatus='gantiPage' >
                           
                        </registerPage>
                          <!-- ------------------- -->

                        </div>
                      </div>
                    </div>
            </div>
        </section>
    </div>
</template>

<script>

import loginPage from '../components/Login-page'
import registerPage from '../components/Register-page'
export default {
    name:"Login",
    data(){
        return {
            page: 'login',
            show: true
        }
    },
    methods: {
        gantiLogin(status){
            this.$emit('loginStatus',status)
        },
        gantiPage(page){
            console.log(page,'ini dari page')
            localStorage.setItem('token')
            this.page = page
        }
    },
    components:{
        loginPage,
        registerPage
    }
}
</script>

<style>

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
