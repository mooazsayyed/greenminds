# Stage 1: Build
FROM node:20.12 AS base-build

WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./

RUN npm install 

# Copy the rest of the app's source code
COPY . .

# Build the React app
RUN npm run build 

# Stage 2: Production
FROM nginx:alpine

# Copy the build files from the first stage to NGINX
COPY --from=base-build /app/build /usr/share/nginx/html

# Copy NGINX configuration file
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
