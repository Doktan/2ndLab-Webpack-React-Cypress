FROM node:12-alpine as builder
WORKDIR /dist
COPY package.json ./package.json
RUN npm install --only=prod
COPY . /dist
RUN npm run build
FROM nginx:1.16.0-alpine
COPY --from=builder /dist/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]