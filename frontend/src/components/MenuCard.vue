<template>
  <div class="w-full max-w-[350px] h-[350px] p-8 bg-orange-100 m-auto">
    <img
      :src="product?.imageUrl"
      :alt="product?.name"
      srcset=""
      class="h-40 mix-blend-multiply"
    />
    <div class="text-xl text-center mt-2">{{ product?.itemName }}</div>
    <div class="text-base text-center mt-2">
      {{ product?.description.substring(0, 40) }}
    </div>
    <Button :name="buttonText" @click="emit('buttonClicked')"></Button>
  </div>
</template>
<script setup lang="ts">
import Button from '@/components/Button.vue';
defineProps({ product: Object, buttonText: String });
const emit = defineEmits(['buttonClicked']);
</script>
<style scoped></style>
