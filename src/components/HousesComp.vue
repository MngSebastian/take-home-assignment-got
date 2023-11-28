<template>
  <div
    v-for="house in houseData"
    :key="house.name"
    class="flex flex-col overflow-scroll items-start w-8/12"
  >
    <button @click="toggleSelectedHouse(house)" class="focus:outline-none">
      <p class="bg-blue-500 rounded-xl text-xl text-white m-2 p-2">
        {{ house.name }}
      </p>
    </button>
    <div
      v-if="isSelectedHouse(house)"
      class="flex flex-col items-start bg-blue-400 ml-14 mb-4 text-white text-lg rounded-xl w-4/12 p-2"
    >
      <h3>Members of {{ house.name }}:</h3>
      <ul>
        <li v-for="member in house.members" :key="member.slug">
          {{ member.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      houseData: [],
      selectedHouse: null,
    };
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
    toggleSelectedHouse(house) {
      this.selectedHouse = this.selectedHouse === house ? null : house;
    },
    isSelectedHouse(house) {
      return this.selectedHouse === house;
    },
  },
};
</script>

<style scoped>
/* Add component-specific styles here if needed */
</style>
