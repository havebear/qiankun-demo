import type { RegistrableApp } from "qiankun";

export const microApps: RegistrableApp<any>[] = [
  {
    name: "vue3-sub",
    entry: "//localhost:5174",
    container: "#sub-container",
    activeRule: "/vue3-sub",
    props: { base: "/vue3-sub/" },
  },
  {
    name: "vue3-sub2",
    entry: "//localhost:5175",
    container: "#sub-container",
    activeRule: "/vue3-sub2",
  },
];
