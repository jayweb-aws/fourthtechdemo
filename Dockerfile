FROM node:18-alpine3.17 as build
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
