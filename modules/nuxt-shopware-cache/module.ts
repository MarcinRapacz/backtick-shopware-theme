import { fileURLToPath } from "url";
import {
  defineNuxtModule,
  addServerHandler,
  addPlugin,
  addImportsDir,
  createResolver,
} from "@nuxt/kit";

export interface ModuleOptions {
  addPlugin: boolean;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "shopware-sync-admin-api",
    configKey: "shopwareSyncAdminApi",
  },
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);
    const runtimeDir = fileURLToPath(new URL("./runtime", import.meta.url));

    addServerHandler({
      route: "/api/sync-admin",
      handler: resolve(runtimeDir, "endpoints", "syncAdmin.ts"),
      method: "put",
    });

    addServerHandler({
      route: "/api/get-admin",
      handler: resolve(runtimeDir, "endpoints", "getAdmin.ts"),
      method: "get",
    });

    // This order is important
    addPlugin(resolve(runtimeDir, "plugins", "20.setRuntimeData.ts"));
    addPlugin(resolve(runtimeDir, "plugins", "10.injectAdminData.ts"));

    addImportsDir(resolve(runtimeDir, "composables"));
  },
});
