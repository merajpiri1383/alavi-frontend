# Base image with Node.js 22.14.0
FROM node:22.14.0-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json /app
RUN npm install
COPY . .
RUN npm run build

# Expose Next.js port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]