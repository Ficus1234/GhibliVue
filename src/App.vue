<template>
  <div id="app">
    <b-navbar style="background-color: white" toggleable>
      <b-navbar-brand>
        <router-link style="color: darkslategrey" to="/">
          <div class="icon">
            <img src="https://www.tasteofcinema.com/wp-content/uploads/2015/06/studio_ghibli_facts.jpg" alt="">
          </div>
        </router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="navbar-toggle-collapse">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item>
            <router-link to="/all-films">Films</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/favorites">Your Favorite Ghibli Films</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/joe">Important People</router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<style>
  .nav-link a {
    color: darkgrey;
  }
  .nav-link a:hover{
    color: black;
    text-decoration: none;
  }
  .icon {

  }
  .icon img {
    height: 40px;
    width: 64px;
  }
</style>
