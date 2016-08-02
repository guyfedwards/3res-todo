FROM mhart/alpine-node

EXPOSE 9000

ADD . /app
WORKDIR /app

RUN npm install --production

ENTRYPOINT ["npm", "start"]
