<template>
  <div class="repo-list">
    <h1 class="repo-list__header">My Hub</h1>
    <input type="search" placeholder="Search Repositories" v-model="search"/>
    <div class="loading" v-if="isLoading">Loading...</div>
    <div class="error" v-if="error">{{ error }}</div>
    <div v-else class="repo-list__grid">
      <div v-for="repo in currentRepos" :key="repo.id" class="repo-list__item">
        <router-link :to="{ name: 'RepoDetails', params: { id: repo.id } }">{{ repo.name }}</router-link>
        <div class="repo-list_created">Created: {{ dateOnly(repo.created_at) }}</div>
        <div class="repo-list_stars">Stars: {{ repo.stargazers_count }}</div>
      </div>
    </div>
    <div class="repo-list__pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
      <p>Page {{ currentPage }} of {{ totalPages }}</p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';

export default {
  name: 'RepoList',
  setup() {
    const repos = ref([]);
    const isLoading = ref(true);
    const error = ref(null);
    const search = ref('');
    const accessToken = import.meta.env.VITE_GITHUB_TOKEN;
    
    const fetchRepos = async () => {
      try {
        const res = await fetch('https://api.github.com/users/Aderemi90/repos', {
          headers: {
            Authorization: `token ${accessToken}`
          }
        });
        if (!res.ok) {
          throw new Error('Could not fetch data');
        }
        const data = await res.json();
        repos.value = data;
        isLoading.value = false;
      } catch (err) {
        error.value = err.message;
        isLoading.value = false;
      }
    };
    fetchRepos();

    const dateOnly = (dateString) => {
      const date = new Date(dateString);
      return date.toISOString().split('T')[0];
    };

    onMounted(fetchRepos);
    const filteredRepos = computed(() => {
      if (!search.value) {
        return repos.value;
      }
      return repos.value.filter(repo =>
        repo.name.toLowerCase().includes(search.value.toLowerCase())
      );
    });

    const itemsPerPage = ref(5); // Number of items per page
    const currentPage = ref(1); // Current page number
    const totalPages = computed(() => Math.ceil(filteredRepos.value.length / itemsPerPage.value));
    const currentRepos = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      return filteredRepos.value.slice(start, start + itemsPerPage.value);
    });

    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
      }
    };

    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
    };

    return {
      search,
      currentRepos,
      currentPage,
      totalPages,
      nextPage,
      prevPage,
      isLoading,
      error,
      dateOnly,
    };
  },
};
</script>

<style>
input {
  height: 2rem;
  width: 20rem;
  padding-left: 1rem;
  border-radius: 7px;
  margin-bottom: 15px;
}

.repo-list {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.repo-list__header {
  text-align: center;
  margin-bottom: 20px;
}

.repo-list__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
}

.repo-list__item {
  background-color: #f9f9f9;
  padding: 15px;
  margin-bottom: 10px;
  border: 2px solid #858282;
  border-radius: 5px;
  transition: transform 0.2s;
  list-style: none;
  text-decoration: none;

}

.repo-list__pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.repo-list__pagination button {
  margin: 0 10px;
}

.loading, .error {
  text-align: center;
  margin-top: 20px;
}
.loading {
  font-size: 1.5em;
  color: #666;
}

.error {
  color: red;
  margin-bottom: 20px;
}
.repo-list_created {
  margin: 10px 0;
  color: #666;
}
input{
  margin-bottom: 50px;
}
button{
  padding: 20px;
  border-radius: 5px;
  background-color: rgb(57, 101, 246);
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
}
button:hover {
  background-color: rgb(246, 108, 3);
}
</style>