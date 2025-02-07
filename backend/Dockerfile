# Dockerfile pour NestJS

# Étape 1 : builder
FROM node:18 AS builder
WORKDIR /app
# Copier les fichiers package et installer les dépendances
COPY package*.json ./
RUN npm install
# Copier le reste des fichiers et builder l’application
COPY . .
RUN npm run build

# Étape 2 : image de production
FROM node:18-alpine
WORKDIR /app
# Copier uniquement les fichiers nécessaires en production
COPY --from=builder /app/dist ./dist
COPY package*.json ./
RUN npm install --only=production

# Exposer le port de l’application (ex: 3000)
EXPOSE 3000

CMD ["node", "dist/main.js"]
