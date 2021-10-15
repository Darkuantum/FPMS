FROM node:12

WORKDIR /app 

# Caches the packages so that you do not reinstall the packages
COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=8080

EXPOSE 8080

CMD [ "npm", "start" ]
