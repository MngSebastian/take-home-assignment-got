<template>
  <div>
    <div v-if="person" class="flex flex-col items-start">
      <h3 class="text-2xl">
        Name: {{ person[0] && person[0].name ? person[0].name : "Loading" }}
      </h3>
      <h3 class="text-2xl my-4">
        {{ person[0] && person[0].house ? person[0].house.name : "Loading" }}
      </h3>
      <p class="text-lg">Quotes:</p>
      <h3 class="text-2xl text-left">
        {{ currentQuote }}
      </h3>

      <!-- Add other person details here -->
      <button
        @click="handleMoreQuotes"
        class="p-4 bg-blue-500 rounded-xl text-xl my-8"
      >
        Refresh Quotes
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      person: [],
      currentQuoteIndex: 0,
    };
  },
  async created() {
    await this.fetchPersonDetails();
  },
  computed: {
    currentQuote() {
      if (this.person[0] && this.person[0].quotes) {
        const quotes = this.person[0].quotes;
        return quotes.length > 0 ? quotes[this.currentQuoteIndex] : "No quotes";
      }
      return "Loading";
    },
  },
  methods: {
    async fetchPersonDetails() {
      try {
        const match = this.$route.params.id.match(/\b(\w+)\b/);

        // Use the matched word or the entire parameter if no match is found
        const characterName = match
          ? match[1].toLowerCase()
          : this.$route.params.id.toLowerCase();

        console.log(characterName);
        const response = await fetch(
          `https://api.gameofthronesquotes.xyz/v1/character/${characterName}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        this.person = data;
        console.log("Person details:", this.person);
      } catch (error) {
        console.error("Error fetching person details:", error);
      }
    },

    handleMoreQuotes() {
      if (
        this.person[0] &&
        this.currentQuoteIndex < this.person[0].quotes.length - 1
      ) {
        this.currentQuoteIndex++;
      }
    },
  },
};
</script>
