# Getting Started

How to use the library in a project

This vue component library is not puplished to npm so npm install component-lib does not work!
Instead use this method:
- Clone the [component-lib](http://gitlab.stienenbe.com/farmconnect/component-lib) repository
- Add following to your own project's package.json
> "dependencies": {
>     "component-lib": "git+http://gitlab.stienenbe.com/farmconnect/component-lib.git#master"
>   },
- Add following to your main.js to use the library's components globally
> import ComponentLib from 'component-lib'
> 
> Vue.use(ComponentLib)
- Open terminal in the cloned directory 'component-lib' and run 'npm link'
- Go into your project directory and run 'npm link component-lib'
- Individual components from the library can now be used in your templates