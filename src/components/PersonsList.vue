<template>
  <div class="flex flex-col items-start h-full w-12/12">
    <div class="flex flex-row items-center justify-center w-full pb-4">
      <input
        v-model="searchQuery"
        class="rounded-xl shadow-navbar h-[50px] w-8/12 px-8 text-lg"
        placeholder="Search for a Person"
      />
    </div>
    <div class="flex flex-col items-start w-full h-full overflow-scroll">
      <div
        v-for="person in filteredPersons"
        :key="person.name"
        class="flex flex-col items-start w-8/12"
      >
        <router-link :to="{ name: 'person', params: { id: person.name } }">
          <button>
            <p
              class="flex items-start bg-blue-500 rounded-xl text-xl text-white m-2 p-2"
            >
              {{ personDetails(person) }}
            </p>
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      personData: [],
      selectedPerson: null,
      quoteIndex: 0,
      searchQuery: "",
    };
  },
  computed: {
    filteredPersons() {
      const query = this.searchQuery.toLowerCase();
      return this.personData.filter((person) =>
        person.name.toLowerCase().includes(query)
      );
    },
  },
  mounted() {
    this.fetchPersonData();
  },
  methods: {
    async fetchPersonData() {
      try {
        const response = await fetch(
          "https://api.gameofthronesquotes.xyz/v1/characters"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        this.personData = data;
      } catch (error) {
        console.error("Error fetching person data:", error);
      }
    },

    personDetails(person) {
      return `${person.name} of ${
        person.house ? person.house.name : "Unknown House"
      }`;
    },
  },
};
</script>

<style scoped>
/* Your component-specific styles here */
</style>
