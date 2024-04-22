<template>

    <div class="box">
        <div class="name"><strong v-for="user in store.users" :key="user._id">{{ user.first_name  }} {{ user.last_name  }}</strong></div>
        
        <div class="info" v-for="user in store.users" :key="user._id" >
            <span v-if="user"><i class="fa fa-fw fa-linkedin"></i> <input v-model="user.linkden" type="text" class="border" /></span>
            <span v-if="user"><i class="fa fa-fw fa-envelope"></i> <input v-model="user.email" type="text" class="border" /></span>
            <span v-if="user"><i class="fa fa-fw fa-phone"></i> <input v-model="user.phone" type="text" class="border" /></span>
            <span v-if="user"><i class="fa fa-fw fa-github"></i> <input v-model="user.github" type="text" class="border" /></span>
            <span v-if="user"><i class="fa fa-fw fa-home"></i> <input v-model="user.address" type="text" class="border" /></span>
        </div> 
    </div>
     
</template>
<script>

import { MainStore } from "../stores/MainStore";

export default {

  data() {
    return {
    
      store: MainStore(), // Manually create an instance of the MainStore
    };
  },

};
</script>
