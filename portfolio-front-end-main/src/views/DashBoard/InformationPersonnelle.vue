<template>
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-md-4 col-lg-3">
        <div class="userProfileInfo">
          <div class="image text-center">
            <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="#" class="img-responsive" />
            <a href="#" title="#" class="editImage">
              <i class="fa fa-camera"></i>
            </a>
          </div>
          <div class="box">
            <div class="name"><strong v-for="user in store.users" :key="user._id">{{ user.first_name  }} {{ user.last_name  }}</strong></div>
            <div v-if=" store.loading">Loading...</div>
            <div class="info" v-for="user in store.users" :key="user._id" v-else>
              <span v-if="user"><i class="fa fa-fw fa-linkedin"></i> <input v-model="user.linkden" type="text" class="border" /></span>
              <span v-if="user"><i class="fa fa-fw fa-envelope"></i> <input v-model="user.email" type="text" class="border" /></span>
              <span v-if="user"><i class="fa fa-fw fa-phone"></i> <input v-model="user.phone" type="text" class="border" /></span>
              <span v-if="user"><i class="fa fa-fw fa-github"></i> <input v-model="user.github" type="text" class="border" /></span>
              <span v-if="user"><i class="fa fa-fw fa-home"></i> <input v-model="user.address" type="text" class="border" /></span>
            </div> 
          </div>
        </div>
      </div>

      <div class="col-xs-12 col-md-8 col-lg-9">
        <div class="box">
          <div class="flex gap-4 items-center">
            <router-link :to="{ name: 'Info' }">Information Personnelle</router-link>
            <router-link :to="{ name: 'Experiences' }">Experiences</router-link>
            <router-link :to="{ name: 'Educations' }">Educations</router-link>
            <router-link :to="{ name: 'Projects' }">Projects</router-link>
          </div>
          <div>
         
            <div v-if=" store.loading">Loading...</div>
            <div v-else>
              <ul>
                <li
                  v-for="user in users"
                  :key="user._id"
                  class="mt-4 flex flex-col bg-secondary_color dark:bg-secondary_color_dark rounded-lg p-4 shadow-sm"
                >
                  <div class="mt-4 flex flex-row space-x-2 text-start">
                    <div class="flex-1">
                      <label class="text-main_text_color" for="firstName">First Name</label>
                      <input
                        v-if="user"
                        v-model="user.first_name"
                        class="border w-full bg-white rounded-md border-gray-300 text-main_text_color px-2 py-1"
                        id="firstName"
                        type="text"
                      />
                    </div>
                    <div class="flex-1 text-start">
                      <label class="text-main_text_color" for="lastName">Last Name</label>
                      <input
                        v-if="user"
                        v-model="user.last_name"
                        class="border w-full bg-white rounded-md border-gray-300 text-main_text_color px-2 py-1"
                        id="lastName"
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="mt-4 text-start">
                    <label class="text-main_text_color" for="description">About</label>
                    <textarea
                      v-if="user"
                      v-model="user.description"
                      class="border w-full bg-white rounded-md border-gray-300 text-main_text_color px-2 py-1"
                      id="description"
                    ></textarea>
                  </div>
                  <div class="mt-4 text-start">
                    <button
                      v-if="user"
                      class="bg-blue-400 hover:bg-btn_submit_hover text-white lg:h-8 md:h-8 rounded-lg text-lg w-24"
                      @click="updateUser(user)"
                    >
                      Update
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Layout from '../../components/Layout.vue';
import axios from 'axios';
import { MainStore } from "../../stores/MainStore";

export default {
  components: {
    Layout,
  },
  data() {
    return {
      users: [],
      
      store: MainStore(), // Manually create an instance of the MainStore
    };
  },
  async created() {
    await this.fetchUserData(); // Call fetchUserData on component creation
    this.saveUserData(); // Save user data to the store
  },
  methods: {
    async fetchUserData() {
      this.store.loading = true;
      try {
        
        const response = await axios.get('http://127.0.0.1:8000/api/info', {
          params: {
            _id: "662102ab2a0233808b01aaa2"
          }
        });
        this.users = response.data;
        this.store.loading = false;
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    },
    saveUserData() {
      this.store.setUser(this.users); // Save user data to the store
    },
    async updateUser(user) {
      try {
        this.store.loading= true;
        const response = await axios.post('http://127.0.0.1:8000/api/info', user);
        console.log('User updated:', response.data);
        this.store.loading = false;
      } catch (error) {
        console.error('Error updating user:', error);
      }
    },
  },
};
</script>
