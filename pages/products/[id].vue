<template>
    <div>
   <p> Product details for {{ id }}</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at semper purus. Vestibulum in est ullamcorper, luctus felis a, accumsan ipsum. Ut at mi libero. Integer non ipsum et mi gravida vehicula. Morbi accumsan metus et diam tempus vestibulum. Nulla aliquam fermentum augue, id posuere nunc malesuada in. Nulla facilisi. Proin aliquet libero ac feugiat condimentum. Quisque ut sollicitudin metus. Aenean dapibus ex vel risus euismod bibendum. Ut condimentum velit nec neque lobortis varius. In nec consequat tortor. Nunc rhoncus orci ac augue commodo, non dictum velit viverra. </p> 
  
    </div>
  </template>


  <script setup>
  // this will allow to get the id of the product that is the same as the id shown on the url
  // the name if the const which is inside the {}, should match the same as the one inside the [] from the file name 

const{id}= useRoute().params
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