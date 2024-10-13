# Stage 1: Build
FROM node:20.12 AS base-build

WORKDIR /app

COPY package-lock.json package.json ./

RUN npm install

COPY . .

# Stage 2: Production
FROM gcr.io/distroless/nodejs20-debian12

WORKDIR /app

COPY --from=base-build /app .

EXPOSE 3001

CMD ["npm", "start"]