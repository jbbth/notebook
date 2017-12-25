FROM node:8.9.3-alpine

ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

WORKDIR /usr/src/

COPY app/package.json ./
RUN npm install 
RUN chown -R node:node .
RUN mkdir /usr/src/notes
RUN chown -R node:node /usr/src/notes

USER node

CMD [ "npm", "start" ]
