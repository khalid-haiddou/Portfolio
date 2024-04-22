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
                    @click="Addeducation()"
                  >
                    Add education
                  </button>
                </div>
              </li>
          </ul>
          <div v-if="loading">Loading...</div>
          <div v-else>
            <ul class="mt-3 mb-3 " >
              <li
              style="border: 10px solid green;"
                v-for="education in educations "
                :key="education._id"
                class="mt-4  flex flex-col bg-secondary_color dark:bg-secondary_color_dark rounded-lg p-4 shadow-sm"
              >
                <div class="mt-4 flex flex-row space-x-2 text-start">
                  <div class="flex-1">
                    <label class="text-main_text_color" for="firstName">Name</label>
                    <input
                      v-if="education"
                      v-model="education.name"
                      class="border w-full bg-white rounded-md border-gray-300 text-main_text_color px-2 py-1"
                      id="firstName"
                      type="text"
                    />
                  </div>
                  <div class="flex-1 text-start">
                    <label class="text-main_text_color" for="lastName">lieu</label>
                    <input
                      v-if="education"
                      v-model="education.lieu"
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
                      v-if="education"
                      v-model="education.start_date"
                      class="border w-full bg-white rounded-md border-gray-300 text-main_text_color px-2 py-1"
                      id="firstName"
                      type="text"
                    />
                  </div>
                  <div class="flex-1 text-start">
                    <label class="text-main_text_color" for="lastName">End Date</label>
                    <input
                      v-if="education"
                      v-model="education.end_date"
                      class="border w-full bg-white rounded-md border-gray-300 text-main_text_color px-2 py-1"
                      id="lastName"
                      type="text"
                    />
                  </div>
                </div>
                <div class="mt-4 text-start">
                  <label class="text-main_text_color" for="description">description</label>
                  <textarea
                    v-if="education"
                    v-model="education.description"
                    class="border w-full bg-white rounded-md border-gray-300 text-main_text_color px-2 py-1"
                    id="description"
                  ></textarea>
                </div>
                <div class="mt-4 text-start">
                  <button
                    v-if="education"
                    class="bg-blue-400 hover:bg-btn_submit_hover text-white lg:h-8 md:h-8 rounded-lg text-lg w-24"
                    @click="updateeducation(education)"
                  >
                    Update
                  </button>
                  <button
                    v-if="education"
                    class="bg-red-400 ms-3 hover:bg-btn_submit_hover text-white lg:h-8 md:h-8 rounded-lg text-lg w-24"
                    @click="Deleteeducation(education)"
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
    educations: [],
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
  this.fetcheducationData();
},
methods: {
  async fetcheducationData() {
try {
  const response = await axios.get('http://127.0.0.1:8000/api/education', {
    params: {
      _id: "661e56144f090ae61b091352"
    }
  });
  this.educations = response.data;
} catch (error) {
  console.error('Error fetching education data:', error);
} finally {
  this.loading = false;
}
},
  async updateeducation(education) {
    try {
      this.loading = true;
      const response = await axios.post('http://127.0.0.1:8000/api/education', education);
      console.log('education updated:', response.data);
      this.loading = false;
    } catch (error) {
      console.error('Error updating education:', error);
    }
  },
  async Deleteeducation(education) {
  try {
      this.loading = true;
      console.log('education to delete:', education);
      const response = await axios.delete('http://127.0.0.1:8000/api/education/delete', {
          params: {
              _id: education._id,
          },
      });
      console.log('education deleted:', response.data);
      // Remove the deleted education from the educations array
      this.fetcheducationData();
      this.loading = false;
  } catch (error) {
      console.error('Error deleting education:', error);
      this.loading = false;
  }
},
  async Addeducation() {
    try {
      this.loading = true;
      const response = await axios.post('http://127.0.0.1:8000/api/education', {
        name: this.A_name,
        lieu: this.A_lieu,
        start_date: this.A_start_date,
        end_date: this.A_end_date,
        description: this.A_description,
      });
      console.log('education updated:', response.data);
      this.A_name         = '';
      this.A_lieu       = '';
      this.A_start_date= '';
      this.A_description = '';
      this.fetcheducationData();
      this.loading = false;
    } catch (error) {
      console.error('Error updating education:', error);
    }
  },
},
}

</script>
