FROM node:20.10.0 AS builder

WORKDIR /app

# Copy package files first

COPY package*.json ./

# Install dependencies including bootstrap
RUN npm install --legacy-peer-deps

COPY . .

# Build the application
RUN npm run build

# Production stage
EXPOSE 3000

CMD ["npm","run","start"]