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

# #
# RUN --mount=type=secret,id=PORT,dst=/.env
# RUN --mount=type=secret,id=NAME_DATABASE,dst=/.env
# RUN --mount=type=secret,id=HOST_DATABASE,dst=/.env
# RUN --mount=type=secret,id=PASS_DATABASE,dst=/.env
# RUN --mount=type=secret,id=HOST_DATA,dst=/.env

#
EXPOSE 5005

#
CMD [ "npm","run","start" ]