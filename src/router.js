import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/contact-list",
      name: "contactListPage",
      component: () =>
        import(/* webpackChunkName: "contactListPage" */ "./views/ContactListPage.vue")
    },
    {
      path: "/profile-card",
      name: "profileCardPage",
      component: () =>
        import(/* webpackChunkName: "profileCardPage" */ "./views/ProfileCardPage.vue")
    },
    {
      path: "/landing-page",
      name: "landingPage",
      component: () =>
        import(/* webpackChunkName: "landingPage" */ "./views/LandingPage.vue")
    },
  ]
});
