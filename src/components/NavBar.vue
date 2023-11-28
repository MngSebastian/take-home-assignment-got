<template>
  <div
    class="flex justify-between items-center bg-blue-500 rounded-lg w-6/12 h-[70px] mb-12 p-4"
  >
    <router-link to="/houses">
      <button class="text-white text-xl">Houses</button>
    </router-link>
    <router-link to="/persons">
      <button class="text-white text-xl">Persons</button>
    </router-link>
    <router-link to="/quotes">
      <button class="text-white text-xl">Quotes</button>
    </router-link>
  </div>
</template>

<script>
export default {
  // Component options
};
</script>

<style scoped>
/* Your component-specific styles here */
</style>
