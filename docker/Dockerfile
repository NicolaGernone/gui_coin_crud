# Dockerfile

FROM node:14-alpine

WORKDIR /app

COPY package.json ./
RUN npm install

COPY . .

ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
