import _ from "lodash";
import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin(async () => {
  const router = useRouter();

  const { domainPrefixes } = useDomain();

  router.getRoutes().forEach((route) => {
    domainPrefixes.value
      .filter((prefix) => prefix !== "/")
      .forEach((prefix) => {
        const clonedRoute = _.clone(route);
        clonedRoute.path =
          clonedRoute.path === "/" ? prefix : prefix + clonedRoute.path;
        clonedRoute.name = prefix + "__" + clonedRoute.name?.toString();
        router.addRoute(clonedRoute);
      });
  });
});
