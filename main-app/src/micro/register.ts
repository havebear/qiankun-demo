import { registerMicroApps, start } from "qiankun";
import { microApps } from "./config";

export function useQiankun() {
  registerMicroApps(microApps, {
    beforeLoad: [(app) => console.log("[beforeLoad]", app.name)],
    beforeMount: [(app) => console.log("[beforeMount]", app.name)],
    afterUnmount: [(app) => console.log("[afterUnmount]", app.name)],
  });
  start({
    sandbox: {
      strictStyleIsolation: true,
      experimentalStyleIsolation: true,
    },
  });
}
