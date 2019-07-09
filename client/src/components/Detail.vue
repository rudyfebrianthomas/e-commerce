<template>
  <div class="columns">
    <div class="column is-4" style="border: 1px solid black">
      <div class="box">
        <img
          src="https://cdn.bulbagarden.net/upload/thumb/2/2e/GO_Potion.png/200px-GO_Potion.png"
          alt="Placeholder image"
          style="width: 100%"
        />
      </div>
    </div>
    <div class="column is-5" style="border: 1px solid black">
      <div style="text-align: left">
        <div class="box">
          <strong style="font-size: 20px">Name: {{}}</strong>
        </div>
        <div class="box">
          <div>
            <strong style="font-size: 15px">Description: {{}}</strong>
          </div>
          <div>
            <strong style="font-size: 15px">Stock: {{}}</strong>
          </div>
          <div>
            <strong style="font-size: 15px">Price: {{}}</strong>
          </div>
        </div>
        <div class="box">
          <strong style="font-size: 15px">
            Stock:
            <b-numberinput min="0" max="9999"></b-numberinput>
          </strong>
        </div>
      </div>
      <div style="margin-top: 20px">
        <b-button
          type="is-primary"
          class="is-medium"
          style="margin-right:10px"
          @click="tocart"
          rounded
        >Add to cart</b-button>
        <b-button type="is-light" class="is-medium" @click="$router.push('/')" rounded>Cancel</b-button>
      </div>
    </div>
    <div class="column is-3" style="border: 1px solid black">
      <div class="box">
        <div class="columns">
            <div class="column is-4">
                <img
                  src="https://cdn.bulbagarden.net/upload/thumb/2/2e/GO_Potion.png/200px-GO_Potion.png"
                  alt="Placeholder image"
                  style="width: 100%"
                />
            </div>
        <div class="column" style="text-align: left; font-size: 13px">
            <div>
                <strong>    
                    Quantity: {{}}
                </strong>
            </div>
            <div>
                <strong>
                    Price: Rp.{{}}00000000
                </strong>
            </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
