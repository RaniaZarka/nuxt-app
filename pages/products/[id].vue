<template>
   <div> 
 <ProductsDetails :product ="product" />
    </div>
  </template>


  <script setup>
  // this will allow to get the id of the product that is the same as the id shown on the url
  // the name if the const which is inside the {}, should match the same as the one inside the [] from the file name 

const{id}= useRoute().params
const uri= 'https://fakestoreapi.com/products/' +id

//fetch the product
// we need to add a key to the uri so it fetches a new product each time we change the search
// the key needs to be unique, so we choose the id 
const{data: product} =await useFetch(uri, {key: id})
definePageMeta({
    layout:'products'
})
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