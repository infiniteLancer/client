<template>
  <div>
      <section class="hero is-primary is-fullheight">
            <div class="hero-body" style="background-image: url('../img/login-page.jpg');">
            <!-- <div class="hero-body" style="background-image: url('../img/register-page.jpg');"> -->

                    <div class="container">
                      <div class="columns is-centered">
                        <div class="column is-5-tablet is-4-desktop is-3-widescreen" style="display:flex; justify-content:space-between">
                        <div class="quotes-area" style="display:flex;justify-content:center;align-items:center;">
                            <div class="home-quotes">
                              <h1 style="text-align:right ; margin-right:100px;font-size: 72px;text-shadow: 3px 2px 7px rgba(0,0,0,0.51);">Tired of unmanageable projects?</h1>
                              <!-- <h1 style="text-align:right ; margin-right:100px;font-size: 72px;text-shadow: 3px 2px 7px rgba(0,0,0,0.51);width:500px">Deadlines are our friends & you can be one too!</h1> -->
                              
                            </div>
                        </div>

                        <!-- ---------------------------------------------------------------- -->

                          <form action="" class="box" style="display:block">
                            <div class="field">
                              <label for="" class="label">Email</label>
                              <div class="control has-icons-left">
                                <input type="email" placeholder="e.g. bobsmith@gmail.com" class="input" required>
                                <span class="icon is-small is-left">
                                  <i class="fa fa-envelope"></i>
                                </span>
                              </div>
                            </div>
                            <div class="field">
                              <label for="" class="label">Password</label>
                              <div class="control has-icons-left">
                                <input type="password" placeholder="*******" class="input" required>
                                <span class="icon is-small is-left">
                                  <i class="fa fa-lock"></i>
                                </span>
                              </div>
                            </div>
                            <div class="field" style="display:flex; justify-content:space-between">
                              <button class="button is-success">
                                Login
                              </button>
                              <button class="button is-success">
                                Register
                              </button>
                            </div>
                          </form>

                          <!-- ---------------------------------------------------------------- -->
                        
                          <form action="" class="box" style="padding:2rem;display:none">
                            <div class="field">
                              <label for="" class="label">Username</label>
                              <div class="control has-icons-left">
                                <input type="username" placeholder="e.g. bobsmith" class="input" required>
                                <span class="icon is-small is-left">
                                  <i class="fas fa-user"></i>
                                </span>
                              </div>
                            </div>

                             <div class="field">
                              <label for="" class="label">Email</label>
                              <div class="control has-icons-left">
                                <input type="email" placeholder="e.g. bobsmith@gmail.com" class="input" required>
                                <span class="icon is-small is-left">
                                  <i class="fa fa-envelope"></i>
                                </span>
                              </div>
                            </div>

                            <div class="field">
                              <label for="" class="label">Password</label>
                              <div class="control has-icons-left">
                                <input type="password" placeholder="*******" class="input" required>
                                <span class="icon is-small is-left">
                                  <i class="fa fa-lock"></i>
                                </span>
                              </div>
                            </div>

                            <div class="field">
                              <label for="" class="label">Phone</label>
                              <div class="control has-icons-left">
                                <input type="phone" placeholder="+62 " class="input" required>
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
                            </div>
                          </form>

                          <!-- ---------------------------------------------------------------- -->
                        </div>
                      </div>
                    </div>

            </div>
        </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello world',
      tags: [
                  'Auckland',
                  'Wellington',
                  'Very long string that would overflow'
              ]
          ,
          dropFiles: []
        }
      },
      methods: {
              deleteDropFile(index) {
                  this.dropFiles.splice(index, 1)
              }
          },
  mounted(){
    
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

