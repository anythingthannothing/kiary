FROM node:20-alpine As deps

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY --chown=node:node ../nest-msa/package*.json ./

RUN npm ci --only=production && npm cache clean --force

USER node

FROM node:20-alpine As build

WORKDIR /app

ENV NODE_ENV production

COPY --chown=node:node --from=deps ./app/node_modules ./node_modules
COPY --chown=node:node ../nest-msa/apps/auth ./apps/auth
COPY --chown=node:node ../nest-msa/libs ./libs
COPY --chown=node:node ../nest-msa/nest-cli.json .
COPY --chown=node:node ../nest-msa/tsconfig.json .

RUN npm run build

USER node

FROM node:20-alpine As production

ENV NODE_ENV production

COPY --chown=node:node --from=build /app/node_modules ./node_modules
COPY --chown=node:node --from=build /app/dist ./dist
COPY --chown=node:node --from=build /app/.env.production .

CMD [ "node", "dist/apps/auth/src/main.js" ]
