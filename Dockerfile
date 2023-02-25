FROM node:14 AS dependencies
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
RUN npm install

FROM node:14 AS builder
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm run build

ENV PORT 3000
EXPOSE 3000

# Running the app
CMD "npm" "run" "dev"