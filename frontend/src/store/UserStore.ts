import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { Users, Menu, CartMenu } from '@/interfaces';
import axios from 'axios';
import { useMenus } from '@/store/MenuStore';
import { useRouter } from 'vue-router';
import {
  getAuth,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  UserCredential,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

export const useUsers = defineStore('Users', () => {
  const users = ref<Users | null>(null);
  const menus = useMenus();
  const auth = getAuth();
  const isLogin = ref(false);
  const userCredential = ref<null | UserCredential>(null);
  const providerGoogle = new GoogleAuthProvider();
  const router = useRouter();

  const getUser = async (id) => {
    try {
      const resp = await axios.get(`/api/users/${id}`);
      return resp.data;
    } catch (e) {
      console.log(e);
    }
    return null;
  };

  const addUsers = async (user: Users) => {
    try {
      const resp = await axios.post('/api/users', user);
      users.value = resp.data;
    } catch (e) {
      console.log(e);
    }
  };

  const editUsers = async (user: Users) => {
    try {
      const resp = await axios.put('/api/users', user);
      users.value = resp.data;
    } catch (e) {
      console.log(e);
    }
  };

  const deleteUsers = async (user: Users) => {
    try {
      const resp = await axios.delete(`/api/users/${user._id}`);
      users.value = resp.data;
    } catch (e) {
      console.log(e);
    }
  };

  const updateCart = async (id: string, quantity: number) => {
    if (quantity === 0) {
      users.value.cart = users.value.cart.filter((el) => el._id !== id);
    } else {
      const item = menus.products.find((el) => el._id === id);
      const newCartItem = { ...item, quantity };
      if (!users.value?.cart) {
        users.value.cart = [];
      }
      users.value.cart = [newCartItem, ...users.value.cart];
    }
    const resp = await axios.put('/api/users', users.value);
    users.value = resp.data;
  };

  const isAdmin = computed(() => {
    return users.value?.admin;
  });

  const login = async (username: string, password: string) => {
    try {
      const loginUser = await signInWithEmailAndPassword(
        auth,
        username,
        password
      );
      const uid = await loginUser.user.uid;
      console.log('loginUser', loginUser);
      const resp = await axios.post('/api/users/login', { uid });
      users.value = resp.data;
      isLogin.value = true;
      router.push('/menu-list');
    } catch (e) {
      console.log(e);
    }
    return userCredential;
  };

  const signUp = async (email: string, password: string) => {
    try {
      const loginUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const uid = await loginUser.user.uid;
      console.log('loginUser', loginUser);
      const resp = await axios.post('/api/users/register', { uid, email });
      users.value = resp.data;
      router.push('/profile');
    } catch (e) {
      console.log(e);
    }
    return userCredential;
  };

  const signInUsingGoogle = () => {
    signInWithPopup(auth, providerGoogle)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        // const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((_) => {
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      users.value = user;
      console.log('login');
    } else {
      users.value = null;
      console.log('logout');
    }
  });

  const logout = () => {
    users.value = null;
    router.push('/login');
    signOut(auth);
  };

  return {
    users,
    addUsers,
    editUsers,
    deleteUsers,
    updateCart,
    getUser,
    isAdmin,
    login,
    logout,
    signUp,
  };
});
