<template>
  <section>
    <b-field label="Username" message="Username">
      <b-input type="email" maxlength="10"></b-input>
    </b-field>

    <b-field label="Email" message="Email">
      <b-input type="email" maxlength="30"></b-input>
    </b-field>

    <b-field label="Password">
      <b-input type="password" password-reveal></b-input>
    </b-field>
    <div>
      <b-button type="is-primary">Register</b-button>
      <b-button type="is-light">Cancel</b-button>
    </div>
    <div>
      <small>
        Or
        <a @click="$router.push('/form/login')">Login Here</a>
      </small>
    </div>
  </section>
</template>

<script>
export default {
  name: "regis",
  data() {
    return {};
  },
  methods: {
  }
};
</script>

<style>
</style>
