# Use the official Node.js 18 image
FROM node:18-alpine

# Set the working directory to /app
WORKDIR /

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the application
RUN npm run build

# Expose port 3000 for the application
EXPOSE 3000

# Start the application
CMD [ "npm", "start" ]
