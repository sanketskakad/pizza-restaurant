import { useUsers } from '@/store/UserStore';
import {
  createWebHistory,
  createRouter,
  RouteRecordRaw,
  RouteLocationNormalized,
  NavigationGuardNext,
} from 'vue-router';

const RegisterPage = () => import('@/pages/Register.vue');
const LoginPage = () => import('@/pages/Login.vue');
const MenuItemsPage = () => import('@/pages/MenuItems.vue');
const MenuListPage = () => import('@/pages/MenuList.vue');
const AdminMenuListPage = () => import('@/pages/AdminMenuList.vue');
const Homepage = () => import('@/pages/Home.vue');
const UserPage = () => import('@/pages/Users.vue');
const OrderListPage = () => import('@/pages/OrdersList.vue');
const ProfilePage = () => import('@/pages/Profile.vue');
const ProfileInfoPage = () => import('@/pages/ProfileInfo.vue');
const CartPage = () => import('@/pages/Cart.vue');
const NotFoundPage = () => import('@/pages/NotFound.vue');

const routes: RouteRecordRaw[] = [
  { path: '/login', component: LoginPage, name: 'login' },
  { path: '/register', component: RegisterPage, name: 'signup' },
  { path: '/menu-list', component: MenuListPage, name: 'menu-list' },
  {
    path: '/admin/menu-list',
    component: AdminMenuListPage,
    name: 'admin-menu-list',
    meta: { requiresAuth: true, admin: true },
  },
  {
    path: '/admin//users',
    component: UserPage,
    name: 'users',
    meta: { requiresAuth: true, admin: true },
  },
  {
    path: '/orders-item/:id',
    component: CartPage,
    name: 'orders-item',
    meta: { requiresAuth: true },
  },
  {
    path: '/order-list',
    component: OrderListPage,
    name: 'orders-list',
    meta: { requiresAuth: true },
  },
  {
    path: '/profile/:id',
    component: ProfileInfoPage,
    name: 'profile',
    meta: { requiresAuth: true },
  },
  {
    path: '/menu-item/:id',
    component: MenuItemsPage,
    name: 'menu-item-with-id',
  },
  {
    path: '/menu-item',
    component: MenuItemsPage,
    name: 'menu-item',
  },
  {
    path: '/cart',
    component: CartPage,
    name: 'cart',
    meta: { requiresAuth: true },
  },
  { path: '/', component: Homepage, name: 'home' },
  { path: '/404', component: NotFoundPage },
  { path: '/:catchAll(.*)', redirect: '/404' },
];

const router = createRouter({
  linkExactActiveClass: 'text-orange-900',
  history: createWebHistory(),
  routes,
});

router.beforeEach(
  (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    const useUser = useUsers();
    if (to.matched.some((record) => record.meta.requiresAuth)) {
      if (useUser.users) {
        if (to.matched.some((record) => record.meta?.admin)) {
          if (useUser.users?.admin) {
            next();
          } else {
            router.push('/');
          }
        } else {
          next();
        }
      } else {
        router.push('/login');
      }
    } else {
      next();
    }
  }
);

export default router;
