<template>

<div>
    <login v-if="!isLogin" @loginStatus='gantiLogin'></login>
</div>
    


</template>
<script>

  import login from './views/Login '

  export default {
  data() {
    return {
        tags:[],
        dropFiles: [],
        isLogin : false,
      }
    },
  components:{
    login
  },
  methods: {
          deleteDropFile(index) {
              this.dropFiles.splice(index, 1)
          },
          gantiLogin(status){
              console.log('dari ganti login')
              this.isLogin = status
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

