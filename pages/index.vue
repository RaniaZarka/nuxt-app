<template>
    <div>
<header>
    <nav>

        <!-- I am using NuxtLink to navigate through the app -->
        <!-- By using NuxtLink, we can navigate through the components without sending a request to the server
        While By useing the regular a tag <a href="/about"> About</a> for example, each time we navigate we will be sending a request to the server -->
        <!-- Aslo by using NuxtLink some nuxt classes will be added automatically example if we navigate to about page, it will add autostyling to the html for this specific page -->
     <NuxtLink to="/"> Nuxt app</NuxtLink>
        <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/products">Products</NuxtLink></li>
      </ul>

    </nav>
</header>

        <h2> Home</h2>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at semper purus. Vestibulum in est ullamcorper, luctus felis a, accumsan ipsum. Ut at mi libero. Integer non ipsum et mi gravida vehicula. Morbi accumsan metus et diam tempus vestibulum. Nulla aliquam fermentum augue, id posuere nunc malesuada in. Nulla facilisi. Proin aliquet libero ac feugiat condimentum. Quisque ut sollicitudin metus. Aenean dapibus ex vel risus euismod bib
 </p>
     <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin eleifend, neque ac gravida sollicitudin, felis lacus lobortis sapien, in pharetra enim sem vel est. Aliquam tempor libero eget nulla dapibus efficitur. Mauris nec orci non sem laoreet consequat. Sed eget metus id velit congue venenatis vel vel nisi. Fusce suscipit lectus sit amet nulla hendrerit malesuada. Sed convallis, quam in posuere pellentesque, sapien ligula ultricies purus, at luctus odio est nec dui.
 </p>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at semper purus. Vestibulum in est ullamcorper, luctus felis a, accumsan ipsum. Ut at mi libero. Integer non ipsum et mi gravida vehicula. Morbi accumsan metus et diam tempus vestibulum. Nulla aliquam fermentum augue, id posuere nunc malesuada in. Nulla facilisi. Proin aliquet libero ac feugiat condimentum. Quisque ut sollicitudin metus. Aenean dapibus ex vel risus euismod bib
 </p>
    </div>
  </template>
  <script setup>

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