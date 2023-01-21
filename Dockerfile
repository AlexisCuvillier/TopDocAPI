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
EXPOSE 5005

#
CMD [ "npm","run","start", "--environnement = Developpement"]