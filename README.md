# Health Tracker Front End

This repo contains the front end of the Nubadoo Health Tracker App.  It is a Vue 3 written using SPA that uses Tailwind and vanilla JavaScript.

### Compile and Hot-Reload for Development

Clone the repo to your local machine and then run the following commands:

```sh
npm install
npm run dev
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

### Compile and Minify for Production

```sh
npm run build
```

## Github Action

A Github Action in this repo will take the main branch, compile and minify the app and push it to an S3 bucket for static hosting.

## Other Related Repos
- Infrastustructure for the App can be found int the Terraform code of the **infrastucutre-as-code** repo.
  - Make sure you a solution in place for the state files or check out **terraform-backend**
- A backend is contained in the **api.nubadoo.com** repo.
- The **database** repo contains the code and pipelines to get the standard database up and running.
- The website for the project is in **www.nubadoo.com**
- The DX portal is contained in **developer.nubadoo.com**
- Other supplementary repos exist that were used in the development of this project.

## Contributing

Tanka look at the issue list and create a branch based on the issues.
Or create a pull request on your work and we can merge it into the main branch if it passess a tests and standards and matches the product roadmap.
