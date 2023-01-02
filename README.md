# Chris personal website

If you've landed here, you're looking at my personal website's source code. I slapped it together in a couple of days using [sveltekit](https://kit.svelte.dev/). It's hosted out of github pages using the default github deployment actions. Instructions to build/develop locally are below.

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
pnpm run dev

# or start the server and open the app in a new browser tab1
pnpm run dev -- --open
```

## Building

To create a production version of your app:

```bash
pnpm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
