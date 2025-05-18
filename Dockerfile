# Utilisation d'une seule image Node.js pour le développement
FROM node:18-alpine

# Définir le répertoire de travail
WORKDIR /app

# Installer un serveur web simple pour servir l'application
RUN npm install -g http-server

# Copier package.json et installer les dépendances
COPY package*.json ./
RUN npm install

# Exposer le port pour le développement
EXPOSE 8080

# Script de démarrage qui surveille les changements et recompile
CMD ["sh", "-c", "npm install nodemon -g && nodemon --watch src --watch public --watch *.js --watch *.ts --watch *.json --watch index.html -e js,ts,vue,html,css,json --exec 'npm run build && http-server dist -p 8080 -a 0.0.0.0'"]