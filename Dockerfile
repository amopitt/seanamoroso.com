# Base stage with Node.js
FROM node:22-alpine AS base
WORKDIR /app

# Development stage
FROM base AS dev
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
EXPOSE 3000
CMD ["sh", "-c", "yarn svelte-kit sync && yarn dev --host 0.0.0.0"]

# Builder stage
FROM base AS builder
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

# Production stage with Nginx
FROM nginx:alpine AS prod
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
