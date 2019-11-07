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

</style>