<template>
  <div class="app">
    <div class="the-movies">
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
          <p id="add" v-on:click="addOrRemove(movie)">Remove from Favorites</p>
        </div>
      </div>


    <footer class="footer">
      <a href="https://github.com/Ficus1234/GhibliVue.git">GitHub Link</a>
    </footer>
    </div>
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
          this.$root.$data.clicked = true;
        }
        else {
          for(var i = 0; i < favs.length; i++){
            if (favs[i].title === movie.title) {
              favs.splice(i, 1); i--;
              this.$root.$data.clicked = true;
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
          this.$root.$data.clicked = true;
        }
      }
    }
  }

</script>

<style scoped>
  .the-movies {
    height: 100%;
    padding-bottom: 75px;
  }
  .fav-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin: 20px;
  }
  #add {
    background-color: white;
    color: darkslategrey;
    padding: 10px 20px;
    margin: 20px;
    border-radius: 3px;
    width: 210px;
    display: flex;
    justify-content: center;
  }
  #add:hover {
    color: darkgrey;
  }
  .ghibli-box {
    margin-top: 30px;
  }
  .message {
    color: darkgrey;
  }
  .message-box {
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 20px;
  }
  .the-box {
    display: flex;
    height: 100%;
  }
  .body-2 {
    display: flex;
    height: 100%;
  }
  @media only screen and (max-width: 900px) {
    .body-2 {
      flex-direction: column;
      align-items: center;
    }
    .the-box {
      justify-content: flex-start;
      flex-direction: column;
    }
  }
  @media only screen and (min-width: 901px) {
      .the-box {
        flex-wrap: wrap;
        justify-content: center;
      }
      .fav-box {
        width: 40vw;
      }
    }
</style>
