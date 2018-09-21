FROM node:6.10.3

LABEL maintainer="Yuttasak Pannawat <yuttasakcom@gmail.com>"

RUN mkdir -p /app
ADD package.json /app
WORKDIR /app
RUN npm install --verbose
ENV NODE_PATH=/app/node_modules

RUN mkdir -p /app/logs
RUN touch /app/logs/all.log

RUN ln -sf /dev/stdout /app/logs/all.log

COPY . /app/

CMD node /app/bin/www
