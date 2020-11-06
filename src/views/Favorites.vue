<template>
  <div class="body-2">
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
          <p class="add" v-on:click="addOrRemove(movie)">Remove</p>
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
  .the-movies {
    height: 100vh;
  }
  .fav-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin: 20px;
  }
  .add {
    background-color: white;
    color: darkslategrey;
    padding: 10px 20px;
    margin: 20px;
    border-radius: 3px;
    width: 110px;
    display: flex;
    justify-content: center;
  }
  .add:hover {
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
    justify-content: flex-start;
    flex-direction: column;
    height: 100%;
    background-color: darkslategrey;
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
  }
  @media only screen and (min-width: 901px) {
      .the-box {
        width: 100vw;
        column-count: 3;
        column-gap: 20px;
      }
    }
</style>
