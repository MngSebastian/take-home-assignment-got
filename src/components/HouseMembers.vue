<template>
  <div>
    <h2 class="text-2xl py-10">Members of {{ $route.params.name }}</h2>
    <ul v-if="houseMembers[0] && houseMembers[0].members">
      <li
        v-for="member in houseMembers[0].members"
        :key="member.slug"
        class="flex bg-blue-500 rounded-xl w-4/12 text-xl text-white m-2 p-2"
      >
        <!-- <router-link
          :to="{ name: 'member-details', params: { memberName: member.name } }"
        > -->
        {{ member.name }}
        <!-- </router-link> -->
      </li>
    </ul>
    <p v-else>Loading members...</p>

    <router-link to="/houses">
      <button
        class="flex justify-center bg-slate-500 rounded-xl w-2/12 text-xl mt-16 text-white m-2 p-2"
      >
        Go Back
      </button>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      houseMembers: [],
    };
  },
  mounted() {
    // Fetch house members based on $route.params.name
    this.fetchHouseMembers();
  },
  watch: {
    "$route.params.name": "fetchHouseMembers", // Watch for changes in route parameter
  },
  methods: {
    async fetchHouseMembers() {
      try {
        const houseName = this.$route.params.name
          .toLowerCase()
          .replace(/house\s+/i, "")
          .replace(/(.+?)(?:\s|$).*/, "$1");

        const response = await fetch(
          `https://api.gameofthronesquotes.xyz/v1/house/${houseName}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        this.houseMembers = data;
        // console.log(data[0].members);
        console.log(this.houseMembers[0].members);
      } catch (error) {
        console.error("Error fetching house members:", error);
      }
    },
  },
};
</script>

<style scoped>
/* Add component-specific styles here if needed */
</style>
