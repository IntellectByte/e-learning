# build environment
FROM node:14-alpine AS elearning-build
WORKDIR /
COPY . ./
RUN npm install && npm run build

#server environment
FROM nginx:alpine
COPY .nginx/nginx.conf /etc/nginx/conf.d/configfile.template
ENV PORT 8080
ENV HOST 0.0.0.0
RUN sh -c "envsubst '\$PORT'  < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf"
COPY --from=elearning-build .next/ /usr/share/nginx/html
RUN rm -rf /usr/share/nginx/html/*
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]

#COPY --from=elearning-build .next/ /usr/share/nginx/html
#ENTRYPOINT ["nginx", "-g", "daemon off;"]