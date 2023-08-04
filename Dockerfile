# build environment
FROM node:18.16 as build-stage
WORKDIR /app/server
COPY package.json .
COPY package-lock.json .
COPY tsconfig.json .
COPY firebase-creds.json .
COPY webpack.config.server.js .
COPY index.ts .
COPY ./src ./src

RUN npm ci
RUN npm run build:dev:server

EXPOSE 8080

CMD ["node", "build/main.js"]