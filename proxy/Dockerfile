FROM nginx:stable AS proxy
RUN echo "Serving the routes"

RUN rm /etc/nginx/conf.d/*

COPY ./proxy/nginx.conf /etc/nginx/conf.d/
CMD [ "nginx", "-g", "daemon off;" ]
