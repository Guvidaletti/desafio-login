FROM node:20-slim AS build
ARG ENV_NAME
RUN echo "Building the app with env: $ENV_NAME"

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app

COPY . .

RUN cp ./public/environment/${ENV_NAME}.js ./public/environment/env.js

RUN pnpm install --frozen-lockfile
RUN pnpm build

FROM nginx:stable AS serve
RUN echo "Serving the app"

COPY --from=build /app/dist /usr/share/nginx/html

COPY ./nginx/nginx.conf /etc/nginx/conf.d/

CMD [ "nginx", "-g", "daemon off;" ]
