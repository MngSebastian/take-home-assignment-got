<template>
  <div class="flex flex-col overflow-scroll items-center w-screen mb-6">
    <div
      v-for="person in personData"
      :key="person.name"
      class="flex flex-col items-start w-8/12"
    >
      <button @click="toggleSelectedPerson(person)">
        <p
          class="flex items-start bg-blue-500 rounded-xl text-xl text-white m-2 p-2"
        >
          {{ personDetails(person) }}
        </p>
      </button>
      <div
        v-if="isSelectedPerson(person)"
        class="flex flex-col text-left items-start bg-blue-400 ml-14 mb-4 text-white text-lg rounded-xl w-6/12 p-2"
      >
        <h3>Name: {{ person.name }}</h3>
        <p>{{ person.house ? person.house.name : "Unknown House" }}</p>
        <p class="h-[100px]">Quotes: "{{ getQuote(person) }}"</p>
        <button
          class="bg-gray-500 hover:bg-gray-700 text-white text-lg w-4/12 my-8 p-2 border-2 rounded-lg"
          @click="handleMoreQuotes"
        >
          More Quotes
        </button>
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
    };
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
    toggleSelectedPerson(person) {
      this.selectedPerson = this.selectedPerson === person ? null : person;
      this.quoteIndex = 0;
    },
    isSelectedPerson(person) {
      return this.selectedPerson === person;
    },
    handleMoreQuotes() {
      if (
        this.selectedPerson &&
        this.quoteIndex < this.selectedPerson.quotes.length - 1
      ) {
        this.quoteIndex++;
      }
    },
    personDetails(person) {
      return `${person.name} of ${
        person.house ? person.house.name : "Unknown House"
      }`;
    },
    getQuote(person) {
      return person.quotes && person.quotes.length > 0
        ? person.quotes[this.quoteIndex]
        : "No quotes";
    },
  },
};
</script>

<style scoped>
/* Your component-specific styles here */
</style>
