<template>
  <div>
    <p v-if="loading" class="text-white">Loading...</p>
    <div v-else>
      <div class="flex items-center sm:justify-center ml-4 sm:ml-0">
        <table class="w-full border-collapse border border-blue-500 max-w-xl mt-16 mx-auto">
          <thead>
            <tr class="bg-blue-500 text-white">
              <th class="py-2 px-4">Description</th>
              <th class="py-2 px-4">Data</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="bg-white border-b border-blue-500"
              v-for="(value, key) in repositoryDetails"
              :key="key"
            >
              <td class="py-2 px-4">{{ key }}</td>
              <td class="py-2 px-4">
                <span v-if="key === 'Homepage'">
                  <a :href="value" target="_blank" rel="noopener noreferrer">{{ value }}</a>
                </span>
                <span v-else>{{ value }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <router-link to="/"><button class="Repobutton">Home page</button></router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'



const route = useRoute()
const id = route.params.id
const repo = ref(null)
const loading = ref(true)


const getRepo = async () => {
  try {
    const response = await fetch(`https://api.github.com/repositories/${id}`, {
      method: 'GET',
    });
    if (!response.ok) throw new Error('failed to fetch repository');
    const data = await response.json();
    repo.value = data;
    loading.value = false;
  } catch (error) {
    console.error(error);
    loading.value = false;
  }
};

onMounted(getRepo)

const repositoryDetails = computed(() => {
  if (!repo.value) return {}

  return {
    Name: repo.value.name,
    Stars: repo.value.stargazers_count,
    Language: repo.value.language,
    'Open Issues': repo.value.open_issues_count,
    'Default Branch': repo.value.default_branch,
    'Created At': new Date(repo.value.created_at).toLocaleDateString(),
    'Last Updated At': new Date(repo.value.updated_at).toLocaleDateString(),
    Owner: repo.value.owner.login,
    Homepage: repo.value.homepage ? repo.value.homepage : 'No Homepage',
    Size: `${repo.value.size} KB`,
    Subscribers: repo.value.subscribers_count,
    'Network Count': repo.value.network_count,
    'Is Private': repo.value.private ? 'Yes' : 'No',
    Archived: repo.value.archived ? 'Yes' : 'No'
  }
})

</script>

<style scoped>
.text-white {
  color: white;
}
.flex {
  display: flex;
}
.items-center {
  align-items: center;
}
.sm\:justify-center {
  justify-content: center;
}
.ml-4 {
  margin-left: 1rem;
}
.sm\:ml-0 {
  margin-left: 0;
}
.w-full {
  width: 100%;
}
.border-collapse {
  border-collapse: collapse;
}
.border {
  border: 1px solid;
}
.border-blue-500 {
  border-color: #3b82f6;
}
.max-w-xl {
  max-width: 36rem;
}
.mt-16 {
  margin-top: 4rem;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.bg-blue-500 {
  background-color: #3b82f6;
}
.text-white {
  color: white;
}
.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}
.bg-white {
  background-color: white;
}
.border-b {
  border-bottom-width: 1px;
}
.relative {
  position: relative;
}
.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.px-8 {
  padding-left: 2rem;
  padding-right: 2rem;
}
.text-black {
  color: black;
}
.text-base {
  font-size: 1rem;
}
.font-bold {
  font-weight: 700;
}
.rounded-full {
  border-radius: 9999px;
}
.overflow-hidden {
  overflow: hidden;
}
.bg-white {
  background-color: white;
}
.transition-all {
  transition-property: all;
}
.duration-400 {
  transition-duration: 400ms;
}
.ease-in-out {
  transition-timing-function: ease-in-out;
}
.shadow-md {
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
.hover\:scale-105:hover {
  transform: scale(1.05);
}
.hover\:text-white:hover {
  color: white;
}
.hover\:shadow-lg:hover {
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
.active\:scale-90:active {
  transform: scale(0.9);
}
.before\:absolute::before {
  content: '';
  position: absolute;
}
.before\:top-0::before {
  top: 0;
}
.before\:-left-full::before {
  left: -100%;
}
.before\:w-full::before {
  width: 100%;
}
.before\:h-full::before {
  height: 100%;
}
.before\:bg-gradient-to-r::before {
  background-image: linear-gradient(to right, #374151, #60a5fa);
}
.before\:transition-all::before {
  transition-property: all;
}
.before\:duration-500::before {
  transition-duration: 500ms;
}
.before\:ease-in-out::before {
  transition-timing-function: ease-in-out;
}
.before\:z-\[-1\]::before {
  z-index: -1;
}
.before\:rounded-full::before {
  border-radius: 9999px;
}
.hover\:before\:left-0:hover::before {
  left: 0;
}
.m-10 {
  margin: 2.5rem;
}
.Repobutton:hover {
  background-color: rgb(246, 108, 3);
  
}
.Repobutton{
margin-top: 20px;
margin-left: 200px;
padding: 10px;
border-radius: 10px;
}
</style>
