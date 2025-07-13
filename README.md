# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
npm install
```

## Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

### Automated GitHub Pages Deployment

This site is configured for automated deployment to GitHub Pages using GitHub Actions. The deployment pipeline includes:

- **Automatic deployment** when pushing to the `main` branch
- **Pull request testing** to ensure builds work before merging

#### GitHub Actions Workflows

1. **`.github/workflows/deploy.yml`** - Deploys to GitHub Pages on push to main
2. **`.github/workflows/test-deploy.yml`** - Tests the build on pull requests

### Branch Strategy

- **`main` branch**: Production branch that automatically deploys to https://sophiedeziel.github.io
- **Feature branches**: Create branches for new features/content, then open pull requests to main

### Deployment Process

1. **Direct to main** (for small changes):
   ```bash
   git add .
   git commit -m "Your changes"
   git push origin main
   ```
   GitHub Actions will automatically build and deploy to GitHub Pages.

2. **Via Pull Request** (recommended for larger changes):
   ```bash
   git checkout -b feature/your-feature-name
   git add .
   git commit -m "Your changes"
   git push origin feature/your-feature-name
   ```
   Then create a pull request on GitHub. The test workflow will verify the build succeeds.

### Manual Deployment (Alternative)

If you need to deploy manually:

```bash
npm run deploy
```

Note: The automated GitHub Actions deployment is the preferred method.

## Creating Content

### Creating a New Documentation Page

1. **Add a new Markdown file** in the `docs/` directory:
   ```bash
   touch docs/my-new-page.md
   ```

2. **Add front matter and content**:
   ```markdown
   ---
   sidebar_position: 2
   title: My New Page
   ---

   # My New Page

   Your content here...
   ```

3. **Update sidebar** (if needed) in `sidebars.js` to control the navigation structure.

### Creating a New Blog Post

1. **Create a new Markdown file** in the `blog/` directory:
   ```bash
   touch blog/2025-01-13-my-blog-post.md
   ```

2. **Add front matter and content**:
   ```markdown
   ---
   slug: my-blog-post
   title: My Blog Post
   authors: [your-name]
   tags: [docusaurus, tutorial]
   ---

   Your blog content here...
   ```

3. **Add author information** in `blog/authors.yml` if you're a new author.

### Creating a Custom Page

1. **Create a React component** in `src/pages/`:
   ```bash
   touch src/pages/my-page.js
   ```

2. **Add your React component**:
   ```jsx
   import React from 'react';
   import Layout from '@theme/Layout';

   export default function MyPage() {
     return (
       <Layout title="My Page">
         <div style={{padding: '2rem'}}>
           <h1>My Custom Page</h1>
           <p>This page is accessible at /my-page</p>
         </div>
       </Layout>
     );
   }
   ```

3. The page will be automatically available at `/my-page`.

### Content Guidelines

- **Markdown files**: Use `.md` or `.mdx` extensions
- **Images**: Place in `static/img/` and reference as `/img/your-image.png`
- **Front matter**: Always include title and other metadata
- **File naming**: Use kebab-case (e.g., `my-new-page.md`)

### Testing Your Changes Locally

Always test your changes before pushing:

```bash
npm start  # For development preview
npm run build  # To test the production build
```
