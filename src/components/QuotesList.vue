<template>
  <div class="border-2 w-8/12 h-screen mb-6">
    <ul>
      <li
        v-for="(quote, index) in randomQuotes"
        :key="index"
        class="bg-blue-500 ml-14 mb-4 text-white text-lg w-6/12 p-2 border-2 rounded-lg"
      >
        {{ quote.sentence }}
      </li>
    </ul>
    <button
      @click="handleClick"
      class="flex items-start bg-gray-500 hover:bg-gray-700 text-white ml-14 mb-4 text-white text-lg w-2/12 p-2 border-2 rounded-lg"
    >
      More Quotes
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      randomQuotes: [],
    };
  },
  mounted() {
    this.fetchRandomQuotes();
  },
  methods: {
    async fetchRandomQuotes() {
      try {
        const response = await fetch(
          "https://api.gameofthronesquotes.xyz/v1/random/5"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        this.randomQuotes = data;
      } catch (error) {
        console.error("Error fetching random quotes:", error);
      }
    },
    handleClick() {
      this.fetchRandomQuotes();
    },
  },
};
</script>

<style scoped>
/* Your component-specific styles here */
</style>
