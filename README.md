# Vue element ui quick start

## Project setup
```
yarn install
$ yarn global add pm2
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your end-to-end tests
```
yarn run test:e2e
```

### Run your unit tests
```
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