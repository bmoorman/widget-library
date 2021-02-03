import * as components from './components'

const ComponentLib = {
  install(Vue, options = {}) {
    // components
    options.private = true
    for (const componentName in components) {
      const component = components[componentName]

      Vue.component(component.name, component)
    }
  }
}

export default ComponentLib

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(ComponentLib)
}