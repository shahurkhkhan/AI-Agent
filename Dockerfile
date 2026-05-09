FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY dist ./dist/pr-review-agent-runner

EXPOSE 3000

CMD ["node", "dist/pr-review-agent-runner/main.js"]