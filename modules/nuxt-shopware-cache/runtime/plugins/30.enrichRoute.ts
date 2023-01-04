import _ from "lodash";
import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin(async () => {
  const time1 = new Date().getTime();
  const router = useRouter();

  const { domains } = useDomain();

  router.getRoutes().forEach((route) => {
    domains.value
      .filter((domain) => domain.path !== "/")
      .forEach((domain) => {
        const clonedRoute = _.clone(route);
        clonedRoute.path =
          clonedRoute.path === "/"
            ? domain.path
            : domain.path + clonedRoute.path;
        clonedRoute.name = domain.path + "__" + clonedRoute.name?.toString();
        router.addRoute(clonedRoute);
      });
  });
  const time2 = new Date().getTime();
  console.log("30.enrichRoute: ", time2 - time1);
});
