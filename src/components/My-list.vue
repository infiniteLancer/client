<template>
     <div>
       
     
        <br>
        <br>
        <h1 style="font-size:36px;padding-top:-300px; font-style: italic;" >List of projects</h1>
        <br>
        <hr style="margin-right:45%;margin-left:45%">
        <br>
        <br>
        
      <!--end judul -->

      <!--listGambar-->
      <div class="container" id="image-container">
        <div class="container" id="detail-image">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <a @click="isCardModalActive = true" href="#">
                  <img
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/d04e8587625277.5dbfdbf5920f5.gif"
                    alt="Placeholder image"
                  />
                </a>
              </figure>
              <div class="contents">
                <h2 style="font-weight:bold; font-size:22px">Title goes here</h2>
                <hr style="margin-top:10px; margin-bottom:10px">
                <h4 style="font-style:italic">deadline goes here</h4>
              </div>
            </div>
          </div>
        </div>


        <div class="container" id="detail-image">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <a @click="isCardModalActive = true" href="#">
                  <img
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/d04e8587625277.5dbfdbf5920f5.gif"
                    alt="Placeholder image"
                  />
                </a>
              </figure>
              <div class="contents">
                <h2 style="font-weight:bold; font-size:22px">Title goes here</h2>
                <hr style="margin-top:10px; margin-bottom:10px">
                <h4 style="font-style:italic">deadline goes here</h4>
              </div>
            </div>
          </div>
        </div>


        <div class="container" id="detail-image">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <a @click="isCardModalActive = true" href="#">
                  <img
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/d04e8587625277.5dbfdbf5920f5.gif"
                    alt="Placeholder image"
                  />
                </a>
              </figure>
              <div class="contents">
                <h2 style="font-weight:bold; font-size:22px">Title goes here</h2>
                <hr style="margin-top:10px; margin-bottom:10px">
                <h4 style="font-style:italic">deadline goes here</h4>
              </div>
            </div>
          </div>
        </div>


        <div class="container" id="detail-image">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <a @click="isCardModalActive = true" href="#">
                  <img
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/d04e8587625277.5dbfdbf5920f5.gif"
                    alt="Placeholder image"
                  />
                </a>
              </figure>
              <div class="contents">
                <h2 style="font-weight:bold; font-size:22px">Title goes here</h2>
                <hr style="margin-top:10px; margin-bottom:10px">
                <h4 style="font-style:italic">deadline goes here</h4>
              </div>
            </div>
          </div>
        </div>

         <div class="container" id="detail-image">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <a @click="isCardModalActive = true" href="#">
                  <img
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/d04e8587625277.5dbfdbf5920f5.gif"
                    alt="Placeholder image"
                  />
                </a>
              </figure>
              <div class="contents">
                <h2 style="font-weight:bold; font-size:22px">Title goes here</h2>
                <hr style="margin-top:10px; margin-bottom:10px">
                <h4 style="font-style:italic">deadline goes here</h4>
              </div>
            </div>
          </div>
        </div>

       

        <b-modal :active.sync="isCardModalActive" :width="1000" scroll="keep">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/d04e8587625277.5dbfdbf5920f5.gif"
                  alt="Image"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left"></div>
                <div class="media-content" style="display:flex; justify-content:center;flex-direction:column;">
                    <div class="content-text">

                        <h3 style="font-size:36px">Title goes here</h3>

                        <br>
                        <hr>    
                        <br>

                        <h3 style="font-style:italic">description :</h3>
                        <br>

                        <h3>
                          goes here, and there are a lots of texts gonna be here sdfksldfjlksdjklskdsdgsd
                          sdgsjdnjsdnfsndjfnskdnfkjsdnfjksdffsadkjnkadg sdfksldfjlksdjklskdsdgsd
                          sdgsjdnjsdnfsndjfnskdnfkjsdnfjksdffsadkjnkadg
                          sdfksldfjlksdjklskdsdgsd
                          sdgsjdnjsdnfsndjfnskdnfkjsdnfjksdffsadkjnkadg
                        </h3>
                          
                        <br>
                        <hr>    
                        <br>
                        
                        <i class="fas fa-user-tie"></i><a style="margin-right:25px">  Owner  </a><i class="fas fa-mobile-alt"></i> Phone <a style="margin-right:25px"> </a><i class="far fa-envelope"></i>  email goes here
                        
                        
                        <br>
                        <hr>    
                        <br>
                        <br>

                        <small>Deadline : 11:09 PM - 1 Jan 2016</small>

                        <br>
                        <hr>    
                        <br>
                        <br>
                          <template>
                              <b-taglist>
                                  <b-tag type="is-info">First</b-tag>
                                  <b-tag type="is-info">Second</b-tag>
                                  <b-tag type="is-info">Third</b-tag>
                                  <b-tag type="is-info">Fourth</b-tag>
                                  <b-tag type="is-info">Fifth</b-tag>
                              </b-taglist>
                          </template>

                        <br>
                        <hr>    
                        <br>
                        <br>
                        
                        
                        <h5><i class="fas fa-user-friends" style="margin-top:20px;margin-bottom:20px"></i> people assigned</h5>

                        <h5>requested by  5 users<h5>
                          
                        <br>
                        <hr>    
                        <br>
                        <br>

                          <i class="far fa-bookmark"> taken</i>

                        <br>
                        <hr>    
                        <br>
                        <br>


                        <h3 style="font-style:italic">references :</h3>
    
                        <br>
                        <br>
                        

                    </div>


                  <div class="card-image">
                    <figure class="image is-4by2">
                      <img
                        src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/d04e8587625277.5dbfdbf5920f5.gif"
                        alt="Image"
                      />
                    </figure>
                  </div>
                  <div class="card-image">
                    <figure class="image is-4by2">
                      <img
                        src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/d04e8587625277.5dbfdbf5920f5.gif"
                        alt="Image"
                      />
                    </figure>
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
import MainContent from '../views/MainContent'
export default {
  name: 'App',
  data(){
    return {
      isCardModalActive : false
    }
  },
  components: {
    MainContent
  },
}
</script>

<style>

</style>