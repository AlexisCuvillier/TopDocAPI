# syntax=docker/dockerfile:1

FROM node:18-alpine


ADD . /app/
WORKDIR /app

#
RUN ls -a

#
RUN npm install

#
RUN npm run build

#
CMD [ "npm","run","start" ]