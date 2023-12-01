<template>
  <div class="flex flex-col items-start h-full w-12/12">
    <div class="flex flex-row items-center justify-center w-full pb-4">
      <input
        v-model="searchQuery"
        class="rounded-xl shadow-navbar h-[50px] w-8/12 px-8 text-lg"
        placeholder="Search for a House"
      />
    </div>
    <div class="flex flex-col items-start w-full h-full overflow-scroll">
      <div v-for="house in filteredHouses" :key="house.name">
        <router-link
          :to="{ name: 'house-members', params: { name: house.name } }"
        >
          <button class="focus:outline-none">
            <p class="bg-blue-500 rounded-xl text-xl text-white m-2 p-2">
              {{ house.name }}
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
      houseData: [],
      searchQuery: "",
    };
  },
  computed: {
    filteredHouses() {
      const query = this.searchQuery.toLowerCase();
      return this.houseData.filter((house) =>
        house.name.toLowerCase().includes(query)
      );
    },
  },
  mounted() {
    this.fetchHouseData();
  },
  methods: {
    async fetchHouseData() {
      try {
        const response = await fetch(
          "https://api.gameofthronesquotes.xyz/v1/houses"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        this.houseData = data;
      } catch (error) {
        console.error("Error fetching house data:", error);
      }
    },
  },
};
</script>

<style scoped>
/* Add component-specific styles here if needed */
</style>
