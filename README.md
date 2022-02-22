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
- バグのデバックがしやすい（何かしらの静的ページを表示してくれる）
  > React だと真っ白いページが表示される
- 表示されるページごとに情報を割り振れる(`<title></title>`で指定できる)

## Next.js を選択するデメリット

- フレームワークであるため特徴を把握する必要がある
- Docker image が少し大きくなってしまう
