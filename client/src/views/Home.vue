<template>
  <div class="container">
    <div class="columns is-multiple">
      <div v-for="(item, index) in 10" :key="index" class="column is-3">
        <Product></Product>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "@/components/Product";

export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    Product
  }
};
</script>
