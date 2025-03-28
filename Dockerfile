FROM node:18-alpine
WORKDIR /mybank/
COPY public/ /mybank/public
COPY src/ /mybank/src
COPY package.json /mybank/
RUN npm install
CMD ["npm", "run", "dev"]