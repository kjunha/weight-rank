FROM node:15-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install -g @adonisjs/cli
RUN npm install
COPY ../.. .
