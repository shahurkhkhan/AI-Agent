# ==========================================
# Stage 1: Build
# ==========================================
FROM node:22-alpine AS builder

WORKDIR /app

# Receive build args
ARG MONGO_URI
ARG OPENAI_API_KEY

# Make available during build
ENV MONGO_URI=$MONGO_URI
ENV OPENAI_API_KEY=$OPENAI_API_KEY

# Copy dependency files
COPY package.json package-lock.json ./
COPY nx.json tsconfig.base.json ./

# Install all dependencies
RUN npm ci

# Copy source code
COPY . .

# Build application
RUN npx nx build agents --configuration=production


# ==========================================
# Stage 2: Runtime
# ==========================================
FROM node:22-alpine

WORKDIR /app

# Receive again for runtime
ARG MONGO_URI
ARG OPENAI_API_KEY

ENV NODE_ENV=production
ENV MONGO_URI=$MONGO_URI
ENV OPENAI_API_KEY=$OPENAI_API_KEY

COPY package.json package-lock.json ./

RUN npm ci --omit=dev && npm cache clean --force

COPY --from=builder /app/dist/apps/agents ./dist/apps/agents

# Security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

EXPOSE 80

CMD ["node", "dist/apps/agents/main.js"]