#Stage 1 :BUILD base

FROM node:20.12 AS base-front

WORKDIR /app

COPY package-lock.json package.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Serve the React app using NGINX
FROM nginx:alpine

# Copy the built React app from the previous stage to the NGINX HTML directory
COPY --from=base-front /app/build /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
