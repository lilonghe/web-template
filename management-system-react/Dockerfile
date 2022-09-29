FROM node:18-alpine as builder

WORKDIR /app
COPY package.json .

RUN npm config set registry http://registry.npm.taobao.org
RUN npm install
COPY . .
# Because Error: The service was stopped
# https://github.com/vitejs/vite/issues/876#issuecomment-824557144
RUN node node_modules/esbuild/install.js
RUN npm run build

FROM nginx:1.23-alpine
COPY nginx.conf /etc/nginx
COPY --from=builder /app/dist /usr/share/nginx/html
