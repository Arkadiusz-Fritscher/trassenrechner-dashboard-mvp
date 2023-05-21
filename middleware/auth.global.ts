export default defineNuxtRouteMiddleware((to, from) => {
  // if (process.server) return;

  const isAuth = useAuth();
  if (to.path !== "/login" && to.path !== "/signup" && !isAuth.value) {
    return "/login";
  }
});
