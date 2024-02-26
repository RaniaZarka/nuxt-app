<!-- we create a layouts folder, and a default.vue file inside it
this will automatically apply to the app. 
We create here the NuxtLink. and we use slot component, so the navigation is applicable to the whole app.  -->

<template>
    <div>
<header class="shadow-sm bg-white">
    <nav class="container mx-auto p-4 flex justify-between">

        <!-- I am using NuxtLink to navigate through the app -->
        <!-- By using NuxtLink, we can navigate through the components without sending a request to the server
        While By useing the regular a tag <a href="/about"> About</a> for example, each time we navigate we will be sending a request to the server -->
        <!-- Aslo by using NuxtLink some nuxt classes will be added automatically example if we navigate to about page, it will add autostyling to the html for this specific page -->
     <NuxtLink to="/" class="font-bold"> Nuxt app</NuxtLink>
        <ul class="flex gap-4">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/products" class="btn">Products</NuxtLink></li>
      </ul>

    </nav>
</header>
<!--output the page content -->
   <div class="conatiner mx-auto p-4">
    <!-- Slot is a built in component, it means this is where the page content shoudl go-->
     <slot />
  </div>


    </div>
  </template>

  <style scoped>
/*  this class that we are styling is automatically assigned by NuxtLink to the page in use */
.router-link-exact-active {
    color:#12b488;
}
</style>
  