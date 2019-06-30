<template>
  <div id="app">
    <div id="nav">
      <Navbar></Navbar>
    </div>
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import ax from "./api";
export default {
  name: "app",
  components: {
    Navbar
  },
  mounted() {
    ax.get("/products", { headers: { token: localStorage.token } })
    .then(({data}) => {
      console.log(data)
      this.$store.commit('getproducts', data)
    })
    .catch((err) => {
      console.log(err)
    })
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url("./assets/blue.png");
  background-size: cover;
  min-height: 100vh;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
