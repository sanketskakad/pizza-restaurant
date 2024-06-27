<template>
  <div class="w-10/12 m-auto flex">
    <div class="mt-20 flex-1">
      <h1 class="text-5xl md:text-8xl">
        Everything is better with a <span class="text-orange-500">Pizza</span>
      </h1>
      <br />
      <div class="text-3xl">
        Pizza is the missing piece that makes every day complete, a simple yet
        delicious joy in life
      </div>
      <div class="flex w-full">
        <div class="flex-1">
          <Button
            type="Primary"
            name="Order Now"
            @click="() => router.push('/menu-list')"
          />
        </div>
        <div class="flex-1 ml-2">
          <Button variation="Secondary" name="Learn More" />
        </div>
      </div>
    </div>
    <div class="flex-1 hidden lg:block self-center">
      <img src="@/assets/pizza.png" class="w-full" />
    </div>
  </div>
  <div class="mt-[200px] text-center w-11/12 md:w-1/2 m-auto" id="about-us">
    <h1 class="text-4xl md:text-6xl text-orange-500">Our Strory</h1>
    <h2 class="text-3xl md:text-5xl">About us</h2>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni minima odit
    recusandae. Illum ipsa non repudiandae? Eum ipsam iste quos suscipit
    tempora? Aperiam esse fugiat inventore laboriosam officiis quam rem! At
    consectetur delectus ducimus est facere iure molestias obcaecati quaerat
    vitae voluptate? Aspernatur dolor explicabo iste minus molestiae pariatur
    provident quibusdam saepe? Laborum molestias neque nulla obcaecati odio quia
    quod reprehenderit sit vitae voluptates? Eos, tenetur.
  </div>

  <div
    class="mt-[200px] mb-[200px] text-center w-11/12 md:w-1/2 m-auto"
    id="contact"
  >
    <h1 class="text-4xl md:text-6xl text-orange-500">Contact Us</h1>
    <h2 class="text-3xl md:text-5xl">+65 123456</h2>
  </div>
</template>
<script setup lang="ts">
import Button from '@/components/Button.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
</script>
<style></style>
