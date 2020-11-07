<template>
  <div class="joe-items">
    <h2>Joe Hisaishi</h2>
    <div class="joe-photo">
      <img src="https://www.zoneout.com/files/2020/01/Joe-3-scaled.jpg" alt="">
    </div>
    <p class="joe-info">
      Joe Hisaishi composed the scores for nearly every Studio Ghibli film,
      so he deserves his own page.
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
  .joe-info {
    font-size: 20px;
    margin: 0 30px 70px 30px;
    color: white;
    text-align: center;
  }
</style>
