FROM node:20-alpine AS deps

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY ../kiary-web-app/package*.json .

RUN npm ci && npm cache clean --force

FROM node:20-alpine AS development

WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

EXPOSE 3000

ENV PORT 3000

USER nextjs

CMD ["npm", "run", "dev"]