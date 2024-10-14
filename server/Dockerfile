# Stage 1: Build
FROM node:20.12-slim AS base-build

WORKDIR /app

# Copy package files and install dependencies
COPY package-lock.json package.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Stage 2: Production
# Use the node:slim image for a production image
FROM node:20.12-slim

WORKDIR /app

# Copy the build artifacts from the first stage
COPY --from=base-build /app .

# Expose the port your application will run on
EXPOSE 3001

# Start the application using npm
CMD ["npm", "start"]
