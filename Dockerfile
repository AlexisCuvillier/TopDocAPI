# syntax=docker/dockerfile:1

FROM node:18-alpine

#
ADD . /app/
WORKDIR /app

#
RUN touch .env

#
RUN ls -a

#
RUN npm install

#
RUN npm run build

#
RUN --mount=type=secret,PORT=PORT NAME_DATABASE=NAME_DATABASE HOST_DATABASE=HOST_DATABASE PASS_DATABASE=PASS_DATABASE HOST_DATA=HOST_DATA,dst=/.env

#
EXPOSE 5005

#
CMD [ "npm","run","start" ]