<template>
    <div>
   <div class="grid grid-cols-4 gap-5"> 
    <!-- v-for is used to loop through all the products -->
   <div v-for=" p in products">
    <!-- <NuxtLink :to="`/products/${p.id}`">{{ p.title }}</NuxtLink> -->
    <ProductCard :product="p"/>
</div>
   </div>
  
    </div>
  </template>

  <script setup>
//Here we define which layout to be use for this specific file
definePageMeta({
    layout:'products'
})

// built in function to fetch data from API 
//
  const{data: products}= await useFetch('https://fakestoreapi.com/products')

    </script>

<style scoped>
h2{
    margin-bottom: 20px;
    font-size: 36px;
}

p{
    margin:20px 0;
    
}
</style>