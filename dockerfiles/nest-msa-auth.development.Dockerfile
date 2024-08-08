FROM node:20-alpine As deps

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY --chown=node:node ./package*.json ./

RUN npm install && npm cache clean --force

USER node

FROM node:20-alpine As development

WORKDIR /app

COPY --chown=node:node --from=deps ./app/node_modules ./node_modules

ENV NODE_ENV development

USER node

CMD ["npm", "run", "start:dev:auth"]