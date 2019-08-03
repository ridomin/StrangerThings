FROM node:10.16.0-alpine
WORKDIR /usr/app

COPY . .
RUN npm i -g concurrently yarn \ 
    && yarn install \
    && yarn run build

EXPOSE 3001

CMD ["node", "server/server.js"]