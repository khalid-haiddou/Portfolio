<template>
    <Layout>
      <ul>
                <li
                 
                  class="mt-4 flex flex-col bg-secondary_color dark:bg-secondary_color_dark rounded-lg p-4 shadow-sm"
                >
                  <div class="mt-4 flex flex-row space-x-2 text-start">
                    <div class="flex-1">
                      <label class="text-main_text_color" for="firstName">Name</label>
                      <input
                        
                        v-model="A_name"
                        class="border w-full bg-white rounded-md border-gray-300 text-main_text_color px-2 py-1"
                        id="firstName"
                        type="text"
                      />
                    </div>
                    <div class="flex-1 text-start">
                      <label class="text-main_text_color" for="lastName">lieu</label>
                      <input
                        
                        v-model="A_lieu"
                        class="border w-full bg-white rounded-md border-gray-300 text-main_text_color px-2 py-1"
                        id="lastName"
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="mt-4 flex flex-row space-x-2 text-start">
                    <div class="flex-1">
                      <label class="text-main_text_color" for="firstName">Start Date </label>
                      <input
                       
                        v-model="A_start_date"
                        class="border w-full bg-white rounded-md border-gray-300 text-main_text_color px-2 py-1"
                        id="firstName"
                        type="text"
                      />
                    </div>
                    <div class="flex-1 text-start">
                      <label class="text-main_text_color" for="lastName">End Date</label>
                      <input
                       
                        v-model="A_end_date"
                        class="border w-full bg-white rounded-md border-gray-300 text-main_text_color px-2 py-1"
                        id="lastName"
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="mt-4 text-start">
                    <label class="text-main_text_color" for="description">description</label>
                    <textarea
                    
                      v-model="A_description"
                      class="border w-full bg-white rounded-md border-gray-300 text-main_text_color px-2 py-1"
                      id="description"
                    ></textarea>
                  </div>
                  <div class="mt-4 text-start">
                    <button
                     
                      class="bg-blue-400 hover:bg-btn_submit_hover text-white lg:h-8 md:h-8 rounded-lg text-lg w-24"
                      @click="AddExperience()"
                    >
                      Add Experience
                    </button>
                  </div>
                </li>
            </ul>
            <div v-if="loading">Loading...</div>
            <div v-else>
              <ul class="mt-3 mb-3 " >
                <li
                style="border: 10px solid green;"
                  v-for="Experience in Experiences "
                  :key="Experience._id"
                  class="mt-4  flex flex-col bg-secondary_color dark:bg-secondary_color_dark rounded-lg p-4 shadow-sm"
                >
                  <div class="mt-4 flex flex-row space-x-2 text-start">
                    <div class="flex-1">
                      <label class="text-main_text_color" for="firstName">Name</label>
                      <input
                        v-if="Experience"
                        v-model="Experience.name"
                        class="border w-full bg-white rounded-md border-gray-300 text-main_text_color px-2 py-1"
                        id="firstName"
                        type="text"
                      />
                    </div>
                    <div class="flex-1 text-start">
                      <label class="text-main_text_color" for="lastName">lieu</label>
                      <input
                        v-if="Experience"
                        v-model="Experience.lieu"
                        class="border w-full bg-white rounded-md border-gray-300 text-main_text_color px-2 py-1"
                        id="lastName"
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="mt-4 flex flex-row space-x-2 text-start">
                    <div class="flex-1">
                      <label class="text-main_text_color" for="firstName">Start Date </label>
                      <input
                        v-if="Experience"
                        v-model="Experience.start_date"
                        class="border w-full bg-white rounded-md border-gray-300 text-main_text_color px-2 py-1"
                        id="firstName"
                        type="text"
                      />
                    </div>
                    <div class="flex-1 text-start">
                      <label class="text-main_text_color" for="lastName">End Date</label>
                      <input
                        v-if="Experience"
                        v-model="Experience.end_date"
                        class="border w-full bg-white rounded-md border-gray-300 text-main_text_color px-2 py-1"
                        id="lastName"
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="mt-4 text-start">
                    <label class="text-main_text_color" for="description">description</label>
                    <textarea
                      v-if="Experience"
                      v-model="Experience.description"
                      class="border w-full bg-white rounded-md border-gray-300 text-main_text_color px-2 py-1"
                      id="description"
                    ></textarea>
                  </div>
                  <div class="mt-4 text-start">
                    <button
                      v-if="Experience"
                      class="bg-blue-400 hover:bg-btn_submit_hover text-white lg:h-8 md:h-8 rounded-lg text-lg w-24"
                      @click="updateExperience(Experience)"
                    >
                      Update
                    </button>
                    <button
                      v-if="Experience"
                      class="bg-red-400 ms-3 hover:bg-btn_submit_hover text-white lg:h-8 md:h-8 rounded-lg text-lg w-24"
                      @click="DeleteExperience(Experience)"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              </ul>
            </div>

    </Layout>
  </template>
  <script>
  import Layout from '../../components/Layout.vue';
  import axios from 'axios';
  
  export default{
      components:{
        Layout
      },
      data() {
    return {
      Experiences: [],
      loading: true,
      A_name: '',
      A_lieu: '',
      A_start_date: '',
      A_end_date: '',
      A_description: '',
      loading: false,
    };
  },
  created() {
    this.fetchExperienceData();
  },
  methods: {
    async fetchExperienceData() {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/experience', {
      params: {
        _id: "661e56144f090ae61b091352"
      }
    });
    this.Experiences = response.data;
  } catch (error) {
    console.error('Error fetching Experience data:', error);
  } finally {
    this.loading = false;
  }
},
    async updateExperience(Experience) {
      try {
        this.loading = true;
        const response = await axios.post('http://127.0.0.1:8000/api/experience', Experience);
        console.log('Experience updated:', response.data);
        this.loading = false;
      } catch (error) {
        console.error('Error updating Experience:', error);
      }
    },
    async DeleteExperience(Experience) {
    try {
        this.loading = true;
        console.log('Experience to delete:', Experience);
        const response = await axios.delete('http://127.0.0.1:8000/api/experience/delete', {
            params: {
                _id: Experience._id,
            },
        });
        console.log('Experience deleted:', response.data);
        // Remove the deleted experience from the Experiences array
        this.fetchExperienceData();
        this.loading = false;
    } catch (error) {
        console.error('Error deleting Experience:', error);
        this.loading = false;
    }
},
    async AddExperience() {
      try {
        this.loading = true;
        const response = await axios.post('http://127.0.0.1:8000/api/experience', {
          name: this.A_name,
          lieu: this.A_lieu,
          start_date: this.A_start_date,
          end_date: this.A_end_date,
          description: this.A_description,
        });
        console.log('Experience updated:', response.data);
        this.A_name         = '';
        this.A_lieu       = '';
        this.A_start_date= '';
        this.A_description = '';
        this.fetchExperienceData();
        this.loading = false;
      } catch (error) {
        console.error('Error updating Experience:', error);
      }
    },
  },
  }
  
  </script>
  