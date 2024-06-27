<template>
  <div
    class="flex items-center p-2 bg-orange-50 text-orange-600 border-orange-500 border align-middle"
  >
    <div class="w-3/12 p-4 mr-2">
      <img
        :src="item.imageUrl"
        :alt="item.itemName"
        class="mix-blend-multiply w-full"
      />
    </div>
    <div class="w-5/12 text-2xl text-orange-500">{{ item.itemName }}</div>
    <div class="w-3/12 text-2xl text-orange-500">${{ item.basePrice }}</div>
    <div class="w-1/12" @click="emit('click')">
      <DeleteIcon class="w-10" />
    </div>
  </div>
</template>
<script setup lang="ts">
import Button from '@/components/Button.vue';
import DeleteIcon from '@/components/icons/DeleteIcon.vue';
defineProps({ item: Object });
const emit = defineEmits(['click']);
</script>
<style scoped></style>
