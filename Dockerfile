FROM node:18 AS build

# Change WORKDIR 
WORKDIR /app

# Sao chép package.json và package-lock.json trước
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Sao chép mã nguồn còn lại vào container
COPY . .

# Build ứng dụng React
RUN npm run build

FROM nginx:alpine

# Copy the build output to Nginx's default directory for serving static files
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
