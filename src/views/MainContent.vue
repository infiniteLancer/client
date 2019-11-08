<template>
  <div class="home">

    <Navbar @changePage="changePage"></Navbar>

    <HomePage v-if="page === 'home'"></HomePage>

    <CreateJob v-if="page === 'create'"></CreateJob>

    

    <div>
      <login v-if="!isLogin" @loginStatus='gantiLogin'></login>
    </div>
    <!--navbar-->
  </div> <!--end content-->
</template>

<script>
  import Login from './Login '
  import HomePage from '../components/Home-page'
  import CreateJob from '../components/Create-jobs'
  import Navbar from '../components/Navbar'
  
  export default {
    data() {
      return {
        page: 'home',
        isImageModalActive1: false,
        isCardModalActive2: false,
        isCardModalActive3: false,
        tags:[],
        dropFiles: [],
        isLogin : false,
      };
    },
    components:{
      Login,
      HomePage,
      CreateJob,
      Navbar
    },
    methods: {
      deleteDropFile(index) {
          this.dropFiles.splice(index, 1)
      },
      gantiLogin(status){
          console.log('dari ganti login')
          this.isLogin = status
      },
      changePage(page){
        this.page = page
      }
    },
    created(){
      if(localStorage.getItem('token')){
        this.isLogin = true
      }
    }
  };
</script>

<style scoped>
* {
  padding: 0px;
  margin: 0px;
}

body {
  font-family: "Poppins", sans-serif;
}

.container-fluid {
    width: 100%;
    padding-right: 20%;
    padding-left: 20%;
    margin-top: 10%;
    
}
#navbar-home {
  background: #e0eafc; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #cfdef3,
    #e0eafc
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #cfdef3,
    #e0eafc
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

h1,
#judul {
  font-size: 50px;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom:10px;
  font-weight: 500px;
  color: #353535;
}

.main-judul p {
  margin-bottom: 80px;
}

.main-judul {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#image-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

#detail-image {
  width: 300px;
  margin: 2px;
  box-shadow: 10px 10px 43px -22px rgba(0,0,0,0.53);
  animation: drop 2s ease;
  margin: 20px
}

#detail-image:hover {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}

.contents{
  margin-left:40px;
  margin-top:20px;
  margin-bottom:20px;
  margin-right:40px;
}

@keyframes drop {
  0% {
    opacity: 0;
    transform: translateY(-80px);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

.columns {
    margin-left: -40em;
    margin-right: -40rem;
    margin-top: -rem;
    
}

.box {
    background-color: white;
    border-radius: 25px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    color: #4a4a4a;
    display: block;
    padding: 4rem;
}

.input, .taginput .taginput-container.is-focusable, .textarea, .select select {
    background-color: white;
    border-color: #dbdbdb;
    border-radius: 25px;
    color: #363636;
}

.button.is-success {
    margin-top:20px;
    background-color: #db349b;
    border-color: transparent;
    color: #fff;
    border-radius: 25px;
    width: 120px;
    margin: 20px;
    height: auto
}

.label {
    color: #363636;
    display: block;
    font-size: 1.5rem;
    font-weight: 600;
}

</style>

