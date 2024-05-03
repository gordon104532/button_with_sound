<template>
  <nav>
    <!-- <router-link to="/">Home</router-link> | -->
    <!-- <router-link to="/share">Share</router-link> |
    <router-link to="/sound_pad">SoundPad</router-link> |
    <router-link to="/snow">Snow</router-link> -->
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: inherit;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #17a565;
}

.main {
  background-color: antiquewhite;
}

@media (prefers-color-scheme: dark) {
  .main {
    background-color: #15202b!important;
  }
  #app {
    color: #e4e4e4;
  }
  nav a {
    font-weight: bold;
    color: #e4e4e4;
  }
}
</style>
