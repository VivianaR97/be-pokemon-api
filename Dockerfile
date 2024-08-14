FROM node:20-alpine

# Crear directorio de la aplicación
WORKDIR /usr/app

# Copiar los archivos de dependencias y luego instalar
COPY package*.json ./
RUN npm install
#RUN npm install -g nodemon

# Copiar el resto del código fuente
COPY . .

RUN mkdir -p /usr/app/dist

# Construir la aplicación
RUN npm run build

# Exponer el puerto (si es necesario)
EXPOSE 3001

# Comando para iniciar la aplicación
CMD ["npm", "run", "start"]
