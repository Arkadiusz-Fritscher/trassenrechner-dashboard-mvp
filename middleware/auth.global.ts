export default defineNuxtRouteMiddleware((to, from) => {
  // if (process.server) return;

  const isAuth = useAuth();
  const company = useCompany();
  if (to.path !== "/login" && to.path !== "/signup" && !isAuth.value) {
    return "/login";
  }
});
