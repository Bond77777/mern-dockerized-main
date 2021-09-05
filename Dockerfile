# Production
FROM keymetrics/pm2:8-alpine
WORKDIR /app
COPY /build/package*.json /app/
RUN yarn install --pure-lockfile
COPY /build/ /app/
EXPOSE 80
CMD ["yarn", "start"]
