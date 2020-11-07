<template>
  <div class="movies">
    <div class="ghibli-box" v-for="movie in movies" :key="movie.id">
      <div class="ghibli-title">
        <h2>{{movie.title}}</h2>
        <h6>Release Date: {{movie.release_date}}</h6>
      </div>
      <div class="photo-box">
        <img class="ghibli-photo" :src="'/images/movies/'+movie.image">
      </div>
      <p class="ghibli-info">{{movie.description}}</p>
      <div class="center">
        <p class="add" v-on:click="addOrRemove(movie)">Add to Favorites</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Films',
  props: {
    movies: Array
  },
  methods: {
    addOrRemove(movie) {
      this.$root.$data.clicked = !this.$root.$data.clicked;
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
  .dsg {
    background-color: darkslategrey;
  }
  .add {
    background-color: darkgrey;
    color: darkslategrey;
    padding: 10px 20px;
    margin: 20px;
    border-radius: 3px;
    width: 160px;
  }
  .add:hover {
    color: black;
  }
  @media only screen and (min-width: 901px) {
    .center {
      display: flex;
      justify-content: center;
    }
  }
</style>
