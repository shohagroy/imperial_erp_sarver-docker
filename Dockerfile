FROM node:alpine
COPY . /server

WORKDIR /server
EXPOSE 5000

RUN npm install
CMD ["node", "server.js"]