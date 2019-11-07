<template>

<div>
    <login v-if="!isLogin" @loginStatus='gantiLogin'></login>
    <div class="container-fluid">
      <form action="" class="box" style="padding:5rem;">
          <div class="field">
            <label for="" class="label">Name</label>
            <div class="control has-icons-left">
              <input type="username" placeholder="e.g. bobsmith" class="input">
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
            </div>
          </div>

          <b-field label="Message"
              :label-position="Description">
              <b-input maxlength="200" type="textarea"></b-input>
          </b-field>

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

.container-fluid {
    width: 100%;
    padding-right: 20%;
    padding-left: 20%;
    margin-top: 10%;
    m: ;
    margin-bottom: 10%;
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

