# Use a base image with JDK 23 (or other versions)
FROM openjdk:23-jdk-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the build files from the target directory
COPY target/*.jar app.jar

# Expose the port (Render assigns a dynamic port)
EXPOSE 8080

# Set environment variables
ENV PORT=8080

# Run the application
CMD ["sh", "-c", "java -jar app.jar --server.port=$PORT"]
