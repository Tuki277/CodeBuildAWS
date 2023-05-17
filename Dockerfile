
# --platform=linux/amd64 node:16
FROM node:16

#create app directory
WORKDIR /app

COPY package*.json /app/

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080

CMD ["node", "app.js"]