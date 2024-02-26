
import type { AuthError } from '@supabase/supabase-js';

import type productsVue from '~/layouts/products.vue';

import type productsVue from '~/layouts/products.vue';
<template>
    <div class="card text-center">
        <img :src="product.image" alt="product thumb" class="thumb">
        <p class="font-bold text-gry-500 m-4 truncate">{{ product.title }}</p>
        <NuxtLink :to="`/products/${product.id}`">
        <p class="btn my-4">View Details</p>
    </NuxtLink>

    </div>
  </template>
  <script setup>
  // we define a props here, so we can use it in index.vue file
const {product} =defineProps(['product'])
</script>

<style scoped>
.thumb {
    max-height: 120px;
    max-width: 70%;
    margin: 0 AuthError;
}

</style>