# Use Node image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the app
COPY . .

# Expose port
EXPOSE 5173

# Start the React app on all network interfaces
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
