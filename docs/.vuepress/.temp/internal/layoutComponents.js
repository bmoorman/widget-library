import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("C:/Prj/code/widget-library/node_modules/@vuepress/theme-default/lib/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("C:/Prj/code/widget-library/node_modules/@vuepress/theme-default/lib/layouts/Layout.vue")),
}
