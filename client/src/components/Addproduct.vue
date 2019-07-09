<template>
  <section>
    <b-field label="Title">
      <b-input v-model="title"></b-input>
    </b-field>
    <b-field label="Description">
      <b-input maxlength="200" type="textarea"></b-input>
    </b-field>
    <b-field label="Price">
      <b-numberinput min="0" max="999999999999"></b-numberinput>
    </b-field>
    <b-field label="Stock">
      <b-numberinput min="0" max="9999"></b-numberinput>
    </b-field>
    <b-field>
      <b-button
        type="is-primary"
        class="is-medium"
        style="margin-right:10px"
        rounded
      >Add Product</b-button>
      <b-button type="is-light" class="is-medium" @click="$router.push('/')" rounded>Cancel</b-button>
    </b-field>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: "John Silver"
    };
  }
};
</script>

</template>

<script>
export default {};
</script>

<style>
</style>
