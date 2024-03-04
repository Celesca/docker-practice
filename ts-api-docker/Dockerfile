FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

# Build image
RUN npm install 

# Copy all files from current directory to /usr/src/app
COPY . .

RUN npm run build

EXPOSE 4000

CMD ["npm", "start"]