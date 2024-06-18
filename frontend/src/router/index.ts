import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router';
import RegisterPage from '@/pages/Register.vue';
import LoginPage from '@/pages/Login.vue';
import MenuItemsPage from '@/pages/MenuItems.vue';
import MenuListPage from '@/pages/MenuList.vue';
import AdminMenuListPage from '@/pages/AdminMenuList.vue';
import Homepage from '@/pages/Home.vue';
import UserPage from '@/pages/Users.vue';
import OrderListPage from '@/pages/OrdersList.vue';
import ProfilePage from '@/pages/Profile.vue';
import ProfileInfoPage from '@/pages/ProfileInfo.vue';
import CartPage from '@/pages/Cart.vue';

const routes: RouteRecordRaw[] = [
  { path: '/login', component: LoginPage, name: 'login' },
  { path: '/register', component: RegisterPage, name: 'signup' },
  { path: '/menu-list', component: MenuListPage, name: 'menu-list' },
  {
    path: '/profile',
    component: ProfilePage,
    children: [
      {
        path: 'menu-list',
        component: AdminMenuListPage,
        name: 'admin-menu-list',
      },
      {
        path: 'menu-item/:id',
        component: MenuItemsPage,
        name: 'menu-item',
      },
      { path: 'users', component: UserPage, name: 'users' },
      { path: 'orders-list', component: OrderListPage, name: 'orders-list' },
      { path: 'orders-item/:id', component: CartPage, name: 'orders-item' },
      { path: '', component: ProfileInfoPage, name: 'profile' },
    ],
  },
  { path: '/cart', component: CartPage, name: 'cart' },
  { path: '/', component: Homepage, name: 'home' },
];

const router = createRouter({
  linkExactActiveClass: 'text-orange-900',
  history: createWebHistory(),
  routes,
});

export default router;
