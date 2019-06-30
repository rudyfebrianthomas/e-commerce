<template>
  <div class="home">
    <div class="section">
    <div v-for="(prod, index) in prods" :key="index" >
      <Card class="column is-2" :prod="prod"></Card>
    </div>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card'
export default {
  name: "home",
  data() {
    return {
      
    }
  },
  computed: {
    prods(){
      return this.$store.state.products
    }
  },
  components: {
    Card
  }
};
</script>
