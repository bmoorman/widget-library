import { defineAsyncComponent } from 'vue'

export const pagesComponent = {
  "/guide.html": defineAsyncComponent(() => import(/* webpackChunkName: "v-5d7259d4" */"C:/Prj/code/widget-library/docs/.vuepress/.temp/pages/guide.vue")),
  "/": defineAsyncComponent(() => import(/* webpackChunkName: "v-8daa1a0e" */"C:/Prj/code/widget-library/docs/.vuepress/.temp/pages/README.vue")),
  "/components/": defineAsyncComponent(() => import(/* webpackChunkName: "v-1020f180" */"C:/Prj/code/widget-library/docs/.vuepress/.temp/pages/components/README.vue")),
  "/components/standard-component.html": defineAsyncComponent(() => import(/* webpackChunkName: "v-2d70b068" */"C:/Prj/code/widget-library/docs/.vuepress/.temp/pages/components/standard-component.vue")),
  "/404.html": defineAsyncComponent(() => import(/* webpackChunkName: "v-3706649a" */"C:/Prj/code/widget-library/docs/.vuepress/.temp/pages/404.html.vue")),
}
