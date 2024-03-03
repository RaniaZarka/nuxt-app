// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules:['@nuxtjs/tailwindcss'],

  // here we can add all the metadata and description of the app and the stylesheet
  app:{
    head:{
     title:'Nuxt Dojo',
     meta:[
      {name: 'description', content:'Everything about Nuxt'}
     ],
     link:[
      {rel:'stylesheet', href:'https://fonts.googleapis.com/icon?family=Material+Icons'}
     ]
    }
  }
})

