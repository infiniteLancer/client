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
import axios from '../../apis/server'
import Swal from 'sweetalert2'

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
        tags : [],
        Toast : Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500
        })
      }
    },
    login(){
        this.$emit('pageStatus','login')
    },
    register(){
      axios({
				method: 'post',
				url: '/register',
				data: {
					username: this.username,
					email: this.email,
          password: this.password,
          phone: this.phone,
          skill: this.tags,
          imgUrl: this.dropFiles
				}
			})
        .then(({data}) => {
          localStorage.setItem('token', data.token)
					localStorage.setItem('name', data.username)
          this.$emit('loginStatus',true)
          Toast.fire({
						icon: 'success',
						title: 'Register successfully'
					})
        })
        .catch(err => {
					Swal.fire({
						icon: 'error',
						title: 'Sorry,',
						text: err.response.data.errors.join(', ')
					})
				})
      }
}
</script>

<style>

</style>