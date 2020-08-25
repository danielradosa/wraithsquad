import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Shop from '../views/Shop.vue'
import Contact from '../views/Contact.vue'
import Cart from '../views/Cart.vue'
import Product from '../components/Product.vue'
import Missing from '../views/Missing.vue'
import Terms from '../views/Terms.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/terms',
    name: 'Terms',
    component: Terms
  },
  {
    path: '/product',
    name: 'Product',
    component: Product,
    props: true
  },
  {
    path: '*',
    component: Missing
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
