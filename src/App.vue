<template>
  <div>
    <!--navbar-->
    <b-navbar id="navbar-home">
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
            src="https://images.vexels.com/media/users/3/137644/isolated/preview/14a141955b1fd2eabf18bc98092aee16-art-infinity-logo-infinite-by-vexels.png"
            alt="Lightweight UI components for Vue.js based on Bulma"
          />
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item href="#">Infinite Fox</b-navbar-item>
        <b-navbar-item href="#">Post Job</b-navbar-item>
        <b-navbar-dropdown label="Info">
          <b-navbar-item href="#">About</b-navbar-item>
          <b-navbar-item href="#">Contact</b-navbar-item>
        </b-navbar-dropdown>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">Log in</a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
    <!--end navbar -->
    <!--content-->

    <!--judul-->
    <div class="main-judul">
      <h1 id="judul">Best of Behance</h1>
      <p>Projects featured today by our curators</p>
    </div>
    <!--end judul -->

    <!--listGambar-->
    <div class="container" id="image-container">
      <div class="container" id="detail-image">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <a @click="isImageModalActive1 = true" href="#">
                <img
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/a5e26787698383.5dc0687a5738b.jpg"
                  alt="Placeholder image"
                />
              </a>
            </figure>
          </div>
        </div>
      </div>

      <div class="container" id="detail-image">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <a @click="isCardModalActive2 = true" href="#">
                <img
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/aaf7d087673275.5dbfe3381d2d4.jpg"
                  alt="Placeholder image"
                />
              </a>
            </figure>
          </div>
        </div>
      </div>

      <div class="container" id="detail-image">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <a @click="isCardModalActive3 = true" href="#">
                <img
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/d04e8587625277.5dbfdbf5920f5.gif"
                  alt="Placeholder image"
                />
              </a>
            </figure>
          </div>
        </div>
      </div>

      <div class="container" id="detail-image">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <a @click="isCardModalActive4 = true" href="#">
                <img
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/b7172484176265.5d56e9c4b5861.png"
                  alt="Placeholder image"
                />
              </a>
            </figure>
          </div>
        </div>
      </div>

      <div class="container" id="detail-image">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <a @click="isCardModalActive5 = true" href="#">
                <img
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/2b368987528399.5dbad0622103f.png"
                  alt="Placeholder image"
                />
              </a>
            </figure>
          </div>
        </div>
      </div>

      <div class="container" id="detail-image">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <a @click="isCardModalActive6 = true" href="#">
                <img
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/aa3a6687454125.5db8a80ed7e64.jpg"
                  alt="Placeholder image"
                />
              </a>
            </figure>
          </div>
        </div>
      </div>

      <!--modal-->
      <b-modal :active.sync="isImageModalActive1">
        <p class="image is-4by3">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/a5e26787698383.5dc0687a5738b.jpg"
            alt="Image"
          />
        </p>
        <p
          style="background-color:white ; display:flex;align-text:center"
        >asjkasjdkajskdjalkwdjsodjlskdjflsdjfilsdjflisdjflis</p>
        <p class="image is-4by3">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/d04e8587625277.5dbfdbf5920f5.gif"
            alt="Image"
          />
        </p>
      </b-modal>
      <b-modal :active.sync="isCardModalActive1" :width="640" scroll="keep">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/a5e26787698383.5dc0687a5738b.jpg"
                alt="Image"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48" style="margin-bottom:50px">
                  <img src alt="Image" />
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">John Smith</p>
                <p class="subtitle is-6">@johnsmith</p>
              </div>
            </div>lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris.
            <a>@bulmaio</a>.
            <a>#css</a>
            <a>#responsive</a>
            <br />
            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris.
              <a>@bulmaio</a>.
              <a>#css</a>
              <a>#responsive</a>
              <br />
              <small>11:09 PM - 1 Jan 2016</small>
            </div>
          </div>
        </div>
      </b-modal>

      <b-modal :active.sync="isCardModalActive2" :width="640" scroll="keep">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/aaf7d087673275.5dbfe3381d2d4.jpg"
                alt="Image"
              />
            </figure>
            <figure class="image is-4by3">
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/aaf7d087673275.5dbfe3381d2d4.jpg"
                alt="Image"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src alt="Image" />
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">John Smith</p>
                <p class="subtitle is-6">@johnsmith</p>
              </div>
            </div>

            <div class="content">
              L
              <small>11:09 PM - 1 Jan 2016</small>
            </div>
          </div>
        </div>
      </b-modal>

      <b-modal :active.sync="isCardModalActive3" :width="640" scroll="keep">
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
              <div class="media-content" style="display:flex ; justify-content:center">
                <h1>Title goes here</h1>
                <h3>
                  description goes here, and there are a lots of texts gonna be here
                  <br />sdfjsdkfjlsdflksdfasdfgsdf
                  sdfksldfjlksdjklskdsdgsd
                  sdgsjdnjsdnfsndjfnskdnfkjsdnfjksdffsadkjnkadg
                </h3>
                <a>bulmaio | email goes here | phone</a>
                <br />
                <small>11:09 PM - 1 Jan 2016</small>
                <br />
                <hr />
                <h5>skills required | which is tags</h5>
                <h5>assigned : lalalalala</h5>
                <h5>requested by  5 users<h5>
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img
                      src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/d04e8587625277.5dbfdbf5920f5.gif"
                      alt="Image"
                    />
                  </figure>
                </div>
                <div class="card-image">
                  <figure class="image is-4by3">
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
    <!--end content-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      isImageModalActive1: false,
      isCardModalActive2: false,
      isCardModalActive3: false
    };
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
  margin-top: 50px;
  font-weight: 500px;
  color: black;
}

.main-judul p {
  margin-left: 150px;
  margin-bottom: 80px;
}

.main-judul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 600px;
  margin-left: 350px;
}

#image-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

#detail-image {
  width: 300px;
  height: 300px;
  margin-right: 50px;
  filter: drop-shadow(0px 10px 5px black);
  animation: drop 1.5s ease;
}

#detail-image:hover {
  -webkit-transform: scale(1.2);
  -ms-transform: scale(1.2);
  transform: scale(1.2);
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
</style>

