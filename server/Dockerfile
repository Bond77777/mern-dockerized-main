# Development
FROM node:10-alpine

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

WORKDIR /server
COPY package*.json /server/
RUN yarn install --pure-lockfile
COPY . /server/

EXPOSE 80

CMD ["yarn", "run", "dev"]
