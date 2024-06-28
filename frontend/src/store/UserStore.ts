import { computed, ref, watch } from 'vue';
import { defineStore } from 'pinia';
import { Users, Menu, CartMenu } from '@/interfaces';
import axios from '@/utility/intercepter';
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
  const token = ref<string | null>(null);
  const menus = useMenus();
  const auth = getAuth();
  const isLogin = ref(false);
  const userCredential = ref<null | UserCredential>(null);
  const providerGoogle = new GoogleAuthProvider();
  const router = useRouter();

  watch(token, (newVal) => {
    sessionStorage.setItem('token', newVal);
  });

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

  const updateCart = async (id: string, quantity: number, index: number) => {
    if (quantity === 0) {
      users.value.cart = users.value.cart.filter(
        (el, i) => !(el._id === id && index === i)
      );
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
      const uid = loginUser.user.uid;
      console.log('loginUser', loginUser);
      token.value = await loginUser.user.getIdToken();
      const resp = await axios.post('/api/login/login', { uid });
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
      token.value = await loginUser.user.getIdToken();
      const resp = await axios.post('/api/login/register', { uid, email });
      users.value = resp.data;
      router.push('/profile/' + resp.data._id);
    } catch (e) {
      console.log(e);
    }
    return userCredential;
  };

  const signInUsingGoogle = () => {
    signInWithPopup(auth, providerGoogle)
      .then(async (result) => {
        GoogleAuthProvider.credentialFromResult(result);
        const uid = result.user.uid;
        token.value = await result.user.getIdToken();
        const resp = await axios.post('/api/login/login', { uid });
        users.value = resp.data;
        isLogin.value = true;
        router.push('/menu-list');
        console.log(result);
      })
      .catch((_) => {
        logout();
      });
  };

  const signUpUsingGoogle = () => {
    signInWithPopup(auth, providerGoogle)
      .then(async (result) => {
        GoogleAuthProvider.credentialFromResult(result);
        const uid = result.user.uid;
        const email = result?.user.email;
        const name = result.user?.displayName;
        const imageUrl = result.user?.photoURL;
        const phone = result.user?.phoneNumber;
        token.value = await result.user.getIdToken();
        const resp = await axios.post('/api/login/register', {
          uid,
          email,
          name,
          imageUrl,
          phone,
        });
        users.value = resp.data;
        router.push('/profile/' + resp.data._id);
        console.log(result);
      })
      .catch((_) => {
        logout();
      });
  };

  onAuthStateChanged(auth, async (loginUser) => {
    if (loginUser) {
      if (!users.value) {
        const uid = await loginUser.uid;
        console.log('loginUser', loginUser);
        token.value = await loginUser.getIdToken();
        const resp = await axios.post('/api/login/login', { uid });
        users.value = resp.data;
        isLogin.value = true;
        router.push('/menu-list');
      }
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
    signInUsingGoogle,
    signUpUsingGoogle,
  };
});
