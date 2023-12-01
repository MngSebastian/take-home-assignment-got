<template>
  <div class="flex flex-col items-start h-full w-12/12">
    <ul class="h-[400px]">
      <li
        v-for="(quote, index) in randomQuotes"
        :key="index"
        class="flex items-center bg-blue-500 mb-4 text-white h-[60px] text-xl w-[700px] px-4 text-left border-2 rounded-lg"
      >
        {{ quote.sentence }}
      </li>
    </ul>
    <button
      @click="handleClick"
      class="flex items-start bg-gray-500 hover:bg-gray-700 text-white text-lg w-2/12 p-2 rounded-lg"
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
