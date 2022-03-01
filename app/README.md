# memo

- settings -> preferences -> debug -> disable javascript

```
Page                                       Size     First Load JS
┌ ○ /                                      6.84 kB        77.2 kB
├   └ css/4c79e32b027dfb76.css             675 B
├   /_app                                  0 B            70.4 kB
├ ○ /404                                   879 B          71.2 kB
├   └ css/7b4697e1d3a602ad.css             449 B
├ λ /api/hello                             0 B            70.4 kB
├ ○ /route                                 898 B          71.2 kB
├ ○ /route/dynamic/params1/[[...params]]   1.13 kB        71.5 kB
├ ○ /route/dynamic/params1/test            915 B          71.3 kB
├ ○ /route/dynamic/params2/[...params]     1.12 kB        71.5 kB
├ ○ /route/dynamic/params3/[productId]     951 B          71.3 kB
├ ○ /route/route1                          903 B          71.3 kB
├ ○ /route/route2                          905 B          71.3 kB
└ ○ /route2                                906 B          71.3 kB
+ First Load JS shared by all              70.4 kB
  ├ chunks/framework-91d7f78b5b4003c8.js   42 kB
  ├ chunks/main-1e7421553b9673ee.js        26.9 kB
  ├ chunks/pages/_app-b6514e4dc23feac6.js  640 B
  ├ chunks/webpack-514908bffb652963.js     770 B
  └ css/27d177a30947857b.css               194 B

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)


Page                              Size     First Load JS
┌ ○ /                             370 B          67.3 kB
├   /_app                         0 B            66.9 kB
└ ○ /404                          194 B          67.1 kB
+ First Load JS shared by all     66.9 kB
  ├ chunks/framework.b97a0e.js    42 kB
  ├ chunks/main.c4f254.js         23.6 kB
  ├ chunks/pages/_app.acce9c.js   555 B
  ├ chunks/webpack.1a8a25.js      729 B
  └ css/ddf05e9568a1b0bff90b.css  1.34 kB

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)
●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)
   (ISR)     incremental static regeneration (uses revalidate in getStaticProps)
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
