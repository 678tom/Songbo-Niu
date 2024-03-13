FROM node:alpine AS base

WORKDIR /app

FROM base AS builder

COPY package*.json .babelrc ./

RUN npm ci

COPY ./src ./src
COPY ./index.js .
COPY ./.env.example .
COPY ./prisma ./prisma

RUN npm run build

RUN npm prune --production

FROM base AS release

ENV NODE_ENV production

COPY --from=builder /app/package.json .
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.env.example .
COPY --from=builder /app/index.js .
COPY --from=builder /app/dist ./dist

USER node
EXPOSE 4000

ENTRYPOINT [ "npm", "start" ]
