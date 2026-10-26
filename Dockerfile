FROM nginx:1.27-alpine
RUN apk upgrade --no-cache
COPY site/ /usr/share/nginx/html/
EXPOSE 80
