<template>
     <div>
       
      <!--end navbar -->
      <!--content-->

      <!--judul-->
      <div class="main-judul" style="display:flex;justify-content:center;margin-bottom:75px;margin-top:50px;">
        <center><img src="../../img/hello.gif" alt="Trulli" width="500" height="333"></center>
        <h1>One stop solution</h1>
        <h1 style="font-size:24px;padding-top:-300px; font-style: italic;" >for you to hire or to be hired</h1>
        
      </div>
      <!--end judul -->

      <!--listGambar-->
      <div class="container" id="image-container" v-for="(vacancy, i) in imageVacancy" :key="i">
      

        <div class="container" id="detail-image">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <a @click="isCardModalActive = true; index = i" href="#">
                  <img
                    :src="vacancy.reference[0]"
                    alt="Placeholder image"
                  />
                </a>
              </figure>
              <div class="contents">
                <h2 style="font-weight:bold; font-size:22px">{{vacancy.name}}</h2>
                <hr style="margin-top:10px; margin-bottom:10px">
                <h4 style="font-style:italic">{{vacancy.deadline}}</h4>
              </div>
            </div>
          </div>
        </div>

       

        <b-modal :active.sync="isCardModalActive" :width="1000" scroll="keep">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                 <img
                  :src="imageVacancy[index].reference[0]"
                  alt="Image"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left"></div>
                <div class="media-content" style="display:flex; justify-content:center;flex-direction:column;">
                    <div class="content-text">

                        <h3 style="font-size:36px">{{ imageVacancy[index].name }}/h3>

                        <br>
                        <hr>    
                        <br>

                        <h3 style="font-style:italic">description :</h3>
                        <br>

                        <h3>
                          {{ imageVacancy[index].description }}
                        </h3>
                          
                        <br>
                        <hr>    
                        <br>
                          
                          <i class="fas fa-user-tie"></i><a style="margin-right:25px">  Owner : {{ imageVacancy[index].UserId.username }} </a><i class="fas fa-mobile-alt"></i> {{ imageVacancy[index].phone }} <a style="margin-right:25px"> </a><i class="far fa-envelope"></i>  {{ imageVacancy[index].UserId.email }}
                        
                        <br>
                        <hr>    
                        <br>
                        <br>

                        <small>Deadline : {{ imageVacancy[index].deadline }}</small>

                        <br>
                        <hr>    
                        <br>
                        <br>
                          <template>
                              <b-taglist>
                                  <b-tag v-for="(skill, i) in imageVacancy[index].skill" :key="i" type="is-info">{{skill}}</b-tag>
                              </b-taglist>
                          </template>

                        <br>
                        <hr>    
                        <br>
                        <br>
                        
                        
                        <h5><i class="fas fa-user-friends" style="margin-top:20px;margin-bottom:20px"></i> people assigned</h5>

                        <h5>requested by  {{ imageVacancy[index].request.length }} users<h5>
                          
                        <br>
                        <hr>    
                        <br>
                        <br>

                          <i class="fas fa-bookmark" v-if="imageVacancy[index].takenBy" > taken </i>
                          <i class="far fa-bookmark" v-else-if="!imageVacancy [index].takenBy" >
                            <button type="button" @click="request(imageVacancy[index]._id)"> Request Here!  </button>
                          </i>

                        <br>
                        <hr>    
                        <br>
                        <br>


                        <h3 style="font-style:italic">references :</h3>
    
                        <br>
                        <br>
                        

                    </div>


                  <div v-if="imageVacancy[index].reference.length > 1">
                  <div v-for="(vacancy, i) in imageVacancy[index].references" :key="i">
                  <div class="card-image">
                    <figure class="image is-4by3" >
                      <img
                        :src="imageVacancy[index].reference[i+1]"
                        alt="Image"
                      />
                    </figure>
                  </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </b-modal>
        <!--end modal-->
      </div>
    </div>
</template>

<script>
import axios from '../../apis/server'
import Swal from 'sweetalert2'

export default {
    name: 'HomePage',
    data(){
        return {
            isCardModalActive : false,
            imageVacancy : [],
            index : 0,
            Toast : Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1500
            })
        }
    },
    methods : {
      image(){
        Swal.showLoading()
        axios({
          method : 'get',
          url : '/vacancy'
        })
        .then(({data})=>{
          Swal.close()
          this.imageVacancy = data
        })
        .catch(err=>{
          Swal.close()
          Swal.fire({
						icon: 'error',
						title: 'Sorry,',
						text: err.response.data.errors.join(', ')
					})
        })
      },
      request(id){
        Swal.showLoading()
        axios({
          url : '/vacancy/request',
          data : {
            id 
          },
          method : 'patch',
          headers : {
            token : localStorage.getItem('token')
          }
        })
        .then(({ data })=>{
          Swal.close()
          this.isCardModalActive = false
          this.Toast.fire({
						icon: 'success',
						title: 'Request successfully'
					})
        })
        .catch(err=>{
          Swal.close()
          Swal.fire({
						icon: 'error',
						title: 'Sorry,',
						text: err.response.data.errors.join(', ')
					})
        })
      }
    },
    created(){
        this.image()
    }
}
</script>

<style>

</style>