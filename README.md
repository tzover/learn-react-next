# React \* Next.js

> TypeScript / Atomic Design

<img src="./images/next.png" alt="Next.js" width="100%">

[Next.js 公式 URL](https://nextjs.org/)

## Usage

- Make Container

```
docker-compose up -d
```

- In the container

```
docker-compose exec frontend bash
```

- Launch the development server

```
yarn dev
```

- Launch the production server

```
yarn build
yarn start
```

## Basic create environment

- Next.js \* Typescript

```
yarn create-next-app --typescript app
```

## Tech comparison table

|            Library(FW)            |           Framework            |
| :-------------------------------: | :----------------------------: |
| [React.js](https://reactjs.org/)  | [Next.js](https://nextjs.org/) |
|   [Vue.js](https://vuejs.org/)    | [Nuxt.js](https://nuxtjs.org/) |
| [Angular.js](https://angular.io/) |               -                |

## Next.js を選択する理由

- 記述量が React に比べて減る(Routing)
- ビルド時に静的ファイルを生成してくれるため、クライアントアクセス時の負荷が軽減し、動作が早くなる
- バグのデバックがしやすい（何かしらの静的ページを表示してくれる）
  > React だと真っ白いページが表示される
- 表示されるページごとに情報を割り振れる(`<title></title>`で指定できる)

## Next.js を選択するデメリット

- フレームワークであるため特徴を把握する必要がある
- Docker image が少し大きくなってしまう

## Point

- create env

- Routing

  - index
  - dynamic

- rendering

  - revalidate
  - fallback
  - swr

- getStaticProps
- getStaticPaths

- page404
- page500

- next/image
- next/router

- api
