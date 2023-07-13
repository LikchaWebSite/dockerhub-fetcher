# syntax=docker/dockerfile:1

FROM node:18-alpine

WORKDIR /fetcher-app

ARG PORT=3333
ARG HOST=0.0.0.0

ENV NODE_ENV=development
ENV PORT=$PORT
ENV HOST=$HOST

COPY package*.json .npmrc ./

RUN npm ci

COPY . .

RUN npm run build

EXPOSE $PORT

ENTRYPOINT ["npm", "run", "start:prod"]