# Vue element ui quick start

![Github issues](https://img.shields.io/github/issues/chachaxw/vue-element-quick-start)
![Github forks](https://img.shields.io/github/forks/chachaxw/vue-element-quick-start)
![Github stars](https://img.shields.io/github/stars/chachaxw/vue-element-quick-start)

## Project setup

```Yarn
yarn install
$ yarn global add pm2
```

### Compiles and hot-reloads for development

``` Yarn
yarn run serve
```

### Compiles and minifies for production

```Yarn
yarn run build
```

### Run your tests

```Yarn
yarn run test
```

### Lints and fixes files

```Yarn
yarn run lint
```

### Run your end-to-end tests

```Yarn
yarn run test:e2e
```

### Run your unit tests

```Yarn
yarn run test:unit
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Element UI offical website

See [Element UI](https://element.eleme.io/).

### Page Screen Shot

![Screen Shot](http://7xqacx.com1.z0.glb.clouddn.com/backend_managment.png)

### Project Structure

```
.
├── public/                       # public files
│   └── ...
├── server/                       # node server files
│   ├── controller                # node controller files
│       └── ...
│   ├── model                     # node model files or mock data files
│       └── ...
│   └── server.js                 # node start file
├── src/
│   ├── assets/                   # other static files
│   │   └── ...
│   ├── actions/                  # Vuex actions file
│   │   └── ...
│   ├── modules/                  # Vuex modules file
│   │   └── ...
│   ├── store/                    # Vuex store file
│   │   └── ...
│   ├── helpers/                  # helper files(e.g：Ajax)
│   │   └── ...
│   ├── components/               # component files
│   │   └── ...
│   ├── main.js                   # app entry file
│   ├── routes.js                 # app router
│   ├── App.vue                   # app main component
│   └── ...
├── static/                       # pure static assets (directly copied)
├── .babel.config.js              # babel config
├── vue.config.js                 # webpack config
├── cypress.json                  # Cypress config
├── tsconfig.json                 # Typescript config
├── tslint.json                   # Tslint config
└── package.json                  # build scripts and dependencies

```
