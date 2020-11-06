<template>
  <div class="body-2">
    <div class="movies">
      <div class="message-box">
        <div v-show="this.$root.$data.favsEmpty" class="message">
          <h1>You don't have any favorite Ghibli Films! What a terrible shame.</h1>
        </div>
        <div v-show="this.$root.$data.notEmpty" class="message">
          <h1>Your Favorite Ghibli Films:</h1>
        </div>
      </div>
      <div class="the-box">
        <div class="fav-box" v-for="movie in this.$root.$data.favorites" :key="movie.id">
          <div class="ghibli-title">
            <h2>{{movie.title}}</h2>
          </div>

          <div class="the-star">
            <svg id = "svgelem" height = "50" xmlns = "http://www.w3.org/2000/svg">
              <polygon class="star" v-on:click="addOrRemove(movie)" points = "25,2.5 10,45 47.5,15 2.5,15 40,45" fill = "white"/>
            </svg>
          </div>
        </div>
      </div>

    </div>
    <footer class="footer">
      <a href="https://github.com/Ficus1234/Ghibli">GitHub Link</a>
    </footer>
  </div>
</template>
<script>
  export default {
    methods: {
      addOrRemove(movie) {
        let favs = this.$root.$data.favorites;
        if (favs.length === 0) {
          this.$root.$data.favorites.push(movie);
          this.$root.$data.favsEmpty = false;
          this.$root.$data.notEmpty = true;
        }
        else {
          for(var i = 0; i < favs.length; i++){
            if (favs[i].title === movie.title) {
              favs.splice(i, 1); i--;
              if (favs.length === 0) {
                this.$root.$data.favsEmpty = true;
                this.$root.$data.notEmpty = false;
              }
              return;
            }
          }
          this.$root.$data.favorites.push(movie);
          this.$root.$data.favsEmpty = false;
          this.$root.$data.notEmpty = true;
        }
      }
    }
  }

</script>

<style scoped>
  #svgelem {
    position: relative;
    left: 97%;
  }
  polygon:hover {
    fill: black;
  }
  .ghibli-box {
    margin-top: 30px;
  }
  .message {
    color: darkgrey;
  }
  .body-2 {
  background-color: darkslategrey;
  height: 100vh;
  }
  .message-box {
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 20px;
  }
  .the-box {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
  }

</style>
