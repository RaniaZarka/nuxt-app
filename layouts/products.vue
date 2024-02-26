
<template>
    <div>
<header class=" shadow-sm bg-white">
    <nav class=" container mx-auto p-4">
     <NuxtLink to="/products" class="font-bold"> Nuxt app Merch</NuxtLink>
      
    </nav>
</header>
<!--output the page content -->
   <div class="container mx-auto p-4">
    <!-- Slot is a built in component, it means this is where the page content shoudl go-->
     <slot />
  </div>
<footer class="container mx-auto p-4 flex justify-between border-t-2 ">
    <ul class="flex gap-4 ">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/products">Products</NuxtLink></li>
      </ul>
</footer>

    </div>
  </template>

  <style scoped>
/*  this class that we are styling is automatically assigned by NuxtLink to the page in use */
.router-link-exact-active {
    color:#12b488;
}
</style>
  