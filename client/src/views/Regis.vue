<template>
  <div class="column is-4 is-offset-4">
    <b-field label="Username">
      <b-input v-model="user.userName" type="text" maxlength="10"></b-input>
    </b-field>

    <b-field label="Email">
      <b-input v-model="user.email" type="email" maxlength="30"></b-input>
    </b-field>

    <b-field label="Password">
      <b-input v-model="user.password" type="password" password-reveal></b-input>
    </b-field>
    <div class="block">
      <b-radio v-model="user.role" native-value="Customer">Customer</b-radio>
      <b-radio v-model="user.role" native-value="Admin">Admin</b-radio>
    </div>
    <div>
      <b-button type="is-primary" style="margin-right:20px" @click="regis">Register</b-button>
      <b-button type="is-light" @click="$router.push('/')">Cancel</b-button>
    </div>
    <div>
      <small>
        Or
        <a @click="$router.push('/login')">Login Here</a>
      </small>
    </div>
  </div>
</template>

<script>
export default {
  name: "regis",
  data() {
    return {
      user: {
        userName: '',
        email: '',
        password: '',
        role: ''
      }
    }
  },
  methods: {
    regis(){
      this.$store.dispatch('REGISTER', this.user)
      this.$router.push('/')
    }
  }
};
</script>

<style>
</style>
