<template>
  <button :class="styles" @click="emit('click')">{{ name }}</button>
</template>
<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps({ name: String, type: String });
const emit = defineEmits(['click']);

const styles = computed(() => {
  if (props.type === 'Secondary') {
    return 'mt-5 tracking-wide font-semibold bg-gray-100 text-orange-500 w-full py-4 rounded-lg hover:bg-gray-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none';
  }
  return 'mt-5 tracking-wide font-semibold bg-orange-500 text-gray-100 w-full py-4 rounded-lg hover:bg-orange-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none';
});
</script>
<style scoped></style>
