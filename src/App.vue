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
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/a5e26787698383.5dc0687a5738b.jpg"
                alt="Placeholder image"
              />
            </figure>
          </div>
        </div>
      </div>

      <div class="container" id="detail-image">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/aaf7d087673275.5dbfe3381d2d4.jpg"
                alt="Placeholder image"
              />
            </figure>
          </div>
        </div>
      </div>

      <div class="container" id="detail-image">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/d04e8587625277.5dbfdbf5920f5.gif"
                alt="Placeholder image"
              />
            </figure>
          </div>
        </div>
      </div>

      <div class="container" id="detail-image">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/b7172484176265.5d56e9c4b5861.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
        </div>
      </div>

      <div class="container" id="detail-image">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/2b368987528399.5dbad0622103f.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
        </div>
      </div>

      <div class="container" id="detail-image">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/aa3a6687454125.5db8a80ed7e64.jpg"
                alt="Placeholder image"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>

    <!--end content-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello world"
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

