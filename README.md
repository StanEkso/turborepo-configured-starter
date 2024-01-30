# Turborepo configured

This is an unofficial starter Turborepo, configured for usage with Nest.JS, Vite and etc.

## How to use this starter pack?

Clone this repository or just take required configs!

## Which extra configurations this project has?

### Apps

- `vite-project`: a Vite app
- `nest-project`: a Nest projetc
- `web`: a [Next.js](https://nextjs.org/) app (just from scratch)

### Packages

- `@repo/ui`: a stub React component library
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo
- `@repo/shared`: a library to use between BE (Nest) and FE (Next mostly!)
- `@repo/shared-vite`: a library for Vite, because of specific build process in Vite

## Configuration

### Correct work with Vercel CD processes

Usually I had problems, when shared libraries had incorrect cache on Vercel remote. So, e.g. build of `web` crashes because of insufficient lib builds

Now caches are configured pretty well, they can be cached (with outputs!) and Vercel CD works perfectly

### Caching of Vite, Nest, etc. applications

With support of caching for libraries, support for caching other builds was provided.

So, now you can run `pnpm build` and everything can be cached!

## Usage

### Shared (buildable libraries) with default CJS format

You can check example in [packages/shared](./packages/shared/). It's only requires some changes in `package.json` and providing correct `turbo.json`

### Shared (buildable libraries) with both CJS/ESM formats

You can check example in [packages/shared-vite](./packages/shared-vite/). It's only requires some changes in `package.json` and providing correct `turbo.json`.

Result is achieved with usage of [tsup](https://github.com/egoist/tsup) lib.
