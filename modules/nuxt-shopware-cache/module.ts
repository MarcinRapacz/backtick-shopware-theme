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
      handler: resolve(runtimeDir, "api", "sync-admin.put.ts"),
      method: "put",
    });

    addServerHandler({
      route: "/api/cache/sales-channel",
      handler: resolve(runtimeDir, "api", "cache-sales-channel.get.ts"),
      method: "get",
    });

    addServerHandler({
      route: "/api/cache/snippets/:setId",
      handler: resolve(runtimeDir, "api", "cache-snippet.get.ts"),
      method: "get",
    });

    // This order is important
    addPlugin(resolve(runtimeDir, "plugins", "16.setWatchers.ts"));
    addPlugin(resolve(runtimeDir, "plugins", "14.setRuntimeData.ts"));
    addPlugin(resolve(runtimeDir, "plugins", "12.enrichRoute.ts"));
    addPlugin(resolve(runtimeDir, "plugins", "10.injectAdminData.ts"));

    addImportsDir(resolve(runtimeDir, "composables"));
  },
});
