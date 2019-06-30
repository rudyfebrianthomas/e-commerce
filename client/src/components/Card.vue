<template>
    <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img :src="prod.image" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <h3>{{prod.name}}</h3>
    <a class="button is-primary" style="margin-top: 10px">add to cart</a>
  </div>
</div>
</template>

<script>
export default {
    props: ['prod']

}
</script>

<style>

</style>
