FROM node:20

RUN npm install -g pnpm

ARG PUBLIC_STRAPI_ENV=/graphql
ARG PUBLIC_STRAPI_IMAGES=/
ARG PUBLIC_BASE_URL=/isa

ENV NODE_TLS_REJECT_UNAUTHORIZED=0

WORKDIR /app

COPY package.json ./

RUN pnpm install

COPY . .

RUN pnpm run build

EXPOSE 3000

CMD ["pnpm", "serve"]