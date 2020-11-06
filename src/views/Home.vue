<template>
  <div class="body">
    <div class="main-box">
    <div id="intro">
      <div class="description-box">
        <p class="description">
          Welcome to the world of Studio Ghibli! Founded on June 15th, 1985, it
          has grown to become one of the most famous--and most loved--anime
          studios in the world.
        </p>
      </div>
      <div class="buttons">
        <a class="button" href="./all-movies.html">Explore Ghibli Films</a>
      </div>
    </div>

    <div id="ghibli-group">
      <img src="https://cdn.wallpapersafari.com/45/73/U5n76i.png" alt="">
    </div>
  </div>
  <div class="timeline-photo-box">
    <img class="timeline-photo" src="https://screenanarchy.com/assets/2013/07/Ghibli%20Mural%20Large.jpg" alt="">
  </div>

  <footer class="footer">
    <a href="https://github.com/Ficus1234/GhibliVue.git">GitHub Link</a>
  </footer>
  </div>
</template>
<style>
* {
margin: 0;
padding: 0;
box-sizing: border-box;
}
#app {
  background-color: darkslategrey;
}
.body {
height: 100%;
}
/*containter to give the photo and its container space and float them right*/
.main-box {
display: flex;
width: 100%;
}
#ghibli-group img {
width: 100%;
}
.description-box {
display: flex;
align-items: center;
justify-content: center;
height: 70%;
background-color: white;
width: 100%;
}
.description {
font-family: 'Commissioner', sans-serif;
font-size: 20px;
text-align: center;
color: black;
margin: 20px;
}
.buttons {
display: flex;
justify-content: center;
height: 30%;
background-color: white;
width: 100%;
}
.button {
font-weight: bold;
display: flex;
align-items: center;
height: 50px;
padding: 20px;
margin: 0 20px;
border-radius: 3px;
background-color: lightgrey;
color: darkslategrey;
}
a.button:hover {
background-color: darkslategrey;
color: lightgrey;
text-decoration: none;
}


/*timeline photo*/
.timeline-photo-box {
margin: 20px 30px 0 30px;
padding-bottom: 100px;
}
.timeline-photo {
width: 100%;
display: block;
}


/*div containing all ghibli movies*/
.movies {
column-count: 2;
column-gap: 3em;
}
.ghibli-box {
display: inline-block;
margin: 0 0 1em;
background-color: white;
}
.ghibli-title {
  display: flex;
  align-items: center;
  flex-direction: column;
font-family: 'Commissioner', sans-serif;
margin: 30px 10px 10px 10px;
}
.photo-box {
width: 90%;
margin: 20px;
}
.photo-box img {
width: 100%;
display: block;
}
.ghibli-info {
font-family: 'Commissioner', sans-serif;
margin: 20px;
}

.footer {
display: flex;
justify-content: center;
align-items: center;
position: fixed;
z-index: 7;
left: 0;
bottom: 0;
width: 100%;
height: 7vh;
background-color: lightgrey;
}
.footer a {
color: darkslategrey;
text-decoration: none;
}
.footer a:hover {
color: black;
text-decoration: none;
}
/*header text*/
.title {
display: inline-block;
margin: 20px;
}

@media only screen and (max-width: 900px) {
  a.button {
    margin-bottom: 20px;
  }
  #ghibli-group,
  #intro {
    margin: 30px 30px 0 30px;
  }
  #ghibli-group {
    max-width: 100vw;
  }
  #intro {
    max-width: 100vw;
    margin-bottom: 10px;
  }
  .main-box {
    flex-direction: column-reverse;
  }
  .movies {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 50px;
    width: 100%;
    flex-direction: column;
  }
  .ghibli-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    max-width: 100vw;
    margin: 20px 30px 30px 30px;
  }
}
@media only screen and (min-width: 901px) {
  #ghibli-group {
    width: 60%;
    margin: 30px 30px 20px 20px;
  }
  #intro {
    width: 40%;
    margin: 30px 20px 20px 30px;
  }
  .movies {
    max-width: 100vw;
    margin: 30px 30px 55px 30px;
    flex-direction: row;
  }
  .ghibli-box {
    max-width: 45vw;
    margin-bottom: 30px;
  }
}

</style>
