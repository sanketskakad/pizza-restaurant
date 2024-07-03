<template>
  <div class="min-h-screen bg-gray-50 text-gray-900 flex justify-center">
    <div
      class="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1"
    >
      <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
        <div class="mt-12 flex flex-col items-center">
          <h1 class="text-2xl xl:text-3xl font-extrabold">Login</h1>
          <div class="w-full flex-1 mt-8">
            <div class="flex flex-col items-center">
              <button
                @click="signInUsingGoogle"
                class="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-orange-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
              >
                <div class="bg-white p-2 rounded-full">
                  <GoogleIcon />
                </div>
                <span class="ml-4"> Sign Up with Google </span>
              </button>

              <!-- <button
                class="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-orange-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5"
              >
                <div class="bg-white p-1 rounded-full">
                  <svg class="w-6" viewBox="0 0 32 32">
                    <path
                      fill-rule="evenodd"
                      d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0116 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z"
                    />
                  </svg>
                </div>
                <span class="ml-4"> Login with GitHub </span>
              </button> -->
            </div>

            <div class="my-12 border-b text-center">
              <div
                class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"
              >
                Or sign up with e-mail
              </div>
            </div>

            <div class="mx-auto max-w-xs">
              <input
                class="w-full px-8 py-4 rounded-lg font-medium bg-orange-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-orange-50"
                type="email"
                v-model="username"
                placeholder="Email"
              />
              <input
                class="w-full px-8 py-4 rounded-lg font-medium bg-orange-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-orange-50 mt-5"
                type="password"
                v-model="password"
                placeholder="Password"
              />
              <button
                @click="loginHandler"
                class="mt-5 tracking-wide font-semibold bg-orange-500 text-gray-100 w-full py-4 rounded-lg hover:bg-orange-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
              >
                <svg
                  class="w-6 h-6 -ml-2"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <path d="M20 8v6M23 11h-6" />
                </svg>
                <span class="ml-3"> Login </span>
              </button>
              <p class="mt-6 text-xs text-gray-600 text-center">
                New to Pizza Shop?
                <RouterLink
                  to="/register"
                  class="border-b border-gray-500 border-dotted"
                >
                  Create an account
                </RouterLink>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1 bg-orange-100 text-center hidden lg:flex">
        <div class="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat flex">
          <div class="self-center">
            <img src="@/assets/pizza.png" alt="My Image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUsers } from '@/store/UserStore';
import GoogleIcon from '@/components/icons/GoogleIcon.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const username = ref<string>('');
const password = ref<string>('');
const router = useRouter();
const userStore = useUsers();

if (userStore.users?.email) {
  router.push('/');
}

const signInUsingGoogle = async () => {
  try {
    await userStore.signInUsingGoogle();
  } catch (e) {
    console.log(e);
  }
};

const loginHandler = async () => {
  try {
    await userStore.login(username.value, password.value);
  } catch (e) {
    console.log(e);
  }
};
</script>
<style></style>
