<template>

<div>
  
        <form action="" class="box" style="padding:2rem;">
          <div class="field">
            <label for="" class="label">Username</label>
            <div class="control has-icons-left">
              <input type="username" placeholder="e.g. bobsmith" class="input">
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
            </div>
          </div>

            <div class="field">
            <label for="" class="label">Email</label>
            <div class="control has-icons-left">
              <input type="text" placeholder="e.g. bobsmith@gmail.com" class="input">
              <span class="icon is-small is-left">
                <i class="fa fa-envelope"></i>
              </span>
            </div>
          </div>

          <div class="field">
            <label for="" class="label">Password</label>
            <div class="control has-icons-left">
              <input type="password" placeholder="*******" class="input">
              <span class="icon is-small is-left">
                <i class="fa fa-lock"></i>
              </span>
            </div>
          </div>

          <div class="field">
            <label for="" class="label">Phone</label>
            <div class="control has-icons-left">
              <input type="phone" placeholder="+62 " class="input">
              <span class="icon is-small is-left">
                <i class="fas fa-mobile-alt"></i>
              </span>
            </div>
          </div>

          <div class="field">
            <label for="" class="label">Portofolio</label>
            <div class="control has-icons-center">
              <section>
                  <b-field>
                      <b-upload v-model="dropFiles"
                          multiple
                          drag-drop>
                          <section class="section">
                              <div class="content has-text-centered">
                                  <p>
                                      <b-icon
                                          style="align-items:center"
                                          icon="upload"
                                          size="is-medium">
                                      </b-icon>
                                  </p>
                                  <p>Drop your files here or click to upload</p>
                              </div>
                          </section>
                      </b-upload>
                  </b-field>

                  <div class="tags">
                      <span v-for="(file, index) in dropFiles"
                          :key="index"
                          class="tag is-primary" >
                          {{file.name}}
                          <button class="delete is-small"
                              type="button"
                              @click="deleteDropFile(index)">
                          </button>
                      </span>
                  </div>
                    <template>
                        <section>
                            <b-field label="what is your speciality">
                                <b-taginput
                                    v-model="tags"
                                    ellipsis
                                    icon="label"
                                    placeholder="Add a tag">
                                </b-taginput>
                            </b-field>
                        </section>
                    </template>
              </section>
            </div>
          </div>

          

          <div class="field" style="display:flex; justify-content:space-between; margin-right:100px; margin-left:100px">
            <button class="button is-success">
              Register
            </button>
             <button type="submit" class="button is-success">
            Login
            </button>
          </div>
        </form>

                
</div>
    


</template>

<script>
export default {
    props:{
      
    },
    data(){
      return{
        email :'',
        password : '',
        username: '',
        phone : '',
        dropFiles : [],
        tags : []
      }
    },
    login(){
        this.$emit('pageStatus','login')
    },
    register(){
        // axios({
            //     method: 'post',
            //     url: '/user/12345',
            //     data: {
                    // email :'',
                    // password : '',
                    // username: '',
                    // phone : '',
                    // dropFiles : [],
                    // tags : []
            //     }
            //     })
                // .then(({data}) => {
                //     localStorage.setItem('token', 'data')
                //     this.$emit('loginStatus', true)
                // })
                // .catch(err => {
                //     console.log(err)
                // })
          // console.log('dari register')
        localStorage.setItem('token','lalala')
        this.$emit('loginStatus',true)
      }
}
</script>

<style>

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