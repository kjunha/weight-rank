FROM gcr.io/oc-weight-rank/node:alpine15
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install -g @adonisjs/cli
RUN npm install --only=productionq
COPY . .
CMD npm start
