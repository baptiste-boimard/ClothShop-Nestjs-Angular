# Dockerfile pour Angular

# Étape 1 : builder avec Node
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Étape 2 : servir avec Nginx
FROM nginx:alpine
# Supprime le contenu par défaut de Nginx
RUN rm -rf /usr/share/nginx/html/*
# Copier les fichiers générés par Angular dans le dossier de Nginx
COPY --from=builder /app/dist/frontend/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
