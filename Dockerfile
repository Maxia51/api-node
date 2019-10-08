FROM node

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./
COPY src/ src/

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]