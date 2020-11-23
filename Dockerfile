FROM node:latest

RUN mkdir -p /usr/src/notification

WORKDIR /usr/src/notification

COPY package.json /usr/src/notification

RUN npm install

COPY . /usr/src/notification

EXPOSE 3005

CMD ["npm","run","dev]
