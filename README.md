# Nubadoo Health Tracker App - Front End

This repository houses the front-end codebase for the Nubadoo Health Tracker App. It's built on Vue 3, utilizing a single-page application (SPA) architecture, and employs Tailwind alongside vanilla JavaScript.

### Compile and Hot-Reload for Development

To begin local development, clone this repository to your machine and execute the following commands:

```sh
npm install
npm run dev
```

### Recommended IDE Setup
For an optimal development experience, consider using the following setup:

- VSCode
- Volar (disable Vetur)
- TypeScript Vue Plugin (Volar)

### Custom Configuration
For detailed configuration options, refer to the Vite Configuration Reference.

### Compile and Minify for Production
To build the application for production, execute:

```sh
npm run build
```

### GitHub Action
The repository incorporates a GitHub Action that automatically compiles, minifies the app, and pushes it to an S3 bucket for static hosting upon updates to the main branch.

### Other Related Repositories
- Infrastructure for the app is available in the Terraform code of the **infrastructure-as-code** repository.
- Ensure proper handling of state files or refer to terraform-backend
- Backend functionalities reside in the **api.nubadoo.com** repository.
- The **database** repository contains code and pipelines necessary to set up the standard database.
- Explore the project's website repo at **www.nubadoo.com**.
- The DX portal repo is situated in **developer.nubadoo.com**.
- Various supplementary repositories were instrumental during the project's development.

### Contributing
To contribute, consider the following steps:

- Review the issue list and create a branch relevant to an issue.
- Alternatively, create a pull request for your work, ensuring it meets testing, standards, and aligns with the product roadmap for potential merge into the main branch.
