# ==========================================
# Stage 1: Build
# ==========================================
FROM node:22-alpine AS builder

WORKDIR /app

# Copy dependency files
COPY package.json package-lock.json ./
COPY nx.json tsconfig.base.json ./

# Install all dependencies
RUN npm ci

# Copy source code
COPY . .

# Build both applications
RUN npx nx build agents --configuration=production

# ==========================================
# Stage 2: Runtime
# ==========================================
FROM node:22-alpine

WORKDIR /app

ENV NODE_ENV=production

COPY package.json package-lock.json ./
COPY .env .env

RUN npm ci --omit=dev && npm cache clean --force

# Copy selected build output
COPY --from=builder /app/dist/apps/agents ./dist/apps/agents

# Security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

EXPOSE 80

CMD ["sh", "-c", "node dist/apps/agents/main.js"]