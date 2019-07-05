<template>
  <div class="column is-4 is-offset-4">
    <b-field label="Email">
      <b-input type="email" maxlength="30" v-model="user.email"></b-input>
    </b-field>
    <b-field label="Password">
      <b-input type="password" password-reveal v-model="user.password"></b-input>
    </b-field>
    <div class="block">
      <b-radio v-model="user.role" native-value="Customer">Customer</b-radio>
      <b-radio v-model="user.role" native-value="Admin">Admin</b-radio>
    </div>
    <div>
      <b-button type="is-primary" style="margin-right:20px" @click="login">Login</b-button>
      <b-button type="is-light" @click="$router.push('/')">Cancel</b-button>
    </div>
    <div>
      <small>
        Or
        <a @click="$router.push('/register')">Register Here</a>
      </small>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      user: {
        email: '',
        password: '',
        role: ''
      }
    }
  },
  methods: {
    login(){
      this.$store.dispatch('LOGIN', this.user)
      this.$router.push('/')
    }
  }
};
</script>

<style>
</style>
