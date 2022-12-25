FROM node:18
WORKDIR /src
RUN yarn install
COPY . .
CMD ["yarn","run","start"]

# Production
# RUN npm install -g pm2
# CMD ["pm2-runtime", "ecosystem.config.js", "--env", "production"]
