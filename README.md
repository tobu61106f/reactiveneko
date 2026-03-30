# reactive/atomicneko template

This repository is the repository of my homepage (https://futa.moe/amphineko/) that can be used as a template.

Visit [reactiveneko.vercel.app](https://reactiveneko.vercel.app/) or [reactiveneko.pages.dev](https://reactiveneko.pages.dev/) for a live deployment of the master branch.

This repository is the ~~experimental~~ next version of [atomicneko](https://github.com/amphineko/atomicneko).

## Getting Started

Indeed, you should inspect `src/config.tsx` to change the content of the page before deploying.

To start a local development server, run `yarn` to install dependencies, and `yarn dev` to start the development server.

The server should be available at `http://localhost:3000`.

## Deploying

There are multiple ways to deploy this project.

Here are some recommended options: Vercel, Netlify, GitHub Pages, and Cloudflare Pages.

### GitHub Pages

This repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys to GitHub Pages on every push to the `main` branch.

### Cloudflare Pages

This repository includes a GitHub Actions workflow (`.github/workflows/deploy-cloudflare.yml`) for deploying to Cloudflare Pages. To set it up:

1. Create a Cloudflare Pages project in the [Cloudflare dashboard](https://dash.cloudflare.com/).
2. Create a Cloudflare API token with **Cloudflare Pages: Edit** permission.
3. Add the following secrets to your GitHub repository (Settings → Secrets and variables → Actions):
   - `CLOUDFLARE_API_TOKEN`: Your Cloudflare API token
   - `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare account ID (found in the dashboard URL or sidebar)
   - `CLOUDFLARE_PROJECT_NAME`: The name of your Cloudflare Pages project
4. Push to the `main` branch or trigger the workflow manually to deploy.

## FAQs

### Dynamic Steam profile name doesn't work

There are some options to solve this issue.

**With official Steam API**: Update `NEXT_PUBLIC_STEAM_GET_PLAYER_SUMMARIES` in the `.env` file or your deployment settings, to use your own Steam API key and Steam ID. Please notice that you should configure your Steam API key to return your own domain name for CORS requests.

**Proxy server**: Alternatively, you can use a proxy server to handle the CORS requests.

**Replace with static values**: You can still replace the dynamic component with a static name on the page, like how the osu! profile name is displayed.

## Roadmap

-   [x] Migrate to React and next.js
-   [x] Add dynamically fetched usernames
-   [ ] Add static site generation (blocked by `next/image` unsupported by `next export`)
-   [ ] Add other roadmap items
