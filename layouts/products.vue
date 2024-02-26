
<template>
    <div>
<header>
    <nav>
     <NuxtLink to="/products"> Nuxt app Merch</NuxtLink>
      
    </nav>
</header>
<!--output the page content -->
   <div>
    <!-- Slot is a built in component, it means this is where the page content shoudl go-->
     <slot />
  </div>
<footer>
    <ul>
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
    color:coral;
}
</style>
  