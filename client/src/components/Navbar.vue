<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" @click="$router.push('/')">
        <img src="http://pngimg.com/uploads/pokeball/pokeball_PNG19.png" width="30" height="100" />
      </a>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" @click="$router.push('/')">Home</a>
        <a class="navbar-item" @click="$router.push('/about')">Help</a>
      </div>
      <b-field style="margin-top:13px">
        <b-input placeholder="Search" type="search" icon-pack="fas" icon="search" rounded></b-input>
      </b-field>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons" v-if="!isLogin">
            <a class="button is-light" @click="login">Log in</a>
          </div>
          <div class="buttons" v-if="isLogin">
            <div>
              <b-dropdown aria-role="list">
                <i
                  class="fas fa-users-cog tag"
                  slot="trigger"
                  style="font-size:27px; margin-right:15px"
                ></i>
                <div>
                  <b-dropdown-item aria-role="listitem">
                    <i class="fas fa-user-alt"></i>
                    <small>Profile</small>
                  </b-dropdown-item>
                  <b-dropdown-item aria-role="listitem" @click="addproduct">
                    <i class="fas fa-plus-circle"></i>
                    <small>Add Product</small>
                  </b-dropdown-item>
                  <b-dropdown-item aria-role="listitem" @click="logout">
                    <i class="fas fa-power-off"></i>
                    <small>Logout</small>
                  </b-dropdown-item>
                </div>
              </b-dropdown>
            </div>
            <div>
              <i class="fas fa-shopping-cart" style="font-size:27px; margin-right:15px" @click="cart"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      isLogin: true
    };
  },
  methods: {
    tohome(){
      this.$router.push('/')
    },
    cart(){
      this.$router.push('/cart')
    },
    login() {
      this.$router.push("/form/login");
    },
    addproduct() {
      this.$router.push("/addproduct");
    },
    logout() {
      Swal.fire({
        title: "Are you sure?",
        type: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Logout"
      }).then(result => {
        if (result.value) {
          localStorage.clear()
          Swal.fire("You're Logout");
        }
      });
    }
  },
  created() {
    if (localStorage.token) {
      this.isLogin = true;
    }
  }
};
</script>

<style>
</style>
