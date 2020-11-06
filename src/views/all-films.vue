<template>
  <div class="body">
    <div>
      <div class="search">
        <form class="pure-form">
          <i class="fas fa-search"></i><input v-model="searchText" />
        </form>
      </div>
    </div>
    <Films :movies="movies" />
    <footer class="footer">
      <a href="https://github.com/Ficus1234/Ghibli">GitHub Link</a>
    </footer>

  </div>
</template>

<script>
import Films from "../components/Films.vue"
export default {
  name: 'Home',
  components: {
    Films
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
    movies() {
      return this.$root.$data.movies.filter(movie => movie.title.toLowerCase().search(this.searchText) >= 0);
    }
  },
}
</script>

<style scoped>
@media only screen and (max-width: 400px) {
  form {
    display: flex;
    justify-content: center;
    padding-top: 20px;
  }
  i,
  input {
    margin: 10px;
  }
}
@media only screen and (min-width: 401px) and (max-width: 1100px){
  form {
    display: flex;
    justify-content: flex-end;
    padding-top: 5px;
  }
  i,
  input {
    margin: 10px;
  }
  input {
    margin-right: 30px;
  }
}
@media only screen and (min-width: 1101px) {
  form {
    display: flex;
    justify-content: flex-end;
    padding-top: 20px;
  }
  i,
  input {
    margin: 10px;
  }
  input {
    margin-right: 35px;
  }
}
</style>
