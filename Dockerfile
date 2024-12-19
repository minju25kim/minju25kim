# Use a smaller base image for building
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Use a smaller base image for the final stage
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy only the built files from the builder stage
COPY --from=builder /app .

# Install only production dependencies
RUN npm ci

# Expose the port the app runs on 
EXPOSE 3000

# Serve the app
CMD ["npm", "start"]