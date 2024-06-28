<template>
  <div class="w-10/12 m-auto flex">
    <div class="mt-20 flex-1">
      <h1 class="text-5xl md:text-8xl">
        Everything is better with a <span class="text-orange-500">Pizza</span>
      </h1>
      <br />
      <div class="text-3xl mt-5">
        Pizza is the missing piece that makes every day complete, a simple yet
        delicious joy in life
      </div>
      <div class="flex w-full mt-10">
        <div class="w-1/2">
          <Button
            type="Primary"
            name="Order Now"
            @click="() => router.push('/menu-list')"
          />
        </div>
        <div class="w-1/2 ml-2">
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
    <h2 class="text-3xl md:text-5xl mt-5 mb-5">About us</h2>
    As a full-stack software developer, I specialize in the MERN (MongoDB,
    Express.js, React.js, Node.js) and MEVN (MongoDB, Express.js, Vue.js,
    Node.js) stacks. My expertise covers building scalable, robust applications
    from frontend to backend. I utilize the latest JavaScript frameworks and
    libraries, such as React and Vue, for dynamic, responsive user interfaces.
    On the backend, I leverage Node.js and Express.js for efficient server-side
    operations, integrating MongoDB for flexible, NoSQL database management.
    Additionally, I employ modern tools like TypeScript for type safety, Docker
    for containerization, and CI/CD pipelines for seamless deployment. Staying
    current with technologies like Next.js, Nuxt.js, and GraphQL ensures
    cutting-edge solutions.
  </div>

  <div
    class="mt-[200px] mb-[200px] text-center w-11/12 md:w-1/2 m-auto"
    id="contact"
  >
    <h1 class="text-4xl md:text-6xl text-orange-500">Contact Us</h1>
    <h2 class="text-3xl md:text-5xl">+65 9175 0799</h2>
  </div>
</template>
<script setup lang="ts">
import Button from '@/components/Button.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
</script>
<style></style>
