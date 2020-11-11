<template>
  <div class="joe-items">
    <h1>A Couple of Key People:</h1>
    <h2>Hayao Miyazaki</h2>
    <div class="joe-photo">
      <img src="https://treatmentofvisions.files.wordpress.com/2014/03/hayao-miyazaki.jpg" alt="">
    </div>
    <p class="hayao-info">
      Hayao Miyazaki co-founded Studio Ghibli, and directed many of its films.
    </p>
    <h2>Joe Hisaishi</h2>
    <div class="joe-photo">
      <img src="https://www.zoneout.com/files/2020/01/Joe-3-scaled.jpg" alt="">
    </div>
    <p class="joe-info">
      Joe Hisaishi composed the scores for nearly every Studio Ghibli film.
    </p>
    <footer class="footer">
      <a href="https://github.com/Ficus1234/GhibliVue.git">GitHub Link</a>
    </footer>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
h1 {
  font-size: 50px;
  margin-top: 30px;
}
h2 {
  font-size: 40px;
  margin: 30px 0 0 0;
  color: darkgrey;
}
  .joe-items {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .joe-photo {
    margin: 30px;
  }
  .joe-photo img {
    width: 100%;
    display: block;
  }

  .joe-info,
  .hayao-info {
    font-size: 20px;
    color: white;
    text-align: center;
  }
  .joe-info {
    margin: 0 30px 70px 30px;
  }
</style>
