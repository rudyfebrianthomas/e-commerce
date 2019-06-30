<template>
  <section>
    <b-field label="Email">
      <b-input type="email" maxlength="30"></b-input>
    </b-field>

    <b-field label="Password">
      <b-input type="password" password-reveal></b-input>
    </b-field>
    <div>
      <b-button type="is-primary" style="margin-right:20px">Login</b-button>
      <b-button type="is-light">Cancel</b-button>
    </div>
    <div>
      <small>
        Or
        <a @click="$router.push('/form/register')">Register Here</a>
      </small>
    </div>
  </section>
</template>

<script>
export default {
  name: "login",
  data() {
    return {};
  },
  methods: {
  },
};
</script>

<style>
</style>
