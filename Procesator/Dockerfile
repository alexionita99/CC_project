FROM node:16-alpine

RUN npm install -g bingmaps
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
CMD ["npm", "run", "start"]