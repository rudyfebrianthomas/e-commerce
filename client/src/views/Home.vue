<template>
    <div class="container">
        <div class="columns is-multiline">
            <div v-for="(p, i) in 10" :key="i" class="column is-3" @click.prevent="details">
                <Product></Product>
            </div>
        </div>
    </div>
</template>

<script>
import Product from '@/components/Product'
export default {
components: {
    Product
},
methods: {
    details(){
        this.$router.push('/detail')
    }
},
}
</script>

<style>

</style>
