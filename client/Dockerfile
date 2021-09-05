# Development
FROM node:10-alpine
WORKDIR /client
COPY package*.json /client/
RUN yarn install --pure-lockfile
ADD . /client/
EXPOSE 3002
EXPOSE 35729
CMD ["yarn", "start"]
