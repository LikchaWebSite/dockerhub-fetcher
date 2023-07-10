# syntax=docker/dockerfile:1

FROM node:18-alpine

WORKDIR /fetcher-app

ARG PORT=3000

ENV NODE_ENV=development
ENV PORT=$PORT

COPY package*.json .npmrc ./

RUN npm ci

COPY . .

RUN npm run build

EXPOSE $PORT

ENTRYPOINT [ "npm", "run", "start:prod" ]