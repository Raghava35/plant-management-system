FROM node
WORKDIR /usr/app
COPY package*.json ./
RUN npm install 
EXPOSE 80
CMD [ “npm”, “run”, “start” ]
