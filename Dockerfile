FROM node:12
WORKDIR /app
COPY package*.json /app
RUN npm install --production
COPY . /app
CMD node app.js
EXPOSE 3000