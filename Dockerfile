# ==========================
# Stage 1 — Build the Vite app
# ==========================
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy dependency files first (better Docker cache)
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build production bundle
RUN npm run build


# ==========================
# Stage 2 — Serve with NGINX
# ==========================
FROM nginx:1.27-alpine

# Copy production build from previous stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy your custom NGIN
