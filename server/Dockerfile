# Stage 1: Build
FROM node:20.12-slim AS base-build

WORKDIR /app

# Install dependencies based on the package.json and package-lock.json.
# Caching the dependencies installed in a separate layer.
COPY package-lock.json package.json ./
RUN npm install --only=production

# Copy the rest of the application code
COPY . .

# Stage 2: Production
FROM node:20.12-slim

WORKDIR /app

# Copy the build artifacts from the first stage
COPY --from=base-build /app .

EXPOSE 3001

CMD ["npm", "start"]
