<template>
  <div  class="column is-4  is-half is-offset-4">
    <strong style="font-size: 30px">Add New Product</strong>
    <b-field label="Product Name">
      <b-input placeholder="Product Name"></b-input>
    </b-field>
    <b-field label="Product Description">
      <b-input type="textarea" minlength="10" maxlength="100" placeholder="Product Description"></b-input>
    </b-field>
    <b-field label="Product Stock">
      <b-numberinput min="0" max="9999"></b-numberinput>
    </b-field>
    <b-field label="Product Price">
      <b-numberinput step="100" min="0"></b-numberinput>
    </b-field>
    <b-field class="Product Image">
      <b-upload v-model="file">
        <a class="button is-primary">
          <b-icon icon="upload"></b-icon>
          <span>Click to upload</span>
        </a>
      </b-upload>
      <span class="file-name" v-if="file">{{ file.name }}</span>
    </b-field>
  </div>
</template>

<script>
export default {
  name: "postproduct",
  data() {
    return {
      file: ""
    };
  }
};
</script>

<style>
</style>
