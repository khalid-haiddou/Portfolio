<template>
    <Layout>
     
      <div class="mt-4 flex flex-col bg-secondary_color dark:bg-secondary_color_dark rounded-lg p-4 shadow-sm">
  
       
  
  <div class="mt-4 flex flex-row space-x-2 text-start">
      <div class="flex-1">
      <label class="text-main_text_color  " for="emotions"> Platee Name</label>
      <input placeholder="Platee Name" class="w-full bg-white rounded-md border-gray-300 text-main_text_color   px-2 py-1" id="emotions" type="text">
      </div>
  
      <div class="flex-1 text-start">
      <label class="text-main_text_color  " for="symbols">Price </label>
      <input placeholder="$ 0.00" class="w-full bg-white rounded-md border-gray-300 text-main_text_color   px-2 py-1" id="symbols" type="text">
      </div>
  </div>
  
  
  <div class="mt-4 text-start">
      <label class="text-main_text_color  " for="description">Description</label>
      <textarea placeholder="Describe your plate" class="w-full bg-white rounded-md border-gray-300 text-main_text_color   px-2 py-1" id="description"></textarea>
  </div>
  <div class="mt-4 text-start">
  <button class="bg-blue-400 hover:bg-btn_submit_hover text-white  lg:h-8 md:h-8 rounded-lg text-lg  w-24 " >update</button>
  </div>
  
  </div>
    </Layout>
  </template>
  <script>
  import Layout from '../../components/Layout.vue';
  
  export default{
      components:{
        Layout
      }
  }
  
  </script>
  