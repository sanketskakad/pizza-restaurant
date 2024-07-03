<template>
  <button
    @click="emit('click')"
    :disabled="disabled"
    v-if="props.variation === 'Secondary'"
    class="relative w-full inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
  >
    <span
      class="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
    >
      {{ name }} <slot></slot>
    </span>
  </button>
  <button
    type="button"
    v-else
    @click="emit('click')"
    class="w-full text-white bg-gradient-to-br from-orange-600 to-red-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
  >
    {{ name }} <slot></slot>
  </button>
</template>
<script setup lang="ts">
const props = defineProps({
  name: String,
  variation: String,
  disabled: Boolean,
});
const emit = defineEmits(['click']);
</script>
<style scoped></style>
